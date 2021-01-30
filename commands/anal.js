const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'anal',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.anal();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Anal Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}