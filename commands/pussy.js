const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'pussy',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.pussy();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Pussy Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}