const Discord = require('discord.js');
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'hentaiswimsuit',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      let swimsuit = await anime.swimsuit();
      const embed =  new Discord.MessageEmbed()
        .setTitle('hentai swimsuit picture')
        .setColor("RANDOM")
        .setImage(swimsuit)
      message.channel.send(embed)
        

    }}