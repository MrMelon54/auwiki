+++
title = "ExitVent"
weight = 20
[extra]
tag = 20
+++

This RPC is sent by a player when they exit from a vent.

<!-- more -->

```
Rpc[20] := ventId:pi32;
```

|            |                                     |
| ---------- | ----------------------------------- |
| Sent by:   | An Impostor or Engineer             |
| Called on: | PlayerPhysics of the player venting |

When a player receives this packet they will moves the venting player out of the vent. Only Engineers and Impostors are allowed to vent. The `ventId` is a packed integer that represent the id of the vent that was moved into.

When a player enters a vent, {{ link(to="EnterVent") }} is called. When a player moves to another vent, [SnapTo](@/networking/rpc/21_snapto.md) is called.
