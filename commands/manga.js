const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'manga',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('Manga image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.manga())
      message.channel.send(embed)
        

    }}