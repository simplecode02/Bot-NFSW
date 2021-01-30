const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'hmidriff',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.hmidriff();
      const embed = new Discord.MessageEmbed()
      .setTitle(`HentaiMidriff Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}