const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'tentacles',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('Tentacles image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.tentacles())
      message.channel.send(embed)
        

    }}