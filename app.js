const { Client, Intents } = require("discord.js")

require('dotenv').config();

const prefix = "!";

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});



client.once('ready', (bot) => {
    console.log("****************************************************************************");
    console.log(`Bot: ${bot.user.username}\nStatus ${bot.presence.status}`);
    console.log("****************************************************************************\n\n");
    console.log("********************   CONSOLE LOGS   **************************************");


});



client.on("messageCreate", (msg) => {

    if (msg.author.bot) return;

    if (msg.content.startsWith(prefix)) {

        const argumentos = msg.content.slice(prefix.length).split(/ +/);

        const comando = argumentos.shift().toLowerCase();


        //comandos bot

        if (comando == "help") return msg.reply("Hello \n this bot is currently under development.\n Official launch: February 10, 2022 \n We are also building a special website.");
        if (comando == "site") return msg.reply("in development");

        console.log(argumentos);
        console.log(comando);
    }



});



client.login(process.env.DSTOKEN);

