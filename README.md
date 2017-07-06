[Cortana](https://www.microsoft.com/en-us/windows/cortana) is assistant from microsoft just like Siri from Apple. We can make a skill for Cortana i.e Creating your own bot with in cortana so that you can use your bot through cortana by activating it using invocation name. To create SUSI cortana skill we will use [SUSI API](http://api.susi.ai) and Microsoft bot framework. First of all we will have to make a bot on microsoft bot framework and to do so follow this [tutorial](http://blog.fossasia.org/susi-ai-bots-with-microsofts-bot-framework/). Change code in this tutorial with code in app.js

After making bot we have to configure this bot for Cortana and to do so select cortana from list of channel on your bot from [https://dev.botframework.com](https://dev.botframework.com) and add following detail shown in figure below.

<img src="/docs/images/cortana_detail.png" width="370">

Invocation name is name which you will call to use your bot. There are many ways to in invoke your skill like Run &lt;invocation name&gt; , Launch &lt;invocation name&gt;. Here is the complete [list](https://docs.microsoft.com/en-us/cortana/design-guides/guide-invocation) of invocation commands. How SUSI skill in cortana actually works is when user invoke SUSI skill cortana acts as middleware to send and receive responses from skill to user. After configuring your bot for Cortana test it with cortana with same hotmail account which you have used for bot framework by calling invocation name. Here is the demo video for testing SUSI Skill [https://youtu.be/40yX16hxcls](https://youtu.be/40yX16hxcls).

You have complete creating a skill for cortana now if you want to publish it to world select manage cortana dashboard from your bots in [https://dev.botframework.com](https://dev.botframework.com) and publish it to first by filling form.

 <img src="/docs/images/manage_cortana.png" width="370">