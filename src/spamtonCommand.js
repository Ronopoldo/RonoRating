function spamtonCommand(msg, fs, client, args) {
  {
     if (msg.member.id == '733603141559386113')
    {
    if (fs.existsSync('./data/UserData/' + msg.member.id))
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

   if (fs.existsSync('./data/UserData/' + pingedUser))
   { }else{
     msg.reply('Чел... Я такова не нашёл сори лол')
     pingedUser = msg.member.id}
    client.users.fetch(pingedUser).then(User => 
  {
          let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 


        fs.writeFileSync('./data/UserData/' + pingedUser + '/themes/[SPAMTON]', CurrentDate)

            let owned = Number(fs.readFileSync('./Background/[SPAMTON]/owned', "utf8"));
            fs.writeFileSync('./Background/[SPAMTON]/owned',(owned + 1).toString(), 'utf8', (err) => { console.log(err) })

        
msg.reply('Тема была успешно [ВЫДАНА] пользователю [<@' + pingedUser + '>]')


  },error => {msg.reply('Хей! Что то пошло не так! Убедись, что ты указал верный ID или упомянул существующего пользователя!\nКод ошибки: ' + error)})
  }

   
  }else{
    msg.reply('Чел, лол, у тя полномочий нет) Ебать ты попуск кнш')
  }
  }
  }

module.exports = { spamtonCommand }