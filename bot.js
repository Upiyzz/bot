client.login("NTQ0NTIwOTc0NzIxMzUxNjgx.D0MoBw._EMilotZy3JX5C17LFNczyGJbrc");
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


