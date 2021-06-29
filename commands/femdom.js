const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'femdom',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('Femdom image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.femdom())
      message.channel.send(embed)
        

    }}