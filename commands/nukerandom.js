const axios = require('axios')
const Discord = require('discord.js')
const disbut = require('discord-buttons');

module.exports = {
    name: 'nukerandom',
    description: "Sends a cute cat image",
    async execute(message, args, client) {
      disbut(client)
      axios
        .get('https://myapiinventory.000webhostapp.com/apiinventory/botAPI/get_random.php')
        .then((res) => {
          const link = res.data[0].nuke_id;
          const title = res.data[0].title;
          const page = res.data[0].page;
          const genre = res.data[0].genre;

          let embed = new Discord.MessageEmbed()
            .setTitle(`${title}`)
            .setColor("BLACK")
            .setDescription(`Doujin ID: **${link}**\nGenre : ${genre} \nPage : ${page} \nRead Online : https://cin.cin.pw/v/${link} `);

          let button = new disbut.MessageButton()
            .setStyle('url')
            .setURL(`https://cin.cin.pw/v/${link}`) 
            .setLabel('Read Online')
          
          message.channel.send('Generate Manga or Doujinshi...', {
          component: button,
          embed: embed })
          
        })
        .catch((err) => {
          console.error('ERR:', err)
        })
    }
}