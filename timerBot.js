const { Client, Intents } = require('discord.js');
const FS = require("fs");
require("dotenv").config();
const client = new Client({intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });     
const prefix = "tb.";   

 client.on("ready", () => {
 console.log(`Logged is as ${client.user.tag}!`);
});

client.on("message", (msg) => {
if(msg.content.startsWith(prefix + "help")){
msg.reply("Just do tb. and whatever time in format 180m (example (tb.180m)) (In minutes so you can do some math)");
}
else if (msg.content.startsWith(prefix)) {
    const themsg = msg.content;
    let minAmount = "";
    for (let i = 3; i < length(themsg); i ++){
        
    }
}
});

client.login(process.env.TOKEN);