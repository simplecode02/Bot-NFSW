const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'lewd',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.lewd();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Lewd Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}