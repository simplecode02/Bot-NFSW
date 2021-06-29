const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'bdsm',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('BDSM image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.bdsm())
      message.channel.send(embed)
        

    }}