const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkyMzc5NTA5NjQ2OTUwNDEy.Xn2yOQ.VBZTZxcX19o-B28GCeY5mwU-2F4';

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

bot.login(token);
