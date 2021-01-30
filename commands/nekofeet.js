const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'nekofeet',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.nekofeet();
      const embed = new Discord.MessageEmbed()
      .setTitle(`NekoFeet Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}