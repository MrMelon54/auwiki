+++
title = "CheckMurder"
weight = 47
[extra]
tag = 47
+++

This RPC is sent by an Impostor when a murder is attempted on another player.

<!-- more -->

```
Rpc[48] := target:netObject;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | Killing Impostor (or Shapeshifter)       |
| Called on: | PlayerControl of killing Impostor        |
| Target is: | The PlayerControl that is being murdered |

This RPC is sent when the "Kill" button is pressed by an Impostor. When this RPC is received by the host, a [MurderPlayer](@/networking/rpc/12_murderplayer.md) RPC is sent.

This RPC is very similar to [CheckProtect](@/networking/rpc/48_checkprotect.md)

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
