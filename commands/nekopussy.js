const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'nekopussy',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.nekopussy();
      const embed = new Discord.MessageEmbed()
      .setTitle(`NekoPussy Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}