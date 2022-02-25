+++
title = "SetName"
weight = 6
[extra]
tag = 6
+++

The SetName RPC updates the display name above a player.

<!-- more -->

```
Rpc[6] := name:str;
```

**Note**: This doesn't have to be the same name as seen in the [JoinGame](@/networking/rootmessages/01_joingame.md) packet, although it usually is.

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | The host of the lobby                    |
| Called on: | {{ link(to="PlayerControl") }} of the joining player      |

Sent by the host's {{ link(to="PlayerControl") }} to each player to update their name, usually upon receiving a {{ link(to="CheckName") }} RPC packet from whichever player is having their name set when they join the lobby.

> See the {{ link(to="CheckName") }} page to see the procedure.
