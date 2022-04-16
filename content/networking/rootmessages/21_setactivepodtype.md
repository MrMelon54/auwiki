+++
title = "SetActivePodType"
weight = 21
[extra]
tag = 21
+++

This message sets the currently active cosmicube.

<!-- more -->

This message is sent to the server when a new cosmicube is enabled or when joining a game.
It only contains the new Pod Type that was set:

```
Root[21] := podType:str;
```

The strings that are passed here represent the names of cosmicubes, like "mira".

# Version History

| Version   | Change     |
|-----------|------------|
| 2021.11.9 | Introduced |
