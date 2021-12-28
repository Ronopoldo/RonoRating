function voiceActivity(fs, client) {

  setInterval(function() {

  let ChillCenter = client.channels.cache.get('647198455936319528')
  ChillCenter.members.forEach(element => 
    {

      if (fs.existsSync('./data/UserData/' + element.id))
   {

      let userActivity = fs.readFileSync('./data/UserData/' + element.id + '/integers/voice')
      console.log(element.id)
      userActivity = Number(userActivity) + 1
      fs.writeFileSync('./data/UserData/' + element.id + '/integers/voice' ,userActivity.toString())
      console.log(element.user.tag + ' + 1 минута ГС; всего: ' + userActivity)

      let lvlArray = [0.5,1,1.5,2,3,4,5,10,15,20,25,30,45,50,75,90,120,150,180,220,280,320,390,460,500,600,750,800,900,1000]

      let rewards = [50,100,300,400,800,1200,3000, 7000, 7000, 8500, 9000, 9000,9000,10000,11000,15000,16000,17000,18000,19000,20000,25000,25000,25000,25000,25000,25000,40000,40000,250000]

      let currentLvl = fs.readFileSync('./data/UserData/' + element.id + '/tasks/voice')
        let Money = fs.readFileSync('./data/UserData/' + element.id + '/integers/money')

      if (userActivity/60 >= lvlArray[currentLvl])
      {
        


        

        Money = Number(Money) + rewards[currentLvl]
        currentLvl = Number(currentLvl) + 1

        fs.writeFileSync('./data/UserData/' + element.id + '/integers/money', Money.toString())
        fs.writeFileSync('./data/UserData/' + element.id + '/tasks/voice', currentLvl.toString())
        
        element.user.send('Поздравляю с новым уровнем в категории "Голосовая активность"!\nНовый уровень: ' + currentLvl.toString() + '\nЧасов в голосовых каналах: ' + (userActivity/60).toString() + '\nПолучено монет: ' + (rewards[currentLvl]).toString() + '\n\nИскренне\nРоносервер')
      }
      

   }else{console.log(element.id + ' не зареган')}
    }); 
    
}, 60000);

}
module.exports = { voiceActivity }

