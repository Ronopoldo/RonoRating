async function spamtonCommand(msg, fs, client, args, getData, putData, isExist) {
  {
     if (msg.member.id == '733603141559386113')
    {





        const args = msg.content.slice(`/био`).split(/ +/);

            let preview = false
    if (msg.content.toLowerCase().startsWith('/preview')) { preview = true}

    
    if (msg.content.toLowerCase().startsWith('/card')) { preview = false}
    if (args.length >= 2)
    {
      pingedUser = args[1]
      pingedUser = pingedUser.replace("<@",'')
      pingedUser = pingedUser.replace("!",'')
      pingedUser = pingedUser.replace(">",'')
    }
    if (args.length >= 2)
    {
      pingedUser = args[1]
    }
    if ((args.length >= 2) && (!args[1].includes('<@')))
    {
      pingedUser = '<@' + args[1] + '>'
      console.log(pingedUser)
    }
    if (args.length == 1)
    {
      console.log('прошло')
      pingedUser = '<@' + msg.member.id +">"
    }

    if (args.length > 2)
    {    
      msg.reply('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упоминание')
    }


   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {}
let obj = await getData(pingedUser)
   if (await isExist(pingedUser))
   { }else{
     msg.reply('Чел... Я такова не нашёл сори лол')
     pingedUser = msg.member.id}
    client.users.fetch(pingedUser).then(User => 
  {
          let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
	

         obj.themes[obj.themes.length] = '[SPAMTON]'

      console.log(obj)
      console.log('-===========-')
	 putData(pingedUser, obj)
        
msg.reply('Тема была успешно [ВЫДАНА] пользователю [<@' + pingedUser + '>]')


  },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  

     
  }else{
    msg.reply('Чел, лол, у тя полномочий нет) Ебать ты попуск кнш')
  
  }
}
}
  

module.exports = { spamtonCommand }