const Discord = require('discord.js');
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'hentaiswimsuit',
    description: "Sets up a reaction role message!",
    async execute(message) {
      let holo = await anime.holo();
      const embed =  new Discord.MessageEmbed()
        .setTitle('hentai holo picture')
        .setColor("RANDOM")
        .setImage(holo)
      message.channel.send(embed)
        

    }}