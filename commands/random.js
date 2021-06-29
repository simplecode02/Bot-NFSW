const Discord = require("discord.js");
const RandomHub = require('random-hub').RandomHub;
const hub = new RandomHub();

module.exports = {
    name: 'random',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed = new Discord.MessageEmbed()
      .setTitle(`random Image`)
      .setColor("RANDOM")
      .setImage(hub.getRandomHub());
      message.channel.send(embed);
    }
}