const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'hentaigif',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('Hentai GIF image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.gif())
      message.channel.send(embed)
        

    }}