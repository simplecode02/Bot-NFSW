const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'wallpaper',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const image = await nsfw.wallpaper();
      const embed = new Discord.MessageEmbed()
      .setTitle(`Wallpaper Image`)
      .setColor("RANDOM")
      .setImage(image);
      message.channel.send(embed);
    }
}