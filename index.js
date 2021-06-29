const Discord = require("discord.js");
const disbut = require('discord-buttons');
const fs = require('fs');
const axios = require('axios')

//Login Bot
const client = new Discord.Client();
// require('discord-buttons')(client);
client.login(process.env.TOKEN);
disbut(client)
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

//Discord Buttons

//Bot Activity
const prefix = process.env['PREFIX'];
client.on("ready", function () {
    client.user.setActivity(`Hentai ${prefix}help`, { type: "WATCHING" });
    console.log(`Load user : \n${client.user.tag} im ready to use`,);
})


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.lenght).split(/ +/);
  const command = args.shift().toLocaleLowerCase(); 

  //============================================
  //Help Commands
  //============================================
  if(command === 'h!help'){
     let embed1 = new Discord.MessageEmbed()
      .setTitle('Help Command')
      .setColor('RANDOM')
      .setThumbnail("https://media4.giphy.com/media/N4AIdLd0D2A9y/giphy.gif")
      .setDescription('Hi my name is Virtua, im a bot tha use to generate random NFSW\nI generate several types of photos, GIFs, Videos, Manga and Doujinshi randomly, and in this bot it is divided into 4 categories\n**and the commands will send to your DM**\n you can pick your category bellow 👇👇')

    let button_help1 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Real Porn')
      .setID("help_button1")

    let button_help2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Hentai')
      .setID("help_button2")
    
    let button_help3 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Hentai Neko')
      .setID("help_button3")
    
    let button_help4 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Manga & Doujinshi')
      .setID("help_button4")

    message.channel.send('Generating Help List....', {
    buttons: [button_help1, button_help2, button_help3, button_help4],
    embed: embed1
    });

  }
  //============================================
  //Manga & Doujinshi  
  //============================================
  //Link Main
  if(command === 'h!source'){
    let embed_source = new Discord.MessageEmbed()
      .setTitle('this is source data, in develop bot')
      .setColor("E40EE1")
      .setDescription('You can pick the website below 👇👇')

    let button_source_US = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('🌐')
      .setURL(`https://linktr.ee/wildestanime`) 
      .setLabel('US Comic')
    
    let button_source_JP1 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('🌐')
      .setURL(`https://nhentai.net`) 
      .setLabel('Japan Comic')

    let button_source_JP2 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('🌐')
      .setURL(`https://cin.cin.pw`) 
      .setLabel('Japan Comic 2')

    let button_source_KR = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('🌐')
      .setURL(`https://sekaicomic.com`) 
      .setLabel('Korean Comic')

    let button_hentai = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('🌐')
      .setURL(`https://hanime.tv`) 
      .setLabel('Hentai Video')

    let button_hentai_ID = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('🌐')
      .setURL(`https://nekopoi.care`) 
      .setLabel('Hentai Video Sub Indo')

    let buttonRow1 = new disbut.MessageActionRow()
      .addComponent(button_source_US)
      .addComponent(button_source_KR);
    
    let buttonRow2 = new disbut.MessageActionRow()
      .addComponent(button_source_JP1)
      .addComponent(button_source_JP2);
    
    let buttonRow3 = new disbut.MessageActionRow()
      .addComponent(button_hentai)
      .addComponent(button_hentai_ID);

    message.channel.send('Generating Source List....', {
    components: [buttonRow1, buttonRow2, buttonRow3],
    embed: embed_source});
  }
  //Nuke
  if(command === 'h!nuke'){
    let embed_nuke = new Discord.MessageEmbed()
      .setTitle('Nuke Page')
      .setDescription('You can pick your level want :\n 1 : Easy mode \n2 : Medium mode \n3 : Hard mode')
      .setThumbnail('https://media1.tenor.com/images/22d2021540541e319091c1e89774e008/tenor.gif')
      .setColor("RANDOM")

      let button_nuke1 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Level 1')
      .setID("nuke_button1")

      let button_nuke2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Level 2')
      .setID("nuke_button2")

      let button_nuke3 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Level 3')
      .setID("nuke_button3")

    message.channel.send('Generating Nuke List....', {
    buttons: [button_nuke1, button_nuke2, button_nuke3],
    embed: embed_nuke
    });

  }
  //Nuke Random Code
  if(command === 'h!nuker'){
    axios
      .get('https://myapiinventory.000webhostapp.com/apiinventory/botAPI/get_random.php')
      .then((res) => {
        const link = res.data[0].nuke_id;
        const title = res.data[0].title;
        const page = res.data[0].page;
        const genre = res.data[0].genre;
        const category = res.data[0].category;

        let embed = new Discord.MessageEmbed()
          .setTitle(`${title}`)
          .setColor("9D0EE4")
          .setDescription(`**Nuke ID** : ${link}\n**Genre** : ${genre}\n**Category** : ${category}`);

        let button = new disbut.MessageButton()
          .setStyle('url')
          .setEmoji('🌐')
          .setURL(`https://cin.cin.pw/v/${link}`) 
          .setLabel('Cin Cin Read')
        
        let button2 = new disbut.MessageButton()
          .setStyle('url')
          .setEmoji('🌐')
          .setURL(`https://nhentai.net/g/${link}`)
          .setLabel('Nhentai Read')

        message.channel.send('Generate Manga or Doujinshi...', {
        buttons: [button, button2],
        embed: embed })
          
        })
      .catch((err) => {
        console.error('ERR:', err)
      })
  } 
  //Videos
  if(command === 'h!vids'){

    let embed_video = new Discord.MessageEmbed()
      .setTitle('Get Link Video')
      .setColor("RANDOM")
      .setDescription('You can watch hentai videos by clicking the button below \n and you will receive a dm from me :)')

    let button_video = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Click Me')
      .setID("video_button")
    
    message.channel.send('Wait for a few sec...', {
    component: button_video,
    embed: embed_video
    });
  }
  //Comic
  if(command === 'h!comic'){  
    let embed_comic = new Discord.MessageEmbed()
      .setTitle('Comic')
      .setColor('RANDOM')
      .setDescription('welcome to the commands comic, **the comic itself is still under development**, \nbut we have prepared some for you : ) \nplease select below')
    
    let button_comic1 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Comic 1')
      .setID("comic_button1")

    let button_comic2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Comic 2')
      .setID("comic_button2")

    message.channel.send('Wait for a few sec...', {
      buttons: [button_comic1, button_comic2],
      embed: embed_comic
    })
    
  }

  //Test Beta Commands
  if(command === 'h!beta'){
    client.commands.get('beta').execute(message, args, Discord, client)
  }

  //============================================
  //Real Porn
  //============================================
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

  //============================================
  //Hentai
  //============================================
  //hentai Manga
  if(command === 'h!manga'){
    client.commands.get('manga').execute(message);
  }
  //hentai Tentacles
  if(command === 'h!tentacles'){
    client.commands.get('tentacles').execute(message);
  }
  //hentai hentaithigh
  if(command === 'h!hentaithigh'){
    client.commands.get('hentaithighh').execute(message);
  }
  //hentai GIF
  if(command === 'h!hentaigif'){
    client.commands.get('hentaigif').execute(message);
  }
  //hentai Femdom
  if(command === 'h!femdom'){
    client.commands.get('femdom').execute(message);
  }
  //hentai Creampie
  if(command === 'h!creampie'){
    client.commands.get('creampie').execute(message);
  }
  //hentai CUM
  if(command === 'h!cum'){
    client.commands.get('cum').execute(message);
  }
  //hentai BDSM
  if(command === 'h!bdsm'){
    client.commands.get('bdsm').execute(message);
  }
  //hentai Ass
  if(command === 'h!hentaiass'){
    client.commands.get('hentaiass').execute(message);
  }
  //hentai Lewd
  if(command === 'h!lewd'){
    client.commands.get('lewd').execute(message);
  }
  //hentai
  if(command === 'h!hentai'){
    client.commands.get('hentai2').execute(message);
  }
  //hmidriff
  if(command === 'h!hmidriff'){
    client.commands.get('hmidriff').execute(message);
  }
  //hentai Thigh
  if(command === 'h!thighs'){
    client.commands.get('hentaithigh').execute(message);
  }
  //hentai Solo
  if(command === 'h!solo'){
    client.commands.get('solo').execute(message);
  }
  //Swimsuit
  if(command === 'h!hentaiswim'){
    client.commands.get('hentaiswimsuit').execute(message);
  }
  //Holo
  if(command === 'h!hentaiholo'){
    message.reply('masih error anjinc')
  }
  //hentai Hanal
  if(command === 'h!hanal'){
    client.commands.get('hanal').execute(message);
  }
  //hentai Pussy
  if(command === 'h!hentaipussy'){
    client.commands.get('nekopussy').execute(message);
  }
  //hentai Feet
  if(command === 'h!hentaifeet'){
    client.commands.get('nekofeet').execute(message);
  }
  //hentai Yuri
  if(command === 'h!yuri'){
    client.commands.get('yuri').execute(message);
  }

  //============================================
  //neko
  //============================================
  //erokemo
  if(command === 'h!erokemo'){
    client.commands.get('erokemo').execute(message);
  }
  //neko
  if(command === 'h!neko'){
    client.commands.get('neko').execute(message);
  }
  //nekotits
  if(command === 'h!nekotits'){
    client.commands.get('nekotits').execute(message);
  }

  //============================================
  //Random
  //============================================
  //Random
  if(command === 'h!random'){
    client.commands.get('random').execute(message);
  }
  //wallpaperV1
  if(command === 'h!wallpaperv1'){
    client.commands.get('wallpaper').execute(message);
  }
  //wallpaperV2
  if(command === 'h!wallpaperv2'){
    client.commands.get('wallpaperv2').execute(message, args, client, Discord);
  }
})




