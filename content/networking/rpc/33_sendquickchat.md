+++
title = "SendQuickChat"
weight = 33
[extra]
tag = 33
stub = true
+++

This RPC is sent when a player sends a message using the _Quick Chat_ system to the chat box.

<!-- more -->

```
Rpc[33] := contentType:u8 messageData:QuickChatMessageData(contentType);

QuickChatMessageData[0] := numElements:pi32 QuickChatSentenceMessageData[numElements];

QuickChatSentenceMessageData[598] := playerId:u8;
QuickChatSentenceMessageData[_] := formatString: str;

QuickChatMessageData[1] := formatString:u16;
QuickChatMessageData[2] := playerId:u8;
```

> _598_ is `StringName.ANY` which represents a player's name in the quick chat protocol.

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Sent by:   | A player when sending a chat message               |
| Called on: | {{ link(to="PlayerControl") }} of the player sending the message    |
