+++
title = "SetScanner"
weight = 15
[extra]
tag = 15
+++

This SetScanner RPC is used to enable or disable the Medbay scanning animation.

<!-- more -->

```
Rpc[15] := on:bool sid:u8;
```

|            |                                                               |
| ---------- | ------------------------------------------------------------- |
| Sent by:   | Player that is starting or ending a medbay scan.              |
| Called on: | {{link(to="PlayerControl")}} of player that is being scanned. |

The boolean shows if the animation should be enabled or disabled. The sequence id is incremented per SetScanner packet sent or received. If another packet has been already sent with a higher sequence id, this packet will be ignored.

Note that this packet is only sent if the game option "Visual Tasks" is enabled. If this option is disabled the animation is only visible for the player triggering the animation.
