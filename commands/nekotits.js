const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'nekotits',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.nekotits();
      const embed = new Discord.MessageEmbed()
      .setTitle(`NekoTits Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}