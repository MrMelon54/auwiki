+++
title = "SetColor"
weight = 8
[extra]
tag = 8
+++

The SetColor RPC updates the display color of the player.

<!-- more -->

```
Rpc[8] := color:u8;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | The host of the lobby                    |
| Called on: | {{ link(to="PlayerControl") }} of the joining player      |

Sent by the host's {{ link(to="PlayerControl") }} to each player to update their color, usually upon receiving a {{ link(to="CheckColor") }} RPC packet from whichever player is having their color set when they join the lobby.

> See the {{ link(to="CheckColor") }} page to see the procedure.
