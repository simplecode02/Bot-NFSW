const Discord = require("discord.js");

module.exports = {
    name: 'comic',
    description: "Comic Link",
    async execute(message) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Comic Link")
        .setColor("BLUE")
        .setDescription("List of comic links || PDF files \n all these comics are not made by me")
        .setThumbnail("https://media4.giphy.com/media/N4AIdLd0D2A9y/giphy.gif")

        .addField("=====\nMom Saves Sub", '**=====**')
        .addField("Mom Saves Part 1", "http://bit.ly/MomSavePart1")
        .addField("Mom Saves Part 2", "http://bit.ly/MomSavePart2")

        .addField("=====\nMom Needs Sub", '**=====**')
        .addField("Mom Needs Part 1", "http://bit.ly/MotherNeedsPart1")
        .addField("Mom Needs Part 2", "http://bit.ly/MotherNeedsPart2")

        .addField("=====\nLady Neighbor Sub", '**=====**')
        .addField("Lady Neighbor Part 1", "http://bit.ly/LadyNeighrborPart1")
        .addField("Lady Neighbor Part 2", "http://bit.ly/LadyNeighrborPart2")

        .addField("=====\nOne Time Call Sub", '**=====**')
        .addField("One Time Call Part 1", "http://bit.ly/OneTimeCallPart1")
        .addField("One Time Call Part 2", "http://bit.ly/OneTimeCallPart2")

        .addField("=====\nPanic Sub", '**=====**')
        .addField("Panic Part 1", "http://bit.ly/PanicPart1")
        .addField("Panic Part 2", "http://bit.ly/PanicPart2")
        
        .setFooter("By : HentaiBot#2501")
      message.channel.send(embed);
    }
}