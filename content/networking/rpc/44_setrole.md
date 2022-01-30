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

| Id  | Role           | Team             |
| --- | -------------- | ---------------- |
| 0   | Crewmate       | Crewmates        |
| 1   | Impostor       | Impostors        |
| 2   | Scientist      | Crewmates        |
| 3   | Engineer       | Crewmates        |
| 4   | Guardian Angel | (Dead) Crewmates |
| 5   | Shapeshifter   | Impostors        |
