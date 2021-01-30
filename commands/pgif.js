const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'pgif',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.pgif();
      const embed = new Discord.MessageEmbed()
      .setTitle(`pgif Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}