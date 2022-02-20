+++
title = "CheckColor"
weight = 7
[extra]
tag = 7
stub = true
+++
TODO
<!-- more -->

The CheckColor RPC is used by joining players to ask the host to set their color.

<!-- more -->

```
Rpc[7] := color:str;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | A player when joining the lobby          |
| Called on: | PlayerControl of the joining player      |

Sent by a joining player's PlayerControl to the host to get their display color updated.

When received by the host, the host should check whether the color requested is already in use, and if so, use the next color available instead. Then the, host sets the player's color with [SetColor](@/networking/rpc/08_setcolor.md).

[![](https://mermaid.ink/img/pako:eNqdkb1uAyEQhF9lRZPGfgGKRIrjIk1S2E10nOQVrH3IHJwWTvbJ8rsHLuc4P4qLUMHOfMMITkIHQ0KKrQsH3SAnWD8qD9PSDen9IrjA1auHxeephvn8HtAxoRmWRxtTvELfxtVzhNQQ02UMCJ3DgRgONjVZwwS6ZD7Uyv8Rkm-DNQ8lCDwdJ2Ds4ELoblAvYXRF8uZreqH-26ywv6J_im8U5e3KV6YkVCtKo_ejwV2c_H20fgebrI7vvqnFTLTELVqTP-1UQpTIXEtKyLw1yHsllD9nX98ZTLQ0NgUWcosu0kxgn8Jq8FrIxD1dTE8Wd4zt5Dq_A7bVrhw)](https://mermaid.live/edit/#pako:eNqdkb1uAyEQhF9lRZPGfgGKRIrjIk1S2E10nOQVrH3IHJwWTvbJ8rsHLuc4P4qLUMHOfMMITkIHQ0KKrQsH3SAnWD8qD9PSDen9IrjA1auHxeephvn8HtAxoRmWRxtTvELfxtVzhNQQ02UMCJ3DgRgONjVZwwS6ZD7Uyv8Rkm-DNQ8lCDwdJ2Ds4ELoblAvYXRF8uZreqH-26ywv6J_im8U5e3KV6YkVCtKo_ejwV2c_H20fgebrI7vvqnFTLTELVqTP-1UQpTIXEtKyLw1yHsllD9nX98ZTLQ0NgUWcosu0kxgn8Jq8FrIxD1dTE8Wd4zt5Dq_A7bVrhw)
