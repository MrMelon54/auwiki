+++
title = "CheckColor"
weight = 7
[extra]
tag = 7
+++
The CheckColor RPC is used by joining players to ask the host to set their color.

<!-- more -->

```
Rpc[7] := color:str;
```

|            |                                          |
| ---------- | ---------------------------------------- |
| Sent by:   | A player when joining the lobby          |
| Called on: | {{ link(to="PlayerControl") }} of the joining player      |

Sent by a joining player's {{ link(to="PlayerControl") }} to the host to get their display color updated.

When received by the host, the host should check whether the color requested is already in use, and if so, use the next color available instead. Then the, host sets the player's color with {{ link(to="SetColor") }}.

## Flow
When receiving the packet, the host should check whether or not a player already has the requested color. If so, then the host should try the next color and repeat until there is an available colors, or just use the requested color if there are no available colours.

Then, the host should set their color with {{ link(to="SetColor") }} with either the modified color if the requested color was taken, or the requested color otherwise.

![](../check_color_diagram.svg)
