const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'gonewild',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.gonewild();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Wild Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}