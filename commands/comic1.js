const Discord = require("discord.js");

module.exports = {
    name: 'comic1',
    description: "Comic Link",
    async execute(message) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Comic Link")
        .setColor("BLUE")
        .setDescription("List of comic links || PDF files \n all these comics are not made by me")
        .setThumbnail("https://media4.giphy.com/media/N4AIdLd0D2A9y/giphy.gif")

        .addField("=====\nWomen Change Jobs Sub", '**=====**')
        .addField("Women Change Jobs Part 1", "http://bit.ly/WomenChangeJobPart1")
        .addField("Women Change Jobs Part 2", "http://bit.ly/WomenChangeJobPart2")

        .addField("=====\nPart Time Sub", '**=====**')
        .addField("Part Time Part 1", "http://bit.ly/PartTimeJobPart1")
        .addField("Part Time Part 2", "http://bit.ly/PartTimeJobPart2")

        .addField("=====\nNext Door Sub", '**=====**')
        .addField("Next Door Part 1", "http://bit.ly/NextDoorPart1")
        .addField("Next Door Part 2", "http://bit.ly/NextDootPart2")

        .addField("=====\nFamily Sub", '**=====**')
        .addField("Family Part 1", "http://bit.ly/FamilyPart1")
        .addField("Family Part 2", "http://bit.ly/FamilyPart2")

        .addField("=====\nManager Sub", '**=====**')
        .addField("Manager Part 1", "http://bit.ly/ManagerPart1")
        .addField("Manager Part 2", "http://bit.ly/ManagerPart2")
        
        .setFooter("By : HentaiBot#2501")
      message.channel.send(embed);
    }
}