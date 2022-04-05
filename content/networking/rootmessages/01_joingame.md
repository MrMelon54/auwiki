+++
title = "JoinGame"
weight = 1
[extra]
tag = 1
stub = true
+++

This message is sent by a client when joining a game and received when the server confirms this.

<!-- more -->

```
MessageC2S[1] := game_id:i32 crossplay_restrictions:bool;
MessageS2C[1] := game_id:i32 client_id:i32 player_name:str platform_data:PlatformSpecificData level:pu32 product_user_id:str friend_code:str;
```

# Client to Server

When a player joins a game, either by code or from the lobby list, a JoinGame packet is sent to the server listing the game code they want to join and whether they have any crossplay restrictions.

On some platforms (Windows 10 store and likely consoles) the platform data of other players in that room is queried using {{ link(to="QueryPlatformIds") }}.

# Server to Client

When an JoinGame message is received from a client, the server needs to check a few things:

- Does the requested game exist?
- Is there space for another player?
- Is the game in the lobby? (Games that have started cannot be joined)
- Is the player not {{ link(to="KickPlayer", label="banned") }} from the game?

If the answer to all of these questions is yes, the player can join the game. Note that some servers may check more conditions: for example whether players in the game have the same mods as the connecting player. Otherwise the player should be disconnected to cancel the join attempt.

Servers reply with a JoinGame message to the joining player and send a {{ link(to="JoinedGame") }} message to all other players.

<!-- TODO -->

Prior to 2021.11.9 it was possible to send JoinErrors to connecting clients. This functionality is no longer present, use normal Disconnects to replace this feature.

# Version History

| Version   | Change                                                                      |
|-----------|-----------------------------------------------------------------------------|
| ???       | Added.                                                                      |
| 2021.11.9 | Added crossplay restrictions and PlatformSpecificData. Removed Join Errors. |
| 2022.3.29 | Added Product User Id and Friend Code.                                      |
