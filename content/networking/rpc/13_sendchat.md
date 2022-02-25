+++
title = "SendChat"
weight = 13
[extra]
tag = 13
+++

This RPC is sent when a player sends a message to the chat box.

<!-- more -->

```
Rpc[13] := chatMessage:str;
```

**Note:** This does _not_ get called when using QuickChat, see [SendQuickChat](@/networking/rpc/33_sendquickchat.md)

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Sent by:   | A player when sending a chat message               |
| Called on: | {{ link(to="PlayerControl") }} of the player sending the message    |
