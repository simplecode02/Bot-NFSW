const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'creampie',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('Creampie image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.creampie())
      message.channel.send(embed)
        

    }}