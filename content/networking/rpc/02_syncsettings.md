+++
title = "SyncSettings"
weight = 2
[extra]
tag = 2
+++

This RPC synchronizes the game settings between the host and players.

<!-- more -->

```
Rpc[2] := size:x Span<GameOptionsData>(size);
GameOptionsData := version:u8 GameOptionsDataVersion(version);
GameOptionsDataVersion(1) := max_players:u8 keywords:u32 map_id:u8 player_speed_mod:f32 crew_light_mod:f32 impostor_light_mod:f32 kill_cooldown:f32 num_common_tasks:u8 num_long_tasks:u8 num_short_tasks:u8 num_emergency_meetings:i32 num_impostors:u8 kill_distance:u8 discussion_time:i32 voting_time:i32 is_defaults:bool;
GameOptionsDataVersion(2) := GameOptionsDataVersion(1) emergency_cooldown:u8;
GameOptionsDataVersion(3) := GameOptionsDataVersion(2) comfirm_impostor:bool visual_tasks:bool;
GameOptionsDataVersion(4) := GameOptionsDataVersion(3) anonymous_votes:bool task_bar_mode:u8;
GameOptionsDataVersion(5) := GameOptionsDataVersion(4) roles:RoleOptionsData;
GameOptionsDataVersion(6) := GameOptionsDataVersion(5);

RoleOptionsData := num:i32 roles:RoleOptions[num] shapeshifter_leave_skin:bool shapeshifter_cooldown:u8 shapeshifter_duration:u8 scientist_cooldown:u8 guardian_angel_cooldown:u8 engineer_cooldown:u8 engineer_in_vent_max_time:u8 scientist_battery_charge:u8 protection_duration_seconds:u8 impostors_can_see_protect:u8;
RoleOptions := key:i16 max_count:u8 chance:u8;
```

|            |                                            |
|------------|--------------------------------------------|
| Sent by:   | Host of the game                           |
| Called on: | {{ link(to="PlayerControl") }} of the host |

This RPC is called when:
- Settings are modified in the menu
- A player has spawned (after modifications for the new player count have been made)
- When default settings are enabled and a player leaves.

When new options are added to the game, the version of this packet is increased and additional options are added to the end of the packet. The settings are also saved to disk and upgraded when a new version of Among Us is released.

# Game Options

