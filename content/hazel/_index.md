+++
title = "Hazel"
+++

Hazel is the networking library used by Among Us. It is written in C# and open source [on GitHub](https://github.com/willardf/Hazel-Networking). If you're working on the lowest layer of the networking protocol, it may be a good starting point to look at this source code and possibly use it to develop your own implementation on top.

Hazel uses UDP to transmit its packets. If you're unfamiliar with UDP, it's useful to know that packets are not guaranteed to arrive (Hazel has a mechanism to retry packets), there is no connection mechanism (which is why Hazel also has its own mechanism for that) and packets do not have to arrive in order.

The content of a Hazel message can vary, but there are a few mechanisms which are generally applicable, like the various data types that are available or the root message system.
