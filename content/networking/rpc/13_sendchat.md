+++
title = "SendChat"
weight = 13
[extra]
tag = 13
stub = true
+++
TODO
<!-- more -->

This RPC is sent when a player sends a message to the chat box.

<!-- more -->

```
Rpc[13] := chatMessage:str;
```

**Note:** This does _not_ get called when using QuickChat, see [SendQuickChat](@/networking/rpc/33_sendquickchat.md)

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Sent by:   | A player when sending a chat message               |
| Called on: | PlayerControl of the player sending the message    |

## Version History

| Version   | Change                                             |
| --------- | -------------------------------------------------- |
| < 2021.x  | Introduced, sent by impostor when killing a player |
| 2021.11.9 | Now sent by host                                   |
