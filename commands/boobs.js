const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'boobs',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.boobs();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Boobs Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}