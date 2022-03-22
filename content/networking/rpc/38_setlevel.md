+++
title = "SetLevel"
weight = 38
[extra]
tag = 38
+++

The SetLevel RPC is used to set the player's experience level.

<!-- more -->

```
Rpc[38] := level:pu32;
```

|            |                                                       |
| ---------- | ----------------------------------------------------- |
| Sent by:   | Client when spawning a {{ link(to="PlayerControl") }} |
| Called on: | The just spawned PlayerControl                        |

XP is earned when playing games on official servers. When a certain amount of XP is reached, the player reaches the next level. The player level is visible to all other players, but does not serve any other purpose.

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
