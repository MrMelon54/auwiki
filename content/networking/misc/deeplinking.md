+++
title = "Deeplinking"
[extra]
stub = "true"
+++

Deeplinking is used to, among other things, add regions to the region menu.

<!-- more -->

This method is useful on mobile, because editing {{ link(to="regionInfo--json", label="regionInfo.json") }} is harder or impossible to do.

# Version History

| Version   | Change                                        |
| --------- | --------------------------------------------- |
| 2021.x.x  | Introduced, adding StaticRegionInfo entries   |
| 2021.11.9 | Broke deeplink support by enabling DTLS       |
| 2022.3.29 | Added usedtls parameter, defaulting to false. |
