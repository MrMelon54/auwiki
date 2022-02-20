+++
title = "SendQuickChat"
weight = 33
[extra]
tag = 33
stub = true
+++

This RPC is sent when a player sends a message using the _Quick Chat_ system to the chat box, for players who have free chat disabled.

<!-- more -->

```
Rpc[33] := contentType:u8 messageData:QuickChatMessageData(contentType);

QuickChatMessageData[0] := numElements:pi32 QuickChatSentenceMessageData[numElements];

QuickChatSentenceMessageData[598] := playerId:u8;
QuickChatSentenceMessageData[X] := formatString: str;

QuickChatMessageData[1] := formatString:u16;
QuickChatMessageData[2] := playerId:u8;
```

**Note:** This does _not_ get called when using QuickChat, see [SendQuickChat](@/networking/rpc/33_sendquickchat.md.md)

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Sent by:   | A player when sending a chat message               |
| Called on: | PlayerControl of the player sending the message    |
