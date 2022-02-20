+++
title = "SetColor"
weight = 8
[extra]
tag = 8
stub = true
+++

The SetColor RPC updates the display color of the player.

<!-- more -->

```
Rpc[8] := color:u8;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | The host of the lobby                    |
| Called on: | PlayerControl of the joining player      |

Sent by the host's PlayerControl to each player to update their color, usually upon receiving a [CheckColor](@/networking/rpc/07_checkcolor.md) RPC packet from whichever player is having their color set when they join the lobby.
