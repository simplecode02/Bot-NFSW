const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'kitsune',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.kitsune();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Kitsune Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}