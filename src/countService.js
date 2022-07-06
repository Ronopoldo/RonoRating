async function msgProcessing(msg, client, checkCount, getData, putData, isExist) {
  let existense = false
  let obj = {}
  if (await isExist(msg.author.id))
  {
    obj = await getData(msg.author.id)
    existense = true
    console.log('POPASODPOAPOPASOpdoap')
  }



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
if (existense)
{
  console.log('pipi')

    let userCount = Number(obj.active.count.exp)
    let level = Number(obj.active.count.lvl)
    let money = Number(obj.money)
    let lvlUP = [1, 5, 10, 15, 20, 40, 60, 80, 100, 200, 300, 500, 750]
    let rewards = [50, 50, 100, 100, 200, 400, 500, 600, 750, 1500, 2020, 10000, 15000]

    console.log(lvlUP[level])
    console.log(userCount)
    if (userCount+1 >= lvlUP[level]) {
     
      console.log('yah')
      
    obj.money = money + rewards[level]
    obj.active.count.lvl = level + 1

  if (msg.author.bot == false){
      
      msg.author.send('Новый уровень счёта\nУровень: ' + (level + 1).toString() + '\nВсего насчитано: ' + (userCount + 1).toString() + '\nПолучено бабосиков: ' + rewards[level])

  }
    }

obj.active.count.exp = userCount + 1

putData(msg.author.id, obj)
  }
  }else{
  msg.delete()
  }


      
    })

    .catch(error => console.log("error", "Error fetching messages in channel" + error))
}
module.exports = { msgProcessing }