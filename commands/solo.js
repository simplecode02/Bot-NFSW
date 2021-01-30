const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'solo',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.solo();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Solo Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}