const Discord = require('discord.js');
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'hanal',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      let hanal = await anime.hanal();
      const embed =  new Discord.MessageEmbed()
        .setTitle('hentai hanal picture')
        .setColor("RANDOM")
        .setImage(hanal)
      message.channel.send(embed)
        

    }}