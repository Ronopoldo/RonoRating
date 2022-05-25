function msgProcessing(msg, client, fs, checkCount) {
  
  msg.channel.messages.fetch({ limit: 2 })
    .then(messageMappings => {
      let messages = Array.from(messageMappings.values());
      let previousMessage = messages[1].content;



      let splittedMsg = previousMessage.split(" ");
      console.log('-===================')
      let count = splittedMsg[0]
      console.log(splittedMsg)


  if ( msg.content.split(" ")[0] == (Number(count) + 1).toString())
  {

console.log('1')
    
    let userCount = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/count', "utf8"))
    let level = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/tasks/countlvl', "utf8"))
    let money = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8"))
    let lvlUP = [1, 5, 10, 15, 20, 40, 60, 80, 100, 200, 300, 500, 750]
    let rewards = [50, 50, 100, 100, 200, 400, 500, 600, 750, 1500, 2020, 10000, 15000]

    console.log(lvlUP[level])
    if (userCount+1 >= lvlUP[level]) {
     
      console.log('yah')
      
    fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money', (money + rewards[level]).toString(), 'utf8')
      fs.writeFileSync('./data/UserData/' + msg.author.id + '/tasks/countlvl', (level + 1).toString(), 'utf8')

  if (msg.author.bot == false){
      
      msg.author.send('Новый уровень счёта\nУровень: ' + (level + 1).toString() + '\nВсего насчитано: ' + (userCount + 1).toString() + '\nПолучено бабосиков: ' + rewards[level])

  }
    }

fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/count', (userCount + 1).toString(), 'utf8')
    
  }else{
  msg.delete()
  }


      
    })

    .catch(error => console.log("error", "Error fetching messages in channel"))
}
module.exports = { msgProcessing }