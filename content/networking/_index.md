+++
title = "Networking"
sort_by = 'weight'
+++

This section of the Among Us Technical Wiki explains the networking protocol of Among Us.

{{ link(to="Hazel") }} is the networking library used by Among Us.

The networking packets of Among Us can have up to three layers:

- The top layer, {{ link(to="Root Messages") }} contains messages that are relevant for the matchmaker, including joining/leaving games, searching for them or sending a packet to players in a specific game.
- The root messages {{ link(to="GameData(To)") }} contain messages that are relevant to a game: (de)spawn or update NetObjects, changing game settings, or send RPC's. These are further explained in the {{ link(to="Game Data") }} section.
- NetObjects are classes that represent items in a game: this includes Players, the current map (ShipStatus) and the current meeting.
- {{ link(to="RPCs") }} are commands that players can send to perform an action on a NetObject, like setting a player name, casting a vote in a meeting or entering a vent.
