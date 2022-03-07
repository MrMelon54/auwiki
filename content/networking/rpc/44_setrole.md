+++
title = "SetRole"
weight = 44
[extra]
tag = 44
+++

This RPC sets a player's role.

<!-- more -->

It is sent by the host to each player when a round starts to inform them of their role. When a player dies and they become a guardian angel, SetRole is called as well. Its only argument is the id of the new role:

```
Rpc[44] := roleId:u16;
```

The next table explains how role ID's are linked to roles and to which team these roles belong:

| Id  | Role           | Team             | Special RPC                                                                             |
| --- | -------------- | ---------------- | --------------------------------------------------------------------------------------- |
| 0   | Crewmate       | Crewmates        |                                                                                         |
| 1   | Impostor       | Impostors        | Can {{link(to="EnterVent", label="Vent")}}, {{link(to="MurderPlayer", label="Murder")}} |
| 2   | Scientist      | Crewmates        |                                                                                         |
| 3   | Engineer       | Crewmates        | Can {{link(to="EnterVent", label="Vent")}}                                              |
| 4   | Guardian Angel | (Dead) Crewmates | Can {{link(to="CheckProtect", label="Protect")}}                                        |
| 5   | Shapeshifter   | Impostors        | Can {{link(to="Shapeshift")}}                                                           |

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