| Option                         | Since version | Description                                                                                                                              |
|--------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Max Players                    | 1             | Maximum amount of players.                                                                                                               |
| Keywords                       | 1             | Language of the game's chat. Used for public lobby matchmaking.                                                                          |
| MapId                          | 1             | Map identifier. See [Map Id](#map-id) for a list of possible values.                                                                     |
| Player Speed Mod               | 1             | Modifier for the player speed.                                                                                                           |
| (Crew,Impostor) Light Mod      | 1             | Modifier for the crewmate/impostor vision.                                                                                               |
| Kill Cooldown                  | 1             | Cooldown of the kill ability in seconds.                                                                                                 |
| Num (Common, Long, Short)Tasks | 1             | Amount of Common, Long, Short tasks.                                                                                                     |
| Num Emergency Meetings         | 1             | Maximum amount of emergency meetings a player is allowed to call.                                                                        |
| Num Impostors                  | 1             | Maximum amount of impostors. See [NumImpostor Limits](#num-impostors-limits)                                                             |
| Kill Distance                  | 1             | Maximum distance between players before the kill ability can be used. The options Short, Normal and Long correspond to 1.0, 1.8 and 2.5. |
| Discussion Time                | 1             | Amount of seconds at the start of the meeting where voting is disabled                                                                   |
| Voting Time                    | 1             | Amount of seconds that can be used to vote after discussion time has ended.                                                              |
| Is Defaults                    | 1             | Automatically adjust impostor count and kill cooldown to the amount of players. Disabled when a setting other than the Map is changed.   |
| Emergency Cooldown             | 2             | Amount of seconds between the start of a round and when it becomes possible to press the emergency button                                |
| Confirm Impostor               | 3             | Whether to confirm if a player was an impostor after they were ejected after a meeting.                                                  |
| Visual Tasks                   | 3             | Whether Visual Tasks should be enabled. See {{ link(to="PlayAnimation") }} and {{ link(to="SetScanner") }}.                              |
| Anonymous Votes                | 4             | If enabled, the meeting hud will not show who has voted for whom.                                                                        |
| Task Bar Mode                  | 4             | When the task bar progress should be updated. 0: Immediately, 1: At meetings, 2: Never                                                   |
| RoleOptions                    | 5             | Options to configure roles. See [RoleOptions](#role-options)                                                                             |

## Keywords

This value configures the language used in a game. This is a set of flags: it is possible to OR multiple languages together to specify multiple languages, however this is not currently used.

| Language   | Native name             | Value    |
|------------|-------------------------|----------|
| All        | N/A                     | 0x00     |
| Other      | N/A                     | 0x01     |
| SpanishLA  | Español (Latinoamérica) | 0x02     |
| Korean     | 한국어                  | 0x04     |
| Russian    | Русский                 | 0x08     |
| Portuguese | Português               | 0x10     |
| Arabic*     | Al Arabiya              | 0x20     |
| Filipino   | Bisaya                  | 0x40     |
| Polish*     | Polskie                 | 0x80     |
| English    | English                 | 0x0100   |
| Japanese   | 日本語                  | 0x0200   |
| SpanishEU  | Español                 | 0x0400   |
| Brazilian  | Português (Brasil)      | 0x0800   |
| Dutch      | Nederlands              | 0x1000   |
| French     | Français                | 0x2000   |
| German     | Deutsch                 | 0x4000   |
| Italian    | Italiano                | 0x8000   |
| SChinese   | 简体中文                | 0x010000 |
| TChinese   | 繁體中文                | 0x020000 |
| Irish      | Gaeilge                 | 0x040000 |

Among Us has both an interface language and an chat language. The chat language is used for matchmaking while the interface language also displays the interface text in that language. Languages marked with an asterisk (*) can only be used as chat languages, not as interface language.

## Map ID

| Map       | Id |
|-----------|----|
| The Skeld | 0  |
| MIRA HQ   | 1  |
| Polus     | 2  |
| ehT dlekS | 3  |
| Airship   | 4  |

"eht dlekS" is a flipped version of the Skeld and is only active on April 1.

<!-- TODO doublecheck state of dleks after 3.29 -->

## Num Impostors Limits

Note that the game limits the amount of imposters that spawn by the amount of players: 

- If there are 3 players or less, there are 0 impostors and the game is not allowed to start. 
- If there are 6 players or less, the amount of impostors is limited to 1.
- If there are 7 or 8 players, the amount of impostors is limited to 2.
- If there are 9 players or more, the amount of impostors is limited to 3.

Note that with server-side mods it is possible to circumvent these limits. However, it may lead to undesired consequences: if there are at any point as much impostors as players or more, the host will end the game immediately.
    
# Role Options

Starting from version 2021.11.9 this struct defines the occurrence and settings of the 4 roles, Shapeshifter, Engineer, Scientist and Guardian Angel.

| Option                      | Description                                                           |
|-----------------------------|-----------------------------------------------------------------------|
| Num Roles                   | Amount of roles for which role rates are set.                         |
| Role Rates                  | See [Role Rates](#role-rates).                                        |
| Shapeshifter Leave Skin     | Whether the Shapeshifter leaves evidence when shapeshifting.          |
| Shapeshifter Cooldown       | Cooldown in seconds of Shapeshifting ability.                         |
| Shapeshifter Duration       | Maximum duration in seconds of the shapeshifter's disguise.           |
| Scientist Cooldown          | Recharge time when all tasks have been completed.                     |
| Guardian Angel Cooldown     | Cooldown in seconds of protection ability.                            |
| Engineer Cooldown           | Cooldown in seconds of venting ability.                               |
| Engineer In Vent Max Time   | Maximum time an Engineer can stay in vents without leaving.           |
| Scientist Battery Charge    | Amount of seconds a Scientist can watch vitals on one battery charge. |
| Protection Duration Seconds | Amount of seconds a protection from a Guardian Angel lasts.           |
| Impostors Can See Protect   | Whether Impostors can see if someone is protected.                    |

## Role Rates

This object decides how much of a role can spawn and what the chance is of that role to spawn.

<!-- TODO: When are RoleRates omitted in practice?  -->

| Option    | Description                                                           |
|-----------|-----------------------------------------------------------------------|
| Key       | ID of a role. See {{ link(to="SetRole") }} for what each value means. |
| Max Count | The maximum amount of players that can spawn with this role.          |
| Chance    | Percentage indicating how likely this role is to spawn.               |

If Role Rates are not specified for a role, the maximum count is 0 and the chance to spawn is 0.

# Version History

| Version   | Change                                           |
|-----------|--------------------------------------------------|
| ???       | Introduced                                       |
| 2021.11.9 | Added version 5 which adds the Role Options.     |
| 2022.3.29 | Added version 6 which is identical to version 5. |
