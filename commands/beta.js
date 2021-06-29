const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'beta',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

      let embed = new Discord.MessageEmbed()
        .setTitle('Testing')
        .setDescription('Testing Button in beta muehehehe')
      
      let button = new MessageButton()
        .setStyle('blurple')
        .setLabel('Testing')
        .setID("Tesing_button1")
      
      message.channel.send('Generating Help List....', {
        components: button,
        embed: embed
      });
    }}