const Discord = require('discord.js');
const axios = require('axios').default;
const nodeHtmlToImage = require('node-html-to-image');
const { guildID, botID } = require('./identifiers.json');

module.exports = async (client, interaction) => {
    // Commandes
    if (interaction.isCommand()) {
        if (interaction.commandName === 'test') {
            axios.get('https://www.googleapis.com/calendar/v3/calendars/groupe5.istic@gmail.com/events?key=AIzaSyCjg1gMaX7UMx2ppcTmHCWxRFTv5Y4LAPM')
            .then((response) => {
                a = response.data.items.length - 1;
                interaction.reply({ content: `**Prochain cours:** ${response.data.items[a].summary}\n**Date et heure:** ${response.data.items[a].start.dateTime}\n**Salle:** ${response.data.items[a].location}\n`});
            });
            /*nodeHtmlToImage({
                output: './image.png',
                html: '<html><body>Hello world!</body></html>'
              })
            .then(() => console.log('The image was created successfully!'))*/
        }
    }
}