+++
title = "PlayAnimation"
weight = 0
[extra]
tag = 0
+++

The PlayAnimation RPC is used for animations when visual tasks are completed.

<!-- more -->

```
Rpc[0] := animId:u8;
```

|            |                                                                       |
| ---------- | --------------------------------------------------------------------- |
| Sent by:   | Players when triggering an animation                                  |
| Called on: | {{ link(to="PlayerControl") }} of the player triggering the animation |

There are 4 tasks that trigger visual animations:

| Animation ID | Task Name           | Description                                                                                |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------ |
| 1            | Prime Shields       | Turn on lights on the outside of the ship after task completion, only sent once per round. |
| 6            | Clear Asteroids     | Fire weapons while task is being completed                                                 |
| 9, 10        | Empty Garbage/Chute | Show garbage being ejected after task completion                                           |

Medbay scans use a different RPC to trigger the animation, see {{ link(to="SetScanner") }}.

Note that this packet is only sent if the game option "Visual Tasks" is enabled. If this option is disabled the animation is only visible for the player triggering the animation.
