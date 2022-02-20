+++
title = "ClearVote"
weight = 25
[extra]
tag = 25
+++

The ClearVote Rpc is used by the host to tell a client that their vote has been removed, thus removing the mark on the voting screen.

<!-- more -->

```
Rpc[25];
```

|            |                                                               |
| ---------- | ------------------------------------------------------------- |
| Sent by:   | The host of the room when someone's vote suspect disconnects  |
| Called on: | MeetingHud spawned when the meeting started                   |

Sent by the host of the room when someone's vote suspect disconnects, thus clearing the "voted player" on the voters screen.
