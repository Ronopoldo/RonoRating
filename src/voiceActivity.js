
async function voiceActivity(fs, client, chID, getData, putData, isExist) {

  setInterval(function() {

    let ChillCenter = client.channels.cache.get(chID)
    ChillCenter.members.forEach(async element => {

      if ((await isExist(element.id) == true) && (element.voice.selfDeaf == false)) {
        let obj = await getData(element.id)
        let userActivity = obj.active.voice.exp
        console.log(element.id)
        let plusAmount =  1.1

        if ((element.voice.selfMute == true) || (element.voice.serverMute == true)) { plusAmount = plusAmount * 0.5 }


        if (element.voice.streaming == true) { plusAmount = plusAmount * 1.5 }

        console.log(element.tag + element.voice.streaming)

        if (element.id == '849254300030599208') {
          plusAmount = 1000
        }

        
        obj.active.voice.exp = Number(obj.active.voice.exp) + plusAmount
        obj.exp = Number(obj.exp) + plusAmount
        console.log(element.user.tag + ' + ' + plusAmount + ' минута ГС; всего: ' + userActivity)

        let lvlArray = [0.5, 1, 1.5, 2, 3, 4, 5, 10, 15, 20, 25, 30, 45, 50, 75, 90, 120, 150, 180, 220, 280, 320, 390, 460, 500, 600, 750, 800, 900, 1000]

        let rewards = [50, 100, 300, 400, 800, 1200, 3000, 7000, 7000, 8500, 9000, 9000, 9000, 10000, 11000, 15000, 16000, 17000, 18000, 19000, 20000, 25000, 25000, 25000, 25000, 25000, 25000, 40000, 40000, 250000]

        let currentLvl = obj.active.voice.lvl
        let Money = obj.money

        if (userActivity / 60 >= lvlArray[currentLvl]) {





          Money = Number(Money) + rewards[currentLvl]
          currentLvl = Number(currentLvl) + 1

          obj.money = Money
          obj.active.voice.lvl = currentLvl

          element.user.send('**__Поздравляю с новым уровнем в категории "Голосовая активность"!__**\nНовый уровень: `' + currentLvl.toString() + '`\nЧасов в голосовых каналах: `' + (userActivity / 60).toFixed(1).toString() + '`\nПолучено монет: `' + (rewards[currentLvl-1]).toString() + '`\n\nИскренне\nРоносервер').catch(error => { })
        }


            
            let normalXp = obj.exp
            let daystreak = obj.active.daily.exp

            let dayStreakClear = Number(daystreak.split(' ')[1])


let multiplier = 4
            if (dayStreakClear < 60)
            {
              multiplier = dayStreakClear * 0.05  + 1
            }

            let newXp = plusAmount * multiplier
            obj.exp = normalXp
            // element.user.send(dayStreakClear.toString())
            // element.user.send(multiplier.toString())
            // element.user.send(xp.toString())
            // element.user.send(newXp.toString())



            /////УРОВНИ И ДЕНЬГИ

            let globalLvl = obj.lvl


            let neededExp = 12
            let active1 = true
            let counterGlobal = 0
            let globalMoney = 25
            while (true)
            {
              neededExp = neededExp * 1.2
              globalMoney = globalMoney * 1.1
              counterGlobal = counterGlobal + 1
              if (counterGlobal >= globalLvl)
              {
                break;
              }
            }

            if (neededExp > 450) { neededExp = 450 }
            console.log(neededExp + ' - нужный опыт')
            if (neededExp < Number(normalXp))
            {
              let money = obj.money
              money = Number(money) + globalMoney
              console.log('МАНИ ' + money)
              console.log( Number(money))
              console.log(globalMoney)
              normalXp = Number(normalXp) - neededExp
              globalLvl = Number(globalLvl) + 1

              obj.lvl = globalLvl // Уровень
              obj.money = money // Деньги
              obj.exp = normalXp//Экспи в ноль

              element.user.send(':tada:Новый ГЛОБАЛЬНЫЙ уровень!:tada:\nУровень: ' + globalLvl.toString() + '\nПолучено монет: ' + Math.floor(globalMoney)).catch(err => {});
            }







putData(element.id, obj)

      } else { console.log(element.id + ' не зареган') }
    });

if (chID == '647198455936319528'){
  let dbsetup = JSON.parse(fs.readFileSync('./data/dbsetup'))
    let Users = Object.keys(dbsetup)

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