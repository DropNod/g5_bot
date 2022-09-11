const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]})

client.on('ready', () => require('./events/ready.js')(client));
client.on("interactionCreate", interaction => require('./events/interaction.js')(client, interaction));
client.login(process.env.TOKEN);