async function calculateUserData(fs, msg, client, ctx, sharp, canvas, talkedRecently, getData, isExist, putData) {
  const guild = client.guilds.cache.get("544902879534907392");
  if (msg.channel.type !== 'dm' && msg.channel.id != '978739540736999444')
  {
    console.log(await isExist(msg.author.id))
    if (await isExist(msg.author.id) == true)
    {
      console.log('LOL x2')
     if (talkedRecently.has(msg.author.id)) {
    } else {

      let obj = await getData(msg.author.id)
      let textexp = Number(obj.active.text.exp)
      let textlvl = Number(obj.active.text.lvl)
      let money = Number(obj.money)
      let exp = Number(obj.exp)
      let lvl = Number(obj.lvl)
       obj.active.text.exp = textexp + 1
       money = Number(money) + Math.floor(Math.random() * 5) + 1;


//ЕЖЕДНЕВНЫЙ
let dataObj = obj.active.daily.exp.slice(`/био`).split(/ +/);
       let dateLvl = Number(obj.active.daily.lvl)
       let date = dataObj[0]
       let dateExp = Number(dataObj[1])
       let currentDate = new Date(new Date().toLocaleDateString("en-US", {timeZone: "Europe/Moscow"}))

       console.log(currentDate)
       if (dataObj.length >= 3)
       {
         obj.active.daily.exp = currentDate.toISOString() + ' ' + '0'
       }else{
         let dataDate = new Date(date)
         let difference = Math.round((currentDate-dataDate)/(1000*60*60*24))

         if (difference == 1)
         {
           dateExp = dateExp + 1
         }

         if (difference > 1)
         {
           dateExp = dateExp - difference + 1
         }

         if (dateExp < 0)
         {
           dateExp = 0
         }

         obj.active.daily.exp = currentDate.toISOString() + ' ' + dateExp

let activeDays = [0,2,4,7,10,14,18,21,25,31,45,60,90]
let rewards = [0,50,100,150,200,400,500,550,600,1000,700,1000,5000]

         if (activeDays[dateLvl] <= dateExp)
         {
           dateLvl = dateLvl + 1
           money = money + rewards[dateLvl]
           msg.reply
           obj.active.daily.lvl = dateLvl
           msg.reply('Поздравляю с ' + dateLvl + ' в категории "Ежедневный актив"\nПолучено монет: ' + rewards[dateLvl])
         }
       }









       
      //Текстовый
       
      //Текстовый вайл
           let neededExp = 8
           let CycleNum = 0
           while (true)
           {
             if (neededExp < 460) { neededExp = neededExp * 1.12 }else{neededExp = 500; active == false } //break;
             CycleNum = CycleNum + 1
             if (CycleNum > textlvl) { break }
           }

       
      //Глобальный вайл
      let globalNeededExp = 12
      let globalCounter = 0
      let newGlobalMoney = 25
       
            while (true)
      {
        globalNeededExp = globalNeededExp * 1.2
        newGlobalMoney = newGlobalMoney * 1.1
        globalCounter = globalCounter + 1
        if (globalCounter >= lvl)
        {
          break;
        }
        exp = exp + globalNeededExp
      }

      if (globalNeededExp > 450) { globalNeededExp = 450 }
      if (neededExp > 450) { neededExp = 450 }
      console.log(neededExp + ' - нужный опыт')
      //Текстовый иф
      if (neededExp - 1 < Number(textexp))
      {
        
        textlvl++

          let newMoney = 50
           CycleNum = 0
           while (true)
           {
             if (newMoney < 460) { newMoney = newMoney * 1.12 }else{newMoney = 500; break } //break;
             CycleNum = CycleNum + 1
             if (CycleNum > textlvl) { break }
           }

        
        money = money + Math.floor(newMoney)
       obj.active.text.lvl = Math.floor(Number(textlvl))
        textexp = 0
        obj.active.text.exp = 0
        msg.reply('Йоу! Поздравляю с ' + textlvl + ' уровнем в категории "Текстовая активность!"\nПолучено денег: ' + Math.floor(newMoney))
      }
      //Глобальный иф
            if (globalNeededExp < Number(textexp))
      {
        lvl++
        money = money + newGlobalMoney
      }
      //Ежедневный


       obj.money = Math.floor(money)
      console.log(obj)
       putData(msg.author.id, obj)
    }
                    talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 60000);
  }
    }
}


module.exports = { calculateUserData }