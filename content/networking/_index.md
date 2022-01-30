+++
title = "Networking"
+++

This section of the Among Us Technical Wiki explains the networking protocol of Among Us.

[Hazel](./hazel/) is the networking library used by Among Us.

The networking packets of Among Us can have up to three layers:

- The top layer, [Root Messages](./rootmessages) contains messages that are relevant for the matchmaker, including joining/leaving games, searching for them or sending a packet to players in a specific game.
- The root messages [GameData](./gamedata)(To) contains messages that are relevant to a game: (de)spawn or update NetObjects, changing game settings, or send RPC's
- NetObjects are classes that represent items in a game: this includes Players, the current map (ShipStatus) and the current meeting.
- [RPC's](./rpc) are commands that players can send to perform an action on a NetObject, like setting a player name, casting a vote in a meeting or entering a vent.
