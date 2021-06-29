const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'cum',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('Cum image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.cum())
      message.channel.send(embed)
        

    }}