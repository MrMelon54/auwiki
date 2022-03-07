+++
title = "Shapeshift"
weight = 46
[extra]
tag = 46
+++

This RPC is used when a Shapeshifter turns into another player or turns back into itself.

<!-- more -->

It is also sent by the shapeshifter at the end of a meeting, allowing the shapeshifter to start the next round as itself.

```
Rpc[46] := target:netObject shouldAnimate:bool;
```

The `target` parameter indicates the {{ link(to="PlayerControl") }} the shapeshifter will turn into. The `shouldAnimate` parameter indicates whether the transition should be animated: this is false when the player is in a vent or when the player is still shapeshifted at the end of a meeting, which allows the shapeshifter to start the next round without being revealed. The following table explains when the transition is animated:

| Case                                                         | Animated?                 |
| ------------------------------------------------------------ | ------------------------- |
| When shapeshifting to another player                         | Yes                       |
| When shapeshifting back, either by clicking or automatically | Only if not in vents      |
| After a meeting while shapeshifted                           | No (and also no cooldown) |

## Version History

| Version   | Change     |
| --------- | ---------- |
| 2021.11.9 | Introduced |
