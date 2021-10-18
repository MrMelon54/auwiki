+++
title = "Hazel types"
+++

While the structure of a Hazel packet is usually application defined, they always use the following data types to read or write parts of a packet.

Reading and Writing packets is implemented in Hazel in the MessageReader and MessageWriter class respectively.

# Integers

The most common datatype in packets are integers. Multiple sizes are in use, ranging from a single 8-bit byte to 64-bit integers.
Integers are encoded in Little Endian byte order. This means that the least significant byte is put into the network first.

Floating points are encoded in a similar manner: the internal representation of a floating point, which is in IEEE xxx format, is written as bytes onto the network.

# Packed Integers

It is also possible to encode 32-bit integers in a more compact format called Packed Integers. This works checking if the most significant bit of a byte is set, and if it is, read another byte. This repeats until the most significant bit is no longer set. The number is then the remaining 7 bits of each byte combined together in little endian order.

The following piece of C# code is used to read packed integers, the code to write them is similar:

```cs
// Taken from Hazel source code, licensed under MIT
public uint ReadPackedUInt32()
    bool readMore = true;
    int shift = 0;
    uint output = 0;

    while (readMore)
    {
        if (this.BytesRemaining < 1) throw new InvalidDataException($"Read length is longer than message length.");

        byte b = this.ReadByte();
        if (b >= 0x80)
        {
            readMore = true;
            b ^= 0x80;
        }
        else
        {
            readMore = false;
        }

        output |= (uint)(b << shift);
        shift += 7;
    }

    return output;
}
```

The advantage of Packed Integers is that they can represent a small number in a more compact notation when it is possible to send both small and large numbers. The downside is that more bytes are used compared to encoding a fixed size integer if such a wide range of numbers is not possible.

There is also an signed integer variant, but its use in new designs cannot be recommended: due to how two's complement numbers work, the highest bit of a 32-bit number would be set if the number is negative, which means that all negative numbers would be encoded in 5 bytes, which is less efficient than when a 32-bit number was encoded directly.

# Strings and byte arrays

Strings and byte arrays usually consist of a packed 32-bit integer encoding the length of the following string/byte array in bytes, followed by the actual data of the string/byte array. It is expected that strings are valid UTF-8. It is also possible to read a certain amount of bytes without a length indicator, if this is constant or communicated in a different way.

# Messages

Messages are used in Hazel to introduce a level of nesting in packets. They have a length and a tag, which makes them useful for encoding for example, RPC numbers, system numbers and much more. They are also used in Hazel's Root Message, which is at the start of each packet.

They start with an unsigned 16-bit integer that encodes the length of the data, then a byte that gives the tag of the message. The actual message then follows. Note that bytes used for the tag (and the length) are not included in the length of the message.
