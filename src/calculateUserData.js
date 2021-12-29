function calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently) {
  if (msg.channel.type !== 'dm')
  {
     if (talkedRecently.has(msg.author.id)) {
    } else {


                if (fs.existsSync('./data/UserData/' + msg.author.id + '/integers/exp')) 
      {

          // Removes the user from the set after a minute
          try{
          console.log(msg.author.tag + ' + 1 поинт актива')



  let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}))
  let InputMassive = []

if (fs.existsSync('./data/UserData/' + msg.author.id + '/badges/lastActve'))
{}else{
  console.log('ПЕРВИЧНАЯ ЗАПИСЬ!')
  InputMassive[0] = CurrentDate.getMonth()
  InputMassive[1] = CurrentDate.getDate()
  InputMassive[2] = '1'
  fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/lastActve', Number(InputMassive[0]) + ' ' + Number(InputMassive[1]) + ' ' + Number(InputMassive[2]), 'utf8')
    
fs.writeFileSync('./data/UserData/' + msg.author.id + '/tasks/lastActve','0', 'utf8')
}

let lastActive = fs.readFileSync('./data/UserData/' + msg.author.id + '/badges/lastActve', "utf8");
InputMassive = lastActive.split(' ', 3);
console.log('LastActive: ')
console.log(InputMassive)
console.log(CurrentDate.getMonth() + ' ' + CurrentDate.getDate())
console.log()
console.log(Number(CurrentDate.getDate()))
console.log(Number(InputMassive[1]) + 1)

if ((Number(CurrentDate.getDate()) == (Number(InputMassive[1]) + 1)) && (CurrentDate.getMonth() == Number(InputMassive[0]).toString()))
{
  console.log('Сценарий 1')
  InputMassive[0] = CurrentDate.getMonth()
  InputMassive[1] = CurrentDate.getDate()
  InputMassive[2] = Number(InputMassive[2]) + 1
  fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/lastActve', Number(InputMassive[0]) + ' ' + Number(InputMassive[1]) + ' ' + Number(InputMassive[2]), 'utf8')

}else
{
  console.log('Сценарий 2')
  if (((CurrentDate.getDate() == '28') || (CurrentDate.getDate() == '29') || (CurrentDate.getDate() == '30') || (CurrentDate.getDate() == '31')) && ((CurrentDate.getMonth() == Number(InputMassive[0]) + 1) || ((CurrentDate.getMonth() == '0') && (Number(InputMassive[0]) == 11))))
  {
    console.log('Сценарий 2.1')
  InputMassive[0] = CurrentDate.getMonth()
  InputMassive[1] = CurrentDate.getDate()
  InputMassive[2] = Number(InputMassive[2]) + 1
  fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/lastActve', InputMassive[0] + ' ' + InputMassive[1] + ' ' + InputMassive[2], 'utf8')
  }else
  {console.log('Сценарий 2.2')

  if ((Number(CurrentDate.getDate()) > (Number(InputMassive[1]) + 1)) && (CurrentDate.getMonth() == Number(InputMassive[0]).toString()))
  {
console.log('Сценарий 3.1')
InputMassive[0] = CurrentDate.getMonth()
  InputMassive[1] = CurrentDate.getDate()
  InputMassive[2] = '1'
  fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/lastActve', Number(InputMassive[0]) + ' ' + Number(InputMassive[1]) + ' ' + Number(InputMassive[2]), 'utf8')
  }else
  {
console.log('Сценарий 3.3')
  }

      if (CurrentDate.getMonth() !== Number(InputMassive[0]))
    {
      console.log('Сценарий 3.2')
InputMassive[0] = CurrentDate.getMonth()
  InputMassive[1] = CurrentDate.getDate()
  InputMassive[2] = '1'
  fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/lastActve', Number(InputMassive[0]) + ' ' + Number(InputMassive[1]) + ' ' + Number(InputMassive[2]), 'utf8')
    }else
    {console.log('Сценарий 3.3')}
  


  
  }
}

let lastActiveLvl = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/tasks/lastActve', "utf8"));
let activeDays = [0,2,4,7,10,14,18,21,25,31,45,60,90]
let rewards = [0,50,100,150,200,400,500,550,600,1000,700,1000,5000]
if (InputMassive[2] >= activeDays[lastActiveLvl])
{
  let Money2 = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
  Money2 = Number(Money2) + rewards[lastActiveLvl]
fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money', Money2.toString(), 'utf8')


  lastActiveLvl = lastActiveLvl + 1
  fs.writeFileSync('./data/UserData/' + msg.author.id + '/tasks/lastActve', lastActiveLvl.toString(), 'utf8')
  msg.reply(':tada: **__Поздравляю!__**\nВы получили новый ' + lastActiveLvl + ' уровень в категории "Ежедневный актив"\nПолучено монет: ' + rewards[lastActiveLvl-1]).catch(err => {});

}












          
          let Money = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
          let Points = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/exp', "utf8");
          let ActiveBadge = fs.readFileSync('./data/UserData/' + msg.author.id + '/badges/active', "utf8");
          
          console.log(ActiveBadge)
          let ActiveMassive = ActiveBadge.split('\n', 5)
          console.log(ActiveMassive)
          Money = Number(Money) + Math.floor(Math.random() * 4) + 1;
          let PointsString = '0.' + (Math.floor(Math.random() * 1) + 9).toString();
          Points = Number(Points) + Number(PointsString)

          console.log('Поинты: ' + Points + '|' + Money)
           fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/exp', Points.toString(), 'utf8')
           fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money', Money.toString(), 'utf8')
           fs.writeFileSync('./data/UserData/' + msg.author.id + '/badges/active', ActiveMassive[0] + '\n' + (Number(ActiveMassive[1]) + 1).toString(), 'utf8')
           console.log('Внесено: ' + Money.toString())
           console.log('Мани: ' + Money)
           }catch(err){console.log(err)}
          let levelNeed = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8");
           
           
           NeededXP = 8
           CycleNum = 0
           active = true

           while (active == true)
           {
             if (NeededXP < 460) { NeededXP = NeededXP * 1.12 }else{NeededXP = 500; active == false } //break;
             CycleNum = CycleNum + 1
             if (CycleNum > levelNeed) { active = false }
            //  console.log(NeededXP + '|' + CycleNum + '|' + levelNeed)
           }
          
          console.log('ЭКСПА: ' + NeededXP)
            let Points = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/exp', "utf8");

           if (Number(Points) > NeededXP)
           {
             let lastLvl = '0'
             try{lastLvl  = fs.readFileSync('./data/UserData/' + msg.author.id + '/tasks/activity', "utf8")}catch(err){}
              fs.writeFileSync('./data/UserData/' + msg.author.id + '/tasks/activity', (Number(lastLvl)+1).toString(), 'utf8')

             let totalXP = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/SummarXP', "utf8")
             totalXP = Number(totalXP) + Number(Points)
             fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/SummarXP', totalXP.toString(), 'utf8')

              let lvl = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', "utf8")
              lvl = Number(lvl) + 1
              fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/lvl', lvl.toString(), 'utf8')








let Money1 = fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8");
            NewMoney = 50
           CycleNum = 0
           active = true
           while (active == true)
           {
             if (NewMoney < 460) { NewMoney = NewMoney * 1.12 }else{NewMoney = 500; active == false } //break;
             CycleNum = CycleNum + 1
             if (CycleNum > levelNeed) { active = false }
           }


              Money1 = Number(Money1) + Math.floor(NewMoney)
              Points = 0

              fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money', (Math.floor(Money1)).toString(), 'utf8')
              fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/exp', Number(Points).toString(), 'utf8')
              msg.reply(':tada:Новый уровень!:tada:\nУровень: ' + (Number(lvl)+1).toString() + '\nТотал опыт: ' + Math.floor(totalXP) + '\nПолучено монет: ' + Math.floor(NewMoney)).catch(err => {});
           }
          //  msg.reply(NeededXP.toString())
      }
      //ЗАВЕРШИТЬ!!!!!1 upd: красава, завершил




                    talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
  
    }
}
}

module.exports = { calculateUserData }