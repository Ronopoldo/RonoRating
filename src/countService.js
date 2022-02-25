function msgProcessing(msg, client, fs) {
  let currentCount = Number(fs.readFileSync('./data/count', "utf8"))

  if ((msg.content.startsWith(((currentCount + 1).toString() + ' '))) || (msg.content == (currentCount + 1).toString())) {
    fs.writeFileSync('./data/count', (currentCount + 1).toString(), 'utf8')

    let userCount = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/count', "utf8"))
    let level = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/tasks/countlvl', "utf8"))
    let money = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/money', "utf8"))
    let lvlUP = [1, 5, 10, 15, 20, 40, 60, 80, 100, 200, 300, 500, 750]
    let rewards = [50, 50, 100, 100, 100, 200, 250, 300, 1000, 1500, 2000, 5000, 10000]

    console.log(lvlUP[level])
    if (userCount+1 >= lvlUP[level]) {
      msg.reply('12333333')
      console.log('yah')
      
    fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/money', (money + rewards[level]).toString(), 'utf8')
      fs.writeFileSync('./data/UserData/' + msg.author.id + '/tasks/countlvl', (level + 1).toString(), 'utf8')

      msg.author.send('Новый уровень счёта\nУровень: ' + (level + 1).toString() + '\nВсего насчитано: ' + (userCount + 1).toString() + '\nПолучено бабосиков: ' + rewards[level])
    }




    fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/count', (userCount + 1).toString(), 'utf8')
  } else {
if (msg.author.id != '899380887282675743')
{
    msg.delete()
}
  }
}
module.exports = { msgProcessing }