+++
title = "Schema notation"
+++

To denote how packets are decoded in Among Us a schema notation is used throughout the wiki. This article details how the schema notation works.

<!-- more -->

The schema consists of a bunch of rules, with each rule consisting of zero or more components. Here's an example:

```
Hello := version:i32 name:str nonce:u32 language:u32 chat_mode:u8;
```

This is the Hello packet used by Among Us versions before 2022.11.9 and consisted of 5 components. Each rule has a name which identifies it and ends with a `;` to identify the end of the rule. Each component also has a label that identifies it and a type, with the type following the label. For an overview on the list of types, see [the type overview section](#component-types).

It is possible to include other rules in a rule by using their name as the type:

```
Hello := version:i32 name:str nonce:u32 language:u32 chat_mode:u8 platform_data:PlatformSpecificData;

// NOTE: this definition of PlatformSpecificData is a simplified version.
PlatformSpecificData := length:u16 tag:u8 platform_name:str;
```

# Tagged Rules

It is possible to conditionally choose which rule will be used to parse the remainder of the data by using a previous value as a tag. In case of our Hello packet, this means that we can parse our packet differently based on the tag of the PlatformSpecificData:

```
// Win10 and Xbox edition respectively
PlatformSpecificDataId(4) := xbox_id:u64;
PlatformSpecificDataId(9) := xbox_id:u64;
// PS edition
PlatformSpecificDataId(10) := psn_id:u64;
```

The number between `()`, also known as a tag, is used to determine which rule applies.
When calling a tagged rule, the name of the component that will be used to match against the tag should be added as an argument:

```
PlatformSpecificData := length:u16 tag:u8 platform_name:str id:PlatformSpecificDataId(tag);
```

It is also possible to create a so-called default rule: this rule applies when no specific rule exists. Default rules use `_` instead of an integer as a tag.
In the case of our PlatformSpecificData example, no platform specific id is provided for other platforms than win10/xbox/playstation, so a default rule is needed that will be called if no more specific rule exists:

```
// Steam, Itch, Epic, etc don't send over an id.
PlatformSpecificDataId(_) := ;
```

It is possible to not have a default rule, but if no default rule is present it is required to match a case.

# Messages

Messages are Hazel's inbuilt way to make a hierachy. As described in the [Types overview](@/networking/hazel/types.md#messages), each message has a tag and a length. You could try to describe them with a schema rule:

```
Message := length:u16 tag:u8 inner:InnerRule(tag);
```

This definition has some flaws, for example it does not allow customizing the inner rule. This could be fixed by adding generics to our schema, making the rule used for the inner rule an argument:

```
// NOTE: generics are not supported, this is not an official part of the schema specification
Message<T> := length:u16 tag:u8 inner:T(tag);
```

This version still has a flaw, because in Hazel the length of the inner rule is determined by the length value that was passed to the message. Because of this and because Messages are the only exception that needs this syntax, Message is implemented differently in the compiler as a sort of standard rule.

If we'd rewrite our Hello packet to use a Message rule, it'd look like this:

```
Hello := version:i32 name:str nonce:u32 language:u32 chat_mode:u8 platform_data:Message<PlatformSpecificData>;

// Win10 and Xbox edition respectively
PlatformSpecificData(4) := platform_name:str xbox_id:u64;
PlatformSpecificData(9) := platform_name:str xbox_id:u64;
// PS edition
PlatformSpecificData(10) := platform_name:str psn_id:u64;
// Steam, Itch, Epic, etc don't send over an id.
PlatformSpecificData(_) := platform_name:str;
```

# Component types

A bunch of types are used through the schemas. Simple types like integers and strings use small letters, while a capital is used to refer to another rule. This list contains all the simple types that are available:

- u8, u16, u32 and u64 are unsigned integers of 8, 16, 32 or 64-bits respectively.
- i8, i16, i32 and i64 are the signed versions of these.
- pu32, pi32 are used for [packed integers](@/networking/hazel/types.md#packed-integers).
- str is used for [strings](@/networking/hazel/types.md#strings-and-byte-arrays).
- Message is used for [messages](@/networking/hazel/types.md#messages], but is a somewhat [special case](#messages).

# Repetition

It is possible to repeat certain components of a rule multiple times. This could be useful if you need to parse a certain amount of bytes based on a length indicators, like when parsing a string:

```
String := length:pu32 chars:u8[length];
```

The value between `[]` then indicates the amount of times that component will be repeated. If you don't want to match on a previous component, there are also some other value you can put between square brackets:

- `[*]` is used for zero or more matches. Note that you cannot have components after a component with this repetition value.
- `[+]` is used for one or more matches. Note that you also cannot have components after a component with this repetition value.
- `[?]` is used for an optional components: if the end of the message is reached this value will not be parsed, but if the end was not yet reached it will be parsed once. Note that you cannot have mandatory components after this component: all components after this must either have `[?]` or `[*]` as a repetition value.

These limitations are to ensure parsing remains unambiguous: it is important that data can only be parsed in one way with any given set of rules.
