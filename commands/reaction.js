module.exports = {
    name: 'reaction',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '803906863019982848';
        const verifyTeamRole = message.guild.roles.cache.find(role => role.name === "Member");
        const unverifyTeamRole = message.guild.roles.cache.find(role => role.name === "Unverify");

        const verifyTeamEmoji = '☑️';

        let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle('Verify you are human')
            .setDescription('Id : tolong pastikan kalau anda bukan bot\n'+
            'En : please make sure that you are not a bot\n'
              + `${verifyTeamEmoji} React the button below if you are a hman`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(verifyTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === verifyTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(verifyTeamRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(unverifyTeamRole);
                }
            } else {
                return;
            }
        });
    }
}   