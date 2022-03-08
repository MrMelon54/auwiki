+++
title = "CheckName"
weight = 5
[extra]
tag = 5
+++

The CheckName RPC is used by joining players to ask the host to update their name which can be set in the login menu.

<!-- more -->

```
Rpc[5] := name:str;
```

|            |                                                      |
| ---------- | ---------------------------------------------------- |
| Sent by:   | A player when joining the lobby                      |
| Called on: | {{ link(to="PlayerControl") }} of the joining player |

Sent by a joining player's {{ link(to="PlayerControl") }} to the host to get their display name updated.

When received by the host, the host should check whether the name requested is already in use, and if so, append a number to the end to distinguish that player from others with the same name. Then the, host sets the player's name with {{ link(to="SetName") }}.

## Flow

When receiving the packet, the host should check whether or not a player already has the requested name. If so, then the host should keep appending an incrementing number until the name isn't taken, for example: `Edward`, `Edward 1`, `Edward 2`:

![screenshot showing how each player has a name with a number at the end](../check_name_example.png)

Then, the host should set their name with {{ link(to="SetName") }} with either the modified name with a number at the end if the requested name was taken, or the requested name otherwise.

![diagram explaining the flow](../check_name_diagram.svg)
