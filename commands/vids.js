const Discord = require('discord.js');

module.exports = {
    name: 'vids',
    description: "Sets up a reaction role message!",
    async execute(message) {
      const embed =  new Discord.MessageEmbed()
        .setTitle('List Video')
        .setColor("RANDOM")
        .setDescription('List Stream Video')
        .addField(`ano-danchi-no-tsuma-tachi-wa-1`, `https://drive.google.com/file/d/1zBl_1gIqHUalONqDFsNVMWi1A9eNUpwj/view?usp=sharing`)
        .addField('ano-danchi-no-tsuma-tachi-wa-2','https://drive.google.com/file/d/1P0Y9E8ILWMQm_DlxL3kwIoDg2bzNd_VW/view?usp=sharing')
        .addField('daisuki-na-haha-2','https://drive.google.com/file/d/1UEohUX8oYbr_wmEpls7g5IltoOAx8kfn/view?usp=sharing')
      message.channel.send(embed)
        

    }}