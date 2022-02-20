+++
title = "CheckName"
weight = 5
[extra]
tag = 5
stub = true
+++

The CheckName RPC is used by joining players to ask the host to update their name, usually their username for their login in the menu.

<!-- more -->

```
Rpc[5] := name:str;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | A player when joining the lobby          |
| Called on: | PlayerControl of the joining player      |

Sent by a joining player's PlayerControl to the host to get their display name updated.

When received by the host, the host should check whether the name requested is already in use, and if so, append a number to the end to distinguish that player from others with the same name. Then the, host sets the player's name with [SetName](@/networking/rpc/06_setname.md).

[![](https://mermaid.ink/img/pako:eNqdUTtvwjAQ_isnL1lAatcMrVrKgFSlA92SSBz2QSxiO7Id0Qjx32snQaQvhnry3X2vs0-MG0EsZbvaHHmF1sP7c6FhPLwifliY2tj8TcMiVhkqKmE-fwCsLaHolh_SeXflfGnnKwe-IkuXNiA0NXZk4Sh9FWboQQfJx7LQf2gEM3glD4lMYEtwN5g3DWmRtWpLdsKbdPOnvuhp3sQUEMohem1Mc8MtMz3KBfw0VWT9c6FI_aH8fbjS3JIiPa7awT38suuVF1XydXiZuNsQInG9ObRO6j1swjD-16ZkM6bIKpQi_PUpShQssBQVLA1XgfZQsEKfA65tBHpaCumNZekOa0czhq03605zlnrb0gX0InFvUY2o8yc6N7zn)](https://mermaid.live/edit/#pako:eNqdUTtvwjAQ_isnL1lAatcMrVrKgFSlA92SSBz2QSxiO7Id0Qjx32snQaQvhnry3X2vs0-MG0EsZbvaHHmF1sP7c6FhPLwifliY2tj8TcMiVhkqKmE-fwCsLaHolh_SeXflfGnnKwe-IkuXNiA0NXZk4Sh9FWboQQfJx7LQf2gEM3glD4lMYEtwN5g3DWmRtWpLdsKbdPOnvuhp3sQUEMohem1Mc8MtMz3KBfw0VWT9c6FI_aH8fbjS3JIiPa7awT38suuVF1XydXiZuNsQInG9ObRO6j1swjD-16ZkM6bIKpQi_PUpShQssBQVLA1XgfZQsEKfA65tBHpaCumNZekOa0czhq03605zlnrb0gX0InFvUY2o8yc6N7zn)
