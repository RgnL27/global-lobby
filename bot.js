const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDY5MDk5OTMxNzUyNDY0NDA1.DjCy_Q.sf8-Q2S8WQ26JI-kaL3nqkO_YPM);//where BOT_TOKEN is the token of our bot
