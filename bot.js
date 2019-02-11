const { Discord, Client, RichEmbed, Attachment } = require("discord.js");
const client = new Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('YouTube', { type: "WATCHING" })

});

client.on("message", async message => {
    
    let prefix = "YOUR BOT PREFIX";

const args = message.content.slice(prefix.length).trim().split(/\s+/g);

const command = args.shift().toLowerCase();
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

if(command === 'ping') {

message.channel.send(`Hoold on!`).then(m => {

    m.edit(`🏓  ::  **Pong!** (Roundtrip took: **` + (m.createdTimestamp - message.createdTimestamp) + `ms.** Heartbeat: **` + Math.round(client.ping) + `ms.**)`);

    });

 }

});

client.login("NTQ0NTIwOTc0NzIxMzUxNjgx.D0MoBw._EMilotZy3JX5C17LFNczyGJbrc")
