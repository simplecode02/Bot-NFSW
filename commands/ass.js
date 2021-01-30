const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'ass',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.ass();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Ass Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}