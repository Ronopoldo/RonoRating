
function voiceActivity(fs, client, chID) {

  setInterval(function() {

    let ChillCenter = client.channels.cache.get(chID)
    ChillCenter.members.forEach(element => {

      if ((fs.existsSync('./data/UserData/' + element.id)) && (element.voice.selfDeaf == false)) {

        let userActivity = fs.readFileSync('./data/UserData/' + element.id + '/integers/voice')
        console.log(element.id)
        let plusAmount =  1

        if ((element.voice.selfMute == true) || (element.voice.serverMute == true)) { plusAmount = plusAmount * 0.5 }


        if (element.voice.streaming == true) { plusAmount = plusAmount * 1.5 }

        console.log(element.tag + element.voice.streaming)

        if (element.id == '849254300030599208') {
          plusAmount = 9872543
        }


        userActivity = Number(userActivity) + plusAmount
        fs.writeFileSync('./data/UserData/' + element.id + '/integers/voice', userActivity.toString())
        console.log(element.user.tag + ' + ' + plusAmount + ' минута ГС; всего: ' + userActivity)

        let lvlArray = [0.5, 1, 1.5, 2, 3, 4, 5, 10, 15, 20, 25, 30, 45, 50, 75, 90, 120, 150, 180, 220, 280, 320, 390, 460, 500, 600, 750, 800, 900, 1000]

        let rewards = [50, 100, 300, 400, 800, 1200, 3000, 7000, 7000, 8500, 9000, 9000, 9000, 10000, 11000, 15000, 16000, 17000, 18000, 19000, 20000, 25000, 25000, 25000, 25000, 25000, 25000, 40000, 40000, 250000]

        let currentLvl = fs.readFileSync('./data/UserData/' + element.id + '/tasks/voice')
        let Money = fs.readFileSync('./data/UserData/' + element.id + '/integers/money')

        if (userActivity / 60 >= lvlArray[currentLvl]) {





          Money = Number(Money) + rewards[currentLvl]
          currentLvl = Number(currentLvl) + 1

          fs.writeFileSync('./data/UserData/' + element.id + '/integers/money', Money.toString())
          fs.writeFileSync('./data/UserData/' + element.id + '/tasks/voice', currentLvl.toString())

          element.user.send('**__Поздравляю с новым уровнем в категории "Голосовая активность"!__**\nНовый уровень: `' + currentLvl.toString() + '`\nЧасов в голосовых каналах: `' + (userActivity / 60).toFixed(1).toString() + '`\nПолучено монет: `' + (rewards[currentLvl]).toString() + '`\n\nИскренне\nРоносервер').catch(error => { })
        }


          if (fs.existsSync('./data/UserData/' + element.user.id + '/DATATRANSFERCONFIRMATION'))
          {
            
            let curExpPath = './data/UserData/' + element.user.id + '/integers/totalXp'
            let xp = fs.readFileSync(curExpPath)
            let normalXp = fs.readFileSync('./data/UserData/' + element.user.id + '/integers/grandXp')
            let daystreak = fs.readFileSync('./data/UserData/' + element.user.id + '/badges/lastActve') + ''

            let dayStreakClear = Number(daystreak.split(' ')[2])


let multiplier = 4
            if (dayStreakClear < 60)
            {
              multiplier = dayStreakClear * 0.05  + 1
            }

            let newXp = plusAmount * multiplier
            xp = Number(xp) + newXp
            fs.writeFileSync(curExpPath, xp.toString())
            fs.writeFileSync('./data/UserData/' + element.user.id + '/integers/grandXp', normalXp.toString())
            // element.user.send(dayStreakClear.toString())
            // element.user.send(multiplier.toString())
            // element.user.send(xp.toString())
            // element.user.send(newXp.toString())



            /////УРОВНИ И ДЕНЬГИ

            let globalLvl = Number(fs.readFileSync('./data/UserData/' + element.user.id + '/tasks/global'))


            let neededExp = 12
            let active1 = true
            let counterGlobal = 0
            let globalMoney = 25
            while (active1 == true)
            {
              neededExp = neededExp * 1.2
              globalMoney = globalMoney * 1.1
              counterGlobal = counterGlobal + 1
              if (counterGlobal >= globalLvl)
              {
                active1 = false
              }
            }

            if (neededExp > 450) { neededExp = 450 }
            console.log(neededExp + ' - нужный опыт')
            if (neededExp < Number(normalXp))
            {
              let money = fs.readFileSync('./data/UserData/' + element.user.id + '/integers/money')
              money = Number(money) + globalMoney
              console.log('МАНИ ' + money)
              console.log( Number(money))
              console.log(globalMoney)
              normalXp = Number(normalXp) - neededExp
              globalLvl = globalLvl + 1

              fs.writeFileSync('./data/UserData/' + element.user.id + '/tasks/global', globalLvl.toString()) // Уровень
              fs.writeFileSync('./data/UserData/' + element.user.id + '/integers/money', money.toString()) // Деньги
              fs.writeFileSync('./data/UserData/' + element.user.id + '/integers/grandXp', normalXp.toString()) //Экспи в ноль

              element.user.send(':tada:Новый ГЛОБАЛЬНЫЙ уровень!:tada:\nУровень: ' + globalLvl.toString() + '\nТотал опыт: ' + Math.floor(xp) + '\nПолучено монет: ' + Math.floor(globalMoney)).catch(err => {});
            }





          }else{
            element.user.send('Хей! Тебе не добавляется глобальный опыт!\nСрочно перенеси свой текущий командой `/transfer`\n\nPS - команду будет выключена в ближайшее время и те, кто не перенёс опыт, остануться без него')
          }



      } else { console.log(element.id + ' не зареган') }
    });

if (chID == '647198455936319528'){
    let Users = fs.readdirSync('./data/UserData', "utf8");

    let randomElement = Users[Math.floor(Math.random() * Users.length)];
    

    client.users.fetch(randomElement).then(User => 
  {
    
client.user.setPresence({ status: "idle" });
    client.user.setActivity('за ' + User.tag, { type: 'WATCHING' });
    client.user.setStatus('idle')
    console.log('Слежу за ' + User.tag)


  });
  }

    
    



      



    

  }, 60000);

}
module.exports = { voiceActivity }