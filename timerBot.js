const { Client, Intents } = require('discord.js');
const FS = require("fs");
const { allowedNodeEnvironmentFlags } = require('process');
require("dotenv").config();
const client = new Client({intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });     
const prefix = "tb.";   

 client.on("ready", () => {
 console.log(`Logged is as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
if(msg.content.startsWith(prefix + "help")){
msg.reply("Just do tb. and whatever time in format 180 (example (tb.180)) (In minutes so you can do some math) Max 1 day");
}
else if (msg.content.startsWith(prefix)) {
    const themsg = msg.content;
    let minAmount = "";
    for (let i = 3; i < themsg.length; i++){
        if(themsg[i] != '0' && themsg[i] != '1' && themsg[i] != '2' && themsg[i] != '3' && themsg[i] != '4' && themsg[i] != '5' && themsg[i] != '6' && themsg[i] != '7' && themsg[i] != '8' && themsg[i] != '9') {
            msg.reply("integers only")
            break;
        } else {
        let placerVar = themsg[i]
        let result = minAmount.concat(placerVar)
          minAmount = result
        }
    }
    let converted = parseInt(minAmount)
    converted *= 60000
    var sendmsg = function(){
        msg.reply('bozo ur timer is up lmao');
        };
    setTimeout(sendmsg,converted);
}
});

client.login(process.env.TOKEN);
