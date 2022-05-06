+++
title = "regionInfo.json"
+++

This file lists all the server regions that can be connected to.

<!-- more -->

Among Us has 3 different RegionInfo types that can be used. Here they are, in order of introduction:

1. StaticRegionInfo, which specifies a bunch of IP addresses.
2. DnsRegionInfo, which retrieves a list of IP addresses using DNS instead.
3. StaticHttpRegionInfo, which specifies a bunch of hostnames that will be connected to over HTTPS, making use of HTTP matchmaking.

# Full file

As of writing (Among Us 2022.4.19), the current default regionInfo.json looks like this (whitespace added to make it readable):

{% fold(summary="The default regionInfo.json file") %}

```json
{
  "CurrentRegionIdx": 1,
  "Regions": [
    {
      "$type": "StaticHttpRegionInfo, Assembly-CSharp",
      "Name": "North America",
      "PingServer": "matchmaker.among.us",
      "Servers": [
        {
          "Name": "Http-1",
          "Ip": "https://matchmaker.among.us",
          "Port": 443,
          "UseDtls": true,
          "Players": 0,
          "ConnectionFailures": 0
        }
      ],
      "TranslateName": 289
    },
    {
      "$type": "StaticHttpRegionInfo, Assembly-CSharp",
      "Name": "Europe",
      "PingServer": "matchmaker-eu.among.us",
      "Servers": [
        {
          "Name": "Http-1",
          "Ip": "https://matchmaker-eu.among.us",
          "Port": 443,
          "UseDtls": true,
          "Players": 0,
          "ConnectionFailures": 0
        }
      ],
      "TranslateName": 290
    },
    {
      "$type": "StaticHttpRegionInfo, Assembly-CSharp",
      "Name": "Asia",
      "PingServer": "matchmaker-as.among.us",
      "Servers": [
        {
          "Name": "Http-1",
          "Ip": "https://matchmaker-as.among.us",
          "Port": 443,
          "UseDtls": true,
          "Players": 0,
          "ConnectionFailures": 0
        }
      ],
      "TranslateName": 291
    }
  ]
}
```

{% end %}

This is a JSON object containing two keys:

- `CurrentRegionIdx` indicates the index of the region that is currently selected, where 0 refers to the first region.
- `Regions` is an array containing the regions. Each region is of one of the following 3 types:

# StaticRegionInfo

This is the first format and allows specifying a list of servers by IP address.

```json
{
  "$type": "StaticRegionInfo, Assembly-CSharp",
  "Name": "Localhost",
  "PingServer": "127.0.0.1",
  "Servers": [
    {
      "Name": "NetworkManager",
      "Ip": "127.0.0.1",
      "Port": 22023,
      "Players": 0,
      "ConnectionFailures": 0,
      "UseDtls": false
    }
  ],
  "TranslateName": 1003
}
```

# DnsRegionInfo

This format improves on StaticRegionInfo by allowing resolving an IP address using the Domain Name System. If a hostname can not be resolved the DefaultIp is used.

Current the DNS address will only be resolved when the region is loaded for the first time, however if DNS query returned multiple results it

```json
{
  "$type": "DnsRegionInfo, Assembly-CSharp",
  "Fqdn": "localhost",
  "DefaultIp": "127.0.0.1",
  "Port": 22023,
  "Name": "localhost",
  "TranslateName": 1003
}
```

# StaticHttpRegionInfo

This format switches back to the StaticRegionInfo format, but still allows resolving the domain name via DNS. When a region of this type is used, {{ link(to="HTTP Matchmaking") }} will be used to connect to a game.

Note that the Port now corresponds to the HTTP(S) port and not the server port.

Since 2022.3.29 this format is mandatory to support joining lobbies via the lobby menu.

```json
{
  "$type": "StaticHttpRegionInfo, Assembly-CSharp",
  "Name": "Asia",
  "PingServer": "matchmaker-as.among.us",
  "Servers": [
    {
      "Name": "Http-1",
      "Ip": "https://matchmaker-as.among.us",
      "Port": 443,
      "UseDtls": true,
      "Players": 0,
      "ConnectionFailures": 0
    }
  ],
  "TranslateName": 291
}
```

# Version History

| Version   | Change                                                            |
| --------- | ----------------------------------------------------------------- |
| 2021.3.5  | Introduced, replacing a binary format                             |
| 2021.3.31 | Remove obfuscation of the key names                               |
| 2022.2.8  | Added StaticHttpRegionInfo for HTTP Matchmaking                   |
| 2022.x.x  | Changed "Port" in StaticHttpRegionInfo to mean HTTPS service port |
| 2022.3.29 | Disabled joining lobbies via the server menu on non-HTTP servers. |
