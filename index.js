const Discord = require(’discord.js’);
const token = "NTQ0NTIwOTc0NzIxMzUxNjgx.D0MZXg.gRHOKd4mtHB4tyJMCWzWVWbREGk";

const client = new Discord.Client();


client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);




