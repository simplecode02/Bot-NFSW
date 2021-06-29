const Discord = require('discord.js');
const hmtai = require("hmtai");

module.exports = {
    name: 'gangbang',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      const embed =  new Discord.MessageEmbed()
        .setTitle('hentai thight  image')
        .setColor("RANDOM")
        .setImage(hmtai.nsfw.zettaiRyouiki())
      message.channel.send(embed)
        

    }}