const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'erokemo',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.erokemo();
      const embed = new Discord.MessageEmbed()
      .setTitle(`erokemo Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}