const Discord = require("discord.js");

module.exports = {
    name: 'main',
    description: "Sets up a reaction role message!",
    async execute(message) {

      const embed1 = new Discord.MessageEmbed()
      .setColor("RED")
      .setThumbnail("https://d1fdloi71mui9q.cloudfront.net/NgHjzkqOQDOTqvOHVHFL_70f32b2a7fb20d377548633bf52281641.png")
      .setTitle(`colored comic`)
      .setURL("https://linktr.ee/wildestanime")
      message.channel.send(embed1);

      const embed2 = new Discord.MessageEmbed()
      .setColor("RED")
      .setThumbnail("https://ih1.redbubble.net/image.1826547257.3852/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg")
      .setTitle(`random comic`)
      .setURL("https://nhentai.net/")
      message.channel.send(embed2);
    }
}