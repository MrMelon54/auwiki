+++
title = "CheckProtect"
weight = 48
[extra]
tag = 48
+++

This RPC is sent by an Guardian Angel when protecting a player.

<!-- more -->

```
Rpc[48] := target:netObject;
```

|            |                                            |
| ---------- | ------------------------------------------ |
| Sent by:   | Guardian Angel                             |
| Called on: | PlayerControl of protecting Guardian Angel |
| Target is: | The PlayerControl that is being protected  |

This RPC is sent when the "Protect" button is clicked by an Guardian Angel. When this RPC is received by the host, a [ProtectPlayer](@/networking/rpc/45_protectplayer.md) RPC is sent.

This RPC is very similar to [CheckMurder](@/networking/rpc/47_checkmurder.md)

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
