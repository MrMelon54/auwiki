+++
title = "ProtectPlayer"
weight = 45
[extra]
tag = 45
+++

This RPC is sent by the host when a player has been protected by a Guardian Angel.

<!-- more -->

```
Rpc[45] := target:netObject color:i8;
```

|            |                                           |
| ---------- | ----------------------------------------- |
| Sent by:   | Host of the game                          |
| Called on: | {{ link(to="PlayerControl") }} of the Guardian Angel       |
| Target is: | The {{ link(to="PlayerControl") }} that is being protected |

This packet is sent by the host of the game when a [CheckProtect](@/networking/rpc/48_checkprotect.md) RPC is received by the host. When each player receives a ProtectPlayer RPC, they will enable a protection shield for the protected player for a configured amount of time. When the protection time expires, the protection particles are removed. The color of the protection particles is determined by the color parameter. If a [MurderPlayer](@/networking/rpc/12_murderplayer.md) RPC is received while protection is active, the murder attempt will be blocked and the protection removed.

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
