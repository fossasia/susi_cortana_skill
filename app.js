var restify = require('restify');
var builder = require('botbuilder');
var request = require('request');
var http = require('http');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function() {
    console.log('listening to ', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.appId,
    appPassword: process.env.appPassword
});

setInterval(function() {
		http.get(process.env.HerokuURL);
	}, 1200000);

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//getting response from SUSI API upon receiving messages from User
bot.dialog('/', function(session) {
    var msg = session.message.text;
    var options = {
        method: 'GET',
        url: 'http://api.asksusi.com/susi/chat.json',
        qs: {
            timezoneOffset: '-330',
            q: session.message.text
        }
    };
//sending request to SUSI API for response
    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        var ans = (JSON.parse(body)).answers[0].actions[0].expression;
        //responding back to user
        session.say(ans,ans);

    })
});
