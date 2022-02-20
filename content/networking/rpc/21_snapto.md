+++
title = "SnapTo"
weight = 21
[extra]
tag = 21
+++

This RPC is used to teleport players to a location.

<!-- more -->

```
Rpc[21] := xLerped:u16 yLerped:u16 sid:u16;
```

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Sent by:   | An venting player or a player spawning on Airship |
| Called on: | {{ link(to="CustomNetworkTransform") }} of the teleporting player  |

When a player receives this message and the sequence id (sid) is recent enough, the player is teleported to the specified location.

# Usage

There are two scenarios where SnapTo is used: while venting or when spawning in Airship.

If a player moves to another vent, SnapTo is used with the position of the new vent. See {{ link(to="EnterVent") }} and {{ link(to="ExitVent") }} for more details about the ventilation system.

The second scenario involves the Airship map: this map has a minigame to pick a spawn location at the start of the game and after every meeting. First every player is teleported to -25,40, which is not visible from the rest of the map. Every player then gets three random spawn suggestions out of a pool of 6 items. After picking an location SnapTo is called by the client to the chosen location. The following table lists the 6 possible spawn location and their coordinates.

| Location  | X    | Y     |
| --------- | ---- | ----- |
| Brig      | -0.7 | 8.5   |
| Engine    | -0.7 | -1.0  |
| Main Hall | 15.5 | 0     |
| Kitchen   | -7.0 | -11.5 |
| Records   | 20.0 | 10.5  |
| Cargo Bay | 33.5 | -1.5  |

# Lerping

The coordinates sent by this RPC are compressed using linear interpolation between -50 and 50. This has a few advantages:

1. This saves a few bytes: instead of sending a 4-byte float, 2 bytes are sent. As movement packets are the most common packet, this is a worthwhile optimization.
1. Floating point numbers do not have an equal precision across their range. Floating points use an exponent to quickly change to a different scale and can only represent a limited amount of values per exponent. Basically, if you have a very lange number you can't store as much data below the decimal point as you can with a number like 0 or 1. For Among Us this is less of a concern, since its maps are very small, but in larger games this may become problematic.

To convert between a lerped coordinate and an unlerped coordinate, use the following code:

```cs
/// Convert a floating point x to a value in the range between min and max
/// In Among Us, min = -50 and max = 50
public ushort Lerp(float min, float max, float x)
{
    // Clamp your value of x to inside your range
    if (x <= min) {
        return 0;
    }
    if (x >= max) {
        return 65535;
    }
    // Calculate the total range of your linear interpolation
    float range = max - min;
    // Subtract the minimum from x turns x into a value between 0 and range.
    // Divide by your source range turns x into a value between 0 and 1
    // Finally multiply by your target range (in this case, all 16 bit unsigned integers, so between 0 and 65535)
    float f = (x - min) / range * 65535f;
    return (ushort) f;
}

/// Convert an unsigned 16-bit integer x to a value between min and max
public float Unlerp(float min, float max, ushort x)
{
    // Calculate the total range of your linear interpolation
    float range = max - min;
    // First cast x to an floating point otherwise all following calculations aren't precise.
    // Dividing by 65535 turns x into a value between 0 and 1
    // Multiplying by range turns x into a value between 0 and range
    // Then add min to turn x into a value between min and max
    return ((float) x) / 65535f * range + min;
}
```

# Sequence ID

All movement updates in Among Us have a sequence id: this allows packets to get reordered without consequences. Movement packets with a lower sequence ID are ignored. To make sure that the SnapTo RPC is processed, the sequence ID counter is incremented by 5 when SnapTo is sent.

## Version History

| Version   | Change                                                          |
| --------- | --------------------------------------------------------------- |
| 2021.3.5  | Lerping range changed from (-40, 40) to (-50, 50)               |
| 2021.3.31 | SnapTo is now used for Airship's spawning game                  |
| 2021.11.9 | SnapTo is now used when the Engineer moves to a different vent. |
