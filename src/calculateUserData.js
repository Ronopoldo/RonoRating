function calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently) {
     if (talkedRecently.has(msg.author.id)) {
    } else {


                if (fs.existsSync('./data/UserData/' + msg.author.id + '/integers/exp')) 
      {
          // Removes the user from the set after a minute
          try{
          console.log(msg.author.tag + ' + 1 поинт актива')
          
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
              msg.reply(':tada:Новый уровень!:tada:\nУровень: ' + (Number(lvl)+1).toString() + '\nТотал опыт: ' + Math.floor(totalXP) + '\nПолучено монет: ' + Math.floor(NewMoney))
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

module.exports = { calculateUserData }