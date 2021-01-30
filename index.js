const Discord = require("discord.js");
const fs = require('fs');

//Login Bot
const client = new Discord.Client();
client.login(process.env.TOKEN);
client.commands = new Discord.Collection();

//Command Handler
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  console.log("Load COMMANDS : ")
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});

//Bot Activity
const prefix = 'h!';
client.on("ready", function () {
    client.user.setActivity(`Hentai ${prefix}help`, { type: "WATCHING" });
    console.log(`Load user : \n${client.user.tag} im ready to use`,);
})


client.on('message', message => {
  message.member.roles.cache.has;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.lenght).split(/ +/);
  const command = args.shift().toLocaleLowerCase(); 
  //help
  if(command === 'h!help'){
      const embed = new Discord.MessageEmbed()
        .setTitle(`Help`)
        .setColor("RANDOM")
        .addField(`${prefix}anal`, `Generate Anal Image`, true)
        .addField(`${prefix}4k`, `Generate 4K Image`, true)
        .addField(`${prefix}ass`, `Generate Ass Image`, true)
        .addField(`${prefix}wild`, `Generate Gone Wild Image`, true)
        .addField(`${prefix}pgif`, `Generate Porn Gif Image`, true)
        .addField(`${prefix}pussy`, `Generate Pussy Image`, true)
        .addField(`${prefix}thigh`, `Generate Thigh Image`, true)
        .addField(`${prefix}boobs`, `Generate Boobs Image`, true)
        .addField(`${prefix}hentai`, `Generate Hentai Image`, true)
        .addField(`${prefix}hmidriff`, `Generate hmidriff Image`, true)
        .addField(`${prefix}erokemo`, `Generate erokemo Image`, true)
        .addField(`${prefix}kitsune`, `Generate kitsune Image`, true)
        .addField(`${prefix}lewd`, `Generate lewd Image`, true)
        .addField(`${prefix}nfeet`, `Generate nfeet Image`, true)
        .addField(`${prefix}npussy`, `Generate npussy Image`, true)
        .addField(`${prefix}ntits`, `Generate ntits Image`, true)
        .addField(`${prefix}solo`, `Generate solo Image`, true)
        .addField(`${prefix}hentaithigh`, `Generate hentaithigh Image`, true)
        .addField(`${prefix}hentaiass`, `Generate Hentai Ass Image`, true)
        .addField(`${prefix}comic`, `Generate Link to download comic [0-2]`, true)
        .addField(`${prefix}main`, `Generate Link to main page comic website`, true)
        .setFooter("From HentaiBot#2501")
      message.channel.send(embed);
  }
  //Anime
  if(command === 'h!anime'){
    client.commands.get('anime').execute(message);
  }
  //Anal
  if(command === 'h!anal'){
    client.commands.get('anal').execute(message);
  }
  //4K
  if(command === 'h!4k'){
    client.commands.get('fourk').execute(message);
  }
  //Ass
  if(command === 'h!ass'){
    client.commands.get('ass').execute(message);
  }
  //Wild
  if(command === 'h!wild'){
    client.commands.get('gonewild').execute(message);
  }
  //pgif
  if(command === 'h!pgif'){
    client.commands.get('pgif').execute(message);
  }
  //pussy
  if(command === 'h!pussy'){
    client.commands.get('pussy').execute(message);
  }
  //thigh
  if(command === 'h!thigh'){
    client.commands.get('thigh').execute(message);
  }
  //boobs
  if(command === 'h!boobs'){
    client.commands.get('boobs').execute(message);
  }
  //hentaiass
  if(command === 'h!hentaiass'){
    client.commands.get('hentaiass').execute(message);
  }
  //hentai
  if(command === 'h!hentai'){
    client.commands.get('hentai').execute(message);
  }
  //hmidriff
  if(command === 'h!hmidriff'){
    client.commands.get('hmidriff').execute(message);
  }
  //hentaithigh
  if(command === 'h!hentaithigh'){
    client.commands.get('hentaithigh').execute(message);
  }
  //erokemo
  if(command === 'h!erokemo'){
    client.commands.get('erokemo').execute(message);
  }
  //kitsune
  if(command === 'h!kitsune'){
    client.commands.get('kitsune').execute(message);
  }
  //lewd
  if(command === 'h!lewd'){
    client.commands.get('lewd').execute(message);
  }
  //nekofeet
  if(command === 'h!nfeet'){
    client.commands.get('nekofeet').execute(message);
  }
  //nekopussy
  if(command === 'h!npussy'){
    client.commands.get('nekopussy').execute(message);
  }
  //nekotits
  if(command === 'h!ntits'){
    client.commands.get('nekotits').execute(message);
  }
  //solo
  if(command === 'h!solo'){
    client.commands.get('solo').execute(message);
  }
  //wallpaperV1
  if(command === 'h!wallpaperv1'){
    client.commands.get('wallpaper').execute(message);
  }
  //wallpaperV2
  if(command === 'h!wallpaperv2'){
    client.commands.get('wallpaperv2').execute(message, args);
  }
  //Comic Link 0
  if(command === 'h!comic'){
     if (message.member.roles.cache.has('803868750192967720')) {  
        client.commands.get('comic').execute(message, args);
      }else{
        return message.reply("Indonesia : Untuk menghindari spam commands dibatasi \n  English : to avoid spam utility is restricted")
      }
    
  }
  //Comic Link 1
  if(command === 'h!comic1'){
     if (message.member.roles.cache.has('803868750192967720')) {  
        client.commands.get('comic1').execute(message, args);
      }else{
        return message.reply("Indonesia : Untuk menghindari spam commands dibatasi \n  English : to avoid spam utility is restricted")
      }
    
  }
  //Comic Link 2
  if(command === 'h!comic2'){
     if (message.member.roles.cache.has('803868750192967720')) {  
        // client.commands.get('comic2').execute(message, args);
        return message.reply("Admin butuh istirahat, tunggu unuk update beriktnya \n Coming soon again")
      }else{
        return message.reply("Indonesia : Untuk menghindari spam commands dibatasi \n  English : to avoid spam utility is restricted")
      }
    
  }
  //Link Main
  if(command === 'h!main'){
    if (message.member.roles.cache.has('803868750192967720')) {
      client.commands.get('main').execute(message, args);
    }else{
        return message.reply("Indonesia : Untuk menghindari spam commands dibatasi \n  English : to avoid spam utility is restricted")
    }
  }
  //Link Main
  if(command === 'h!react'){
    if (message.member.roles.cache.has('803868750192967720')) {
      client.commands.get('reaction').execute(message, args, Discord, client);
    }else{
        return message.reply("Indonesia : Untuk menghindari spam commands dibatasi \n  English : to avoid spam utility is restricted")
    }
  }
  //Rules
  if(command === 'h!rules'){
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("RULES DISCORD SERVER")
      .setDescription("**Indonesia** : Jika kalian ingin berbagi file silahkan berbagi pada channel **#berbagi**, dan tolong bersabar untuk kedepannya admin akan memperbanyak kegunaan bot beserta comicnya akan diperbanyak jadi kalian tinggal tunggu kelanjutan dari adminnya ~enjoy \n **English** : If you want to share files, please share them on the **#berbagi** channel, and please be patient the admin will increase the use of the bot and the comics will be reproduced, so you just have to wait for the next update from the admin ~enjoy \n**Disclaimer** : Comic bukanlan buatan admin || Comic is not made by admin")
    message.channel.send(embed)
  }
})

//user Join
client.on('guildMemberAdd', guildMember => {
  let WelcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Unverify');
  guildMember.roles.add(WelcomeRole)
  let embedwelcome = new Discord.MessageEmbed()
    .setColor(0x00FF2E)
    .setTitle(`Welcome Message`)
    .setDescription(`**=================================** \n` 
      +`Welcome  <@${guildMember.user.id}> to SecretDiscordServer \n`
      +`ID : Silahkan lakukan verify terlebih dahulu click ☑️ pada chanel Verify user\n` 
      +`EN : Please verify first, click ☑️ on the Verify user channel`)
      .setFooter(`By : HentaiBot#2501`);
    guildMember.guild.channels.cache.get('803914842456719412').send(embedwelcome)
})
client.on('guildMemberRemove', guildMember => {
  let embedwelcome = new Discord.MessageEmbed()
    .setColor(0x00FF2E)
    .setTitle(`GoodBye Message`)
    .setDescription(`**=================================** \n` 
      +`Goodbye  <@${guildMember.user.id}> from SecretDiscordServer \n`)
      .setFooter(`By : HentaiBot#2501`);
    guildMember.guild.channels.cache.get('803914842456719412').send(embedwelcome)
})
require('./server')();