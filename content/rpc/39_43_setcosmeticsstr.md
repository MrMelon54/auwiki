+++
title = "39-43 - SetCosmeticsStr"
weight = 39
[extra]
stub = true
+++

These RPC's are used to set the cosmetics of a player.

<!-- more -->

There is one RPC for each type of cosmetic, 5 in total, but because they're implemented almost the same we're explaining them together on this page. They are sent by the client when spawning a PlayerControl or when changing cosmetics using the Customization Menu.

```
Rpc[39] := hatId:str; // SetHatStr
Rpc[40] := skinId:str; // SetSkinStr
Rpc[41] := petId:str; // SetPetStr
Rpc[42] := visorId:str; // SetVisorStr
Rpc[43] := namePlateId:str; // SetNamePlateStr
```
