const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'thigh',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.thigh();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Thigh Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}