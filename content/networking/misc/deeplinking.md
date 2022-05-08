+++
title = "Deeplinking"
+++

Deeplinking is used to, among other things, add regions to the region menu.

<!-- more -->

This method is useful on mobile, because editing {{ link(to="regionInfo--json") }} is harder or impossible to do.

The methods that are available for deeplinking are different on PC compared to phones: on PC, deeplinks are used for signing into Itch.io and Twitch, while on phones deeplinking allows adding new regions. Because signing into other services is less relevant for modding, this page focuses on the implementation of deeplinks and adding custom servers on your phone.

# Technical Implementation

Deeplinking support in Among Us is managed by a library called [UniversalDeepLinking]. This library registers the `amongus://` protocol.

On PC, all requests are sent to AmongUsHelper.exe, while on mobile requests are handled directly by the main application.

# Adding a region (Phones)

Here is an example URL that will add a server on localhost to your Among Us:

`amongus://init?serverip=127.0.0.1&serverport=22023&servername=localhost&usedtls=false`

`serverip` and `serverport` can be configured as desired, it is not possible however to resolve a DNS name, so you can only enter an IP. `servername` can be configured as desired. `usedtls` must be disabled as DTLS is not supported for custom servers.

Note that this currently only adds {{ link(to="regionInfo--json", label="StaticRegionInfo", anchor="staticregioninfo") }} regions, and it is not configurable to use a different region type.

# Version History

| Version         | Change                                       |
|-----------------|----------------------------------------------|
| Around 2021.5.4 | Introduced, adding StaticRegionInfo entries  |
| 2021.11.9       | Broke deeplink support by enabling DTLS      |
| 2022.3.29       | Added usedtls parameter, defaulting to true. |
