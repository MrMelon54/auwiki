+++
title = "CastVote"
weight = 24
[extra]
tag = 24
+++
The CastVote Rpc is used to tell the host that a player has made a vote in the voting screen.

<!-- more -->

```
Rpc[24] := voter:u8 suspect:u8;
```

|             |                                                       |
| ----------- | ----------------------------------------------------- |
| Sent by:    | A player when they vote another player to be ejected  |
| Called on:  | {{ link(to="MeetingHud") }} spawned when the meeting started           |
| Sent to:    | The host of the room                                  |
| Voter is:   | The player ID of the player casting the vote          |
| Suspect is: | The player ID of the suspect who the player is voting |

Sent by a player the host of the room when the player votes another player to be ejected.

## Flow
The host should then send a {{ link(to="SendChatNote") }} to all players, indicating that they have made a vote in the chat box.

This should also trigger a {{ link(to="Data") }} update for the {{ link(to="MeetingHud") }} in question, sent to all clients to update all vote states.

Then, the host should check if every player has voted. If so, then end the meeting, otherwise continue the meeting.

![](../cast_vote_diagram.svg)
