+++
title = "39-43 - SetCosmeticsStr"
weight = 39
[extra]
+++

These RPC's are used to set the cosmetics of a player.

<!-- more -->

There is one RPC for each type of cosmetic, 5 in total, but because they're implemented almost the same we're explaining them together on this page. They are sent by the client when spawning a {{ link(to="PlayerControl") }} or when changing cosmetics using the Customization Menu.

```
Rpc[39] := hatId:str; // SetHatStr
Rpc[40] := skinId:str; // SetSkinStr
Rpc[41] := petId:str; // SetPetStr
Rpc[42] := visorId:str; // SetVisorStr
Rpc[43] := namePlateId:str; // SetNamePlateStr
```

Before v2021.11.9 these RPC's used numerical id's to indicate which hat/skin/pet was used. 2021.11.9 also introduces visor and nameplate cosmetics, so it reserved an RPC id for SetVisor and SetNameplate, then immediately retired it in favor of SetVisorStr/SetNamePlateStr.

## Version History

| Version   | Change                                                                           |
| --------- | -------------------------------------------------------------------------------- |
| 2021.11.9 | Introduced as a replacement for the numerical ID based RPC's (9. 10, 17, 36, 37) |
