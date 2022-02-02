+++
title = "QueryPlatformIds"
weight = 22
[extra]
tag = 22
+++

This message is sent when certain clients connect to a server.

<!-- more -->

```
RootC2S[22] := gameCode:i32;
RootS2C[22] := gameCode:i32; data:PlatformSpecificData*;
```

When the server receives this packet, it returns the PlatformSpecificData of the connected players. The client then checks if it can crossplay with all players in this room and only connects if it can.

Note that not all clients send this message: The Microsoft Store does, but the Steam, Epic and Itch versions do not.

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
