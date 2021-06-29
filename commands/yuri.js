const Discord = require('discord.js');
const slink = require("discord-slink");
const lewd = slink.Nsfw;

module.exports = {
    name: 'beta',
    description: "Sets up a reaction role message!",
    async execute(message) {
      
      let yuri = await lewd.yuri();
      const embed =  new Discord.MessageEmbed()
        .setTitle('yuri you picture')
        .setColor("RANDOM")
        .setImage(yuri)
      message.channel.send(embed)
        

    }}