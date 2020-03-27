const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '?';

bot.on('ready', () =>{
  console.log('Botti käynnistetty');
  bot.user.setActivity('KaktusCord', { type: 'STREAMING'}).catch(console.error);
})

bot.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ");
  
  switch(args[0]){
    case 'moi':
    
    message.reply(`moi`);

    break;

})

bot.login(BOT_TOKEN);
