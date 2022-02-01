+++
title = "EnterVent"
weight = 19
[extra]
tag = 19
+++

This RPC is sent by a player when they enter a vent.

<!-- more -->

```
Rpc[19] := ventId:pi32;
```

|            |                                     |
| ---------- | ----------------------------------- |
| Sent by:   | An Impostor or Engineer             |
| Called on: | PlayerPhysics of the player venting |

When a player receives this packet, they will walk the player to this vent, then move them into this vent. Only Engineers and Impostors are allowed to vent. The `ventId` is a packed integer that represent the id of the vent that was moved into.

When a player leaves a vent, [ExitVent](@/networking/rpc/20_exitvent.md) is called. When a player moves to another vent, [SnapTo](@/networking/rpc/21_snapto.md) is called.
