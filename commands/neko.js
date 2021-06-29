const Discord = require("discord.js");
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'neko',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      let neko = await anime.neko();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Kitsune Image`)
      .setColor("RANDOM")
      .setImage(neko);
      message.channel.send(embed);
    }
}