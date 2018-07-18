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

client.login(process.env.NDY5MDk5OTMxNzUyNDY0NDA1.DjC9LQ.VpRaXShdPY_t7ejFpKIA4K9glZU);//where BOT_TOKEN is the token of our bot
