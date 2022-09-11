const Discord = require('discord.js');
const axios = require('axios').default;
const { guildID, botID } = require('./identifiers.json');
const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

const APIkey = 'AIzaSyCjg1gMaX7UMx2ppcTmHCWxRFTv5Y4LAPM';

date = new Date()
yyyy = date.getFullYear();
mm = date.getMonth()+1;
dd = date.getDate();
hh = date.getHours();
min = date.getMinutes();

module.exports = async (client, interaction) => {
    // Commandes
    if (interaction.isCommand()) {
        if (interaction.commandName === 'test') {
            axios.get(`https://www.googleapis.com/calendar/v3/calendars/groupe5.istic@gmail.com/events?key=${APIkey}&singleEvents=True&orderBy=startTime&timeMin=${yyyy}-${mm}-${dd}T${hh}:${min}:00-04:00`)
            .then((response) => {
                firstItem = response.data.items[0];
                var subjectDate = new Date(firstItem.start.dateTime);
                interaction.reply({ content: `**Prochain cours:** ${firstItem.summary}\n**Date et heure:** ${days[subjectDate.getDay()]} ${subjectDate.getDate()} ${months[subjectDate.getMonth()]} - ${subjectDate.getHours()}h${subjectDate.getMinutes()}\n**Salle:** ${firstItem.location}`});
            });
        }
    }
}