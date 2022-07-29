require("dotenv").config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = []

const functionFolders = fs.readdirSync("./src/functions"); // getting all the folders
// Getting all the files ending with .js
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));  
    // And passing in client to that file so we can use for example client.on 
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents()
client.handleCommands()
client.login(token)