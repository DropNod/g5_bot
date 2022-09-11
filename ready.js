const {SlashCommandBuilder} = require("@discordjs/builders");
const test = new SlashCommandBuilder()
    .setName('test')
    .setDescription('test');

module.exports = (client) => {
    console.log('Launched !');
    client.user.setStatus('available');
    client.user.setActivity('v1.00');
    client.application.commands.create(test);
}