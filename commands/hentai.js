const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'hentai',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.hentai();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Hentai Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}