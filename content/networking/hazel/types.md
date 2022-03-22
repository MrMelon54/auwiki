+++
title = "Hazel types"
+++

While the structure of Hazel packets is defined by the application, there are some data types predefined by Hazel. This article goes over these basic building blocks, which are [Integers](#integers), [Packed Integers](#packed-integers), [Strings/Byte arrays](#strings-and-byte-arrays), and [Messages](#messages).

<!-- more -->

Reading and Writing packets is implemented in Hazel in the MessageReader and MessageWriter class respectively.

## Integers

The most common datatype in packets are integers. Multiple sizes are in use, ranging from a single 8-bit byte to 64-bit integers.
Integers are encoded in Little Endian byte order. This means that the least significant byte is put into the network first.

Floating points are encoded in a similar manner: the internal representation of a floating point, which is in IEEE 754 Single Precision format, is written as bytes onto the network.

## Packed Integers

Next to their normal 4-byte format, Hazel can also encode 32-bit integers in a usually more compact format called Packed Integers.
In this format, the most significant bit is used to indicate if another byte should be read, while the other 7 bits contain the actual value of the integer.

The following piece of code is used by Hazel to [write](https://github.com/willardf/Hazel-Networking/blob/98d9f5d2c8664b19707907d1a7ca4863ec3e396a/Hazel/MessageWriter.cs#L302) and [read](https://github.com/willardf/Hazel-Networking/blob/98d9f5d2c8664b19707907d1a7ca4863ec3e396a/Hazel/MessageReader.cs#L393) packed integers, comments added for readability:

```cs
// Taken from Hazel source code, class MessageWriter.cs, licensed under MIT
// Comments added by AUWiki for readability
public void WritePacked(uint value)
{
    do
    {
        // Get the 8 lowest bits of the value
        byte b = (byte)(value & 0xFF);

        // Every value that's larger than 0x80 will need another byte, so set the continuation bit
        if (value >= 0x80)
        {
            b |= 0x80;
        }

        this.Write(b);

        // Because we've written the 7 least significant bits, we remove them from our value
        value >>= 7;
    } while (value > 0); // Continue until entire number is written
}
```

```cs
// Taken from Hazel source code, class MessageReader.cs, licensed under MIT
// Comments added by AUWiki for readability
public uint ReadPackedUInt32()
{
    bool readMore = true;
    int shift = 0; // Amount of bits each new byte will need to be bitshifted by.
    uint output = 0; // Final value

    // This true if a continuation bit was read in the last cycle, if true read another byte. Its initial value is true, so at least one byte is always read.
    while (readMore)
    {
        if (this.BytesRemaining < 1) throw new InvalidDataException($"Read length is longer than message length.");

        byte b = this.ReadByte();
        // Check if the continuation bit is set on this byte
        if (b >= 0x80)
        {
            readMore = true;
            // Remove the continuation bit from the byte
            b ^= 0x80;
        }
        else
        {
            readMore = false;
        }

        // Add the contents of this byte to the output
        output |= (uint)(b << shift);
        // The next byte will need to be shifted 7 bits further
        shift += 7;
    }

    return output;
}
```

Packed Integers allow integers of a wide varying size to be written in an on average more compact notation. The downside is that more bytes are used compared to encoding a fixed size integer if such a wide range of numbers is not possible.

There is also an signed integer variant, but its use in new designs cannot be recommended: due to how two's complement numbers work, the highest bit of a 32-bit number would be set if the number is negative, which means that all negative numbers would be encoded in 5 bytes, which is less efficient than when a 32-bit number was encoded directly.

## Strings and byte arrays

Strings and byte arrays usually consist of a packed 32-bit unsigned integer encoding the length of the following string/byte array in bytes, followed by the actual data of the string/byte array. It is expected that strings are valid UTF-8. It is also possible to read a certain amount of bytes without a length indicator, if this is constant or communicated in a different way.

## Messages

Messages are used in Hazel to introduce a level of nesting in packets. They have a length and a tag, which makes them useful for encoding for example, RPC numbers, system numbers and much more.

They start with an unsigned 16-bit integer that encodes the length of the data, then a byte that gives the tag of the message. The actual message then follows. Note that bytes used for the tag (and the length) are not included in the length of the message.
