+++
title = "MurderPlayer"
weight = 12
[extra]
tag = 12
+++

This RPC is sent by the host when a murder is attempted on another player.

<!-- more -->

```
Rpc[12] := target:netObject;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | Host of the game (Since 2021.11.9)       |
| Called on: | PlayerControl of the killing Impostor    |
| Target is: | The PlayerControl that is being murdered |

This packet is sent by the host of the game when a [CheckMurder](@/networking/rpc/47_checkmurder.md) RPC is received by the host. When each player receives this packet, they will check if the target is actively protected (see [ProtectPlayer](@/networking/rpc/45_protectplayer.md)). If this is the case, the protection is removed and an animation is shown that shows the shield breaking. If the target is not protected, they are marked as killed by the owner of the PlayerControl this RPC was called on and become a ghost.

The impostor that performed the kill will get a cooldown, but if the kill was blocked by a protection shield, the cooldown is halved.

[![](https://mermaid.ink/img/pako:eNp9UMFOwzAM_RXL5-0HegCJwYHDYAIuU9ODFXs0WpNUTgqapv07WbuiCQQ-2c_vPT_5iDayYIW7Ln7aljTD250JUCqGVSt2vx6URevnAFdjA8vlDbi06eggutGYxWbhSfgLrh8T5FagH2HoZ_y2MeEPSfGHraTxjIqPH3JZufif5CmOiiSBZ-uf6vplBK4CpTlR2X4nOlvUa9L9nJoSsBADBQbxLsP0iSlEgwv0op4cl18ezxYGywUvBqvScjEyaMKp8IaeKcsDuxwVqx11SRZIQ46vh2CxyjrITLp39K7kL6zTFzvOloU)](https://mermaid.live/edit/#pako:eNp9UMFOwzAM_RXL5-0HegCJwYHDYAIuU9ODFXs0WpNUTgqapv07WbuiCQQ-2c_vPT_5iDayYIW7Ln7aljTD250JUCqGVSt2vx6URevnAFdjA8vlDbi06eggutGYxWbhSfgLrh8T5FagH2HoZ_y2MeEPSfGHraTxjIqPH3JZufif5CmOiiSBZ-uf6vplBK4CpTlR2X4nOlvUa9L9nJoSsBADBQbxLsP0iSlEgwv0op4cl18ezxYGywUvBqvScjEyaMKp8IaeKcsDuxwVqx11SRZIQ46vh2CxyjrITLp39K7kL6zTFzvOloU)

## Version History

| Version   | Change                                             |
| --------- | -------------------------------------------------- |
| < 2021.x  | Introduced, sent by impostor when killing a player |
| 2021.11.9 | Now sent by host                                   |