//Click Button commands
client.on('clickButton', async (button) => {
    
  //Help Button
  if(button.id === 'help_button1'){
     const embed_help1 = new Discord.MessageEmbed()
      .setTitle("Real Porn")
      .setDescription('This category will generate random porn photos, not including hentai \n============================================')
      .setColor("RANDOM")
      .addField(`${prefix}anal`, `Generate Anal Image`, true)
      .addField(`${prefix}4k`, `Generate 4K Image`, true)
      .addField(`${prefix}ass`, `Generate Ass Image`, true)
      .addField(`${prefix}wild`, `Generate Gone Wild Image`, true)
      .addField(`${prefix}pgif`, `Generate Porn Gif Image`, true)
      .addField(`${prefix}pussy`, `Generate Pussy Image`, true)
      .addField(`${prefix}thigh`, `Generate Thigh Image`, true)
      .addField(`${prefix}boobs`, `Generate Boobs Image`, true)

    button.clicker.user.send('Here your request', embed_help1);
  }
  if(button.id === 'help_button2'){
    const embed_help2 = new Discord.MessageEmbed()
      .setTitle("Hentai")
      .setDescription('This category will generate random hentai photos, or GIF \n============================================')
      .setColor("RANDOM")
      .addField(`${prefix}hentai`, `Generate Hentai Image`, true)
      .addField(`${prefix}hmidriff`, `Generate hmidriff Image`, true)
      .addField(`${prefix}solo`, `Generate solo Image`, true)
      .addField(`${prefix}thighs`, `Generate hentaithigh Image`, true)
      .addField(`${prefix}hentaiass`, `Generate Hentai Ass Image`, true)
      .addField(`${prefix}hentaiswim`, `Generate Hentai Swimsuit Image [Still on fix]`, true)
      .addField(`${prefix}hanal`, `Generate Hentai anal Image`, true)
      .addField(`${prefix}hentaiholo`, `Generate Hentai holo`,true)
      .addField(`${prefix}hentaipussy`, `Generate Hentai Random pussy image`, true)
      .addField(`${prefix}hentaifeet`, `Generate nfeet Image`, true)
      .addField(`${prefix}yuri`, `Generate Yuri Image`, true)
      .addField(`${prefix}bdsm`, 'Generate BDSM Image', true)
      .addField(`${prefix}cum`, `Generate Cum Image`, true)
      .addField(`${prefix}creampie`, `Generate creampie Image`, true)
      .addField(`${prefix}femdom`, `Generate femdom Image`, true)
      .addField(`${prefix}hentaigif`, `Generate Hentai GIF`, true)
      .addField(`${prefix}tentacles`, `Generate tentacles image`, true)
      .addField(`${prefix}manga`, `Generate manga Image`, true)

  button.clicker.user.send('Here your request', embed_help2);

  }
  if(button.id === 'help_button3'){
    const embed_help3 = new Discord.MessageEmbed()
      .setTitle("Hentai Neko")
      .setDescription('This category will generate random hentai, photos, or maybe GIF, but this category was different its just will generate Neko \n============================================')
      .setColor("RANDOM")
      .addField(`${prefix}lewd`, `Generate lewd Image`, true)
      .addField(`${prefix}erokemo`, `Generate erokemo Image`, true)
      .addField(`${prefix}neko`, `Generate neko Image`, true)
      .addField(`${prefix}nekotits`, `Generate ntits Image`, true)

    button.clicker.user.send('Here your request', embed_help3);
  }
  
  if(button.id === 'help_button4'){
    const embed_help4 = new Discord.MessageEmbed()
      .setTitle("Manga & Doujinshi")
      .setDescription('This category will generate like the main web, or you want to read manga and doujinshi you can use the commands \n============================================')
      .setColor("RANDOM")
      .addField(`${prefix}source`, `Generate source link`, true)
      .addField(`${prefix}nuke`, `Generate nuke code`, true)
      .addField(`${prefix}comic`, `Generate list comic`, true)
      .addField(`${prefix}nuker`, `Generate random nuke code`, true)

    button.clicker.user.send('Here your request', embed_help4);
  }


  //Nuke Button
  if(button.id === 'nuke_button1'){
    button.channel.send('Your code will send using dm : )')
    const embed_nuke1 = new Discord.MessageEmbed()
      .setTitle('Easy Mode')
      .setColor("#42E40E")
      .setDescription('Easy mode : Sange, Biasa Aja, Mental Lemah ')
      .addField(`nuke code =`, `•316755 •316596 •311850 \n•315578 •315488 •315406 \n•315344 •315323 •315136 \n Website : https://nhentai.net`)
    button.clicker.user.send(embed_nuke1)
  }
  if(button.id === 'nuke_button2'){
    button.channel.send('Your code will send using dm : )')
    const embed_nuke2 = new Discord.MessageEmbed()
      .setTitle('Normal Mode')
      .setColor("#E1E40E")
      .setDescription('Normal mode : Bisa bikin sange, Lumayan nyesek, Rasanya pengen masturbate teros, Mental Batu')
      .addField(`nuke code =`, `•316867 •316869 •316785 \n•316763 •316445 •316250 \n•311283 •265671 •312127 \n Website : https://nhentai.net`)
    button.clicker.user.send(embed_nuke2)
  }
  if(button.id === 'nuke_button3'){
    button.channel.send('Your code will send using dm : )')
    const embed_nuke3 = new Discord.MessageEmbed()
      .setTitle('Normal Mode')
      .setColor("#E41E0E")
      .setDescription('Hard mode : Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja')
      .addField(`nuke code =`, `•316820 •316481 •316430 \n•276347 •196329 •304543 \n•295295 •311262 •311882 \n Website : https://nhentai.net`)
    button.clicker.user.send(embed_nuke3)
  }

  //Video Button
  if(button.id === 'video_button'){
    let embed_video_send1 = new Discord.MessageEmbed()
      .setTitle('Page 1 / 4')
      .setColor('#8c52ff')
      .setDescription('**Immorality** : https://bit.ly/3A9yQgf'+ 
      '\n**Ride of the valkyries** : https://bit.ly/3y8eu5z'+
      '\n**Cougar Trap** : https://bit.ly/3h1MOJV'+
      '\n**Rei Zero 2** : https://bit.ly/3diXYYn'+
      '\n**ano danchi no tsuma tachi wa 1** : https://bit.ly/3AbNeF8'+
      '\n**ano danchi no tsuma tachi wa 2** : https://bit.ly/3h1O7Z9' +
      '\n**gibo no toiki 2** : https://bit.ly/3AhzDfx'+
      '\n**jk fuuzoku gakuensai 1** : https://bit.ly/3hh4zUe')
    
    let button_video_next1 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Next Page')
      .setID("video_button_next1")
    
    button.clicker.user.send('this is your request list of hentai videos', {
      component: button_video_next1,
      embed: embed_video_send1});

  }
  if(button.id === 'video_button_next1'){
    let embed_video_send2 = new Discord.MessageEmbed()
      .setTitle('Page 2 / 4')
      .setColor('#8c52ff')
      .setDescription('**Immorality** : https://bit.ly/3A9yQgf'+ 
      '\n**Ride of the valkyries** : https://bit.ly/3y8eu5z'+
      '\n**Cougar Trap** : https://bit.ly/3h1MOJV'+
      '\n**Rei Zero 2** : https://bit.ly/3diXYYn'+
      '\n**ano danchi no tsuma tachi wa 1** : https://bit.ly/3AbNeF8'+
      '\n**ano danchi no tsuma tachi wa 2** : https://bit.ly/3h1O7Z9' +
      '\n**gibo no toiki 2** : https://bit.ly/3AhzDfx'+
      '\n**jk fuuzoku gakuensai 1** : https://bit.ly/3hh4zUe')

    let button_video_next2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Next Page')
      .setID("video_button_next2")
    
    button.clicker.user.send('this is your request list of hentai videos', {
      component: button_video_next2,
      embed: embed_video_send2
    });

  }
  if(button.id === 'video_button_next2'){
    button.clicker.user.send('stop right here, jangan sering" coli, tapi nanti ini bakalan masih ada kok jadi tunggu aja')
  }

  //Comic
  if(button.id === 'comic_button1'){
    const embed_comic1 = new Discord.MessageEmbed()
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
    
    button.clicker.user.send('Your request is comic page 1', embed_comic1)
  }
  if(button.id === 'comic button2'){
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
      .addField("=====\nOne Time Call Sub", '**=====**')
      .addField("Panic Part 1", "http://bit.ly/PanicPart1")
      .addField("Panic Part 2", "http://bit.ly/PanicPart2")
      .setFooter("By : HentaiBot#2501")
      button.clicker.user.send('Your request is comic page 2', embed_comic1)
  }

  button.defer();
});


//Log & Host
require('log-timestamp');
require('./server')();