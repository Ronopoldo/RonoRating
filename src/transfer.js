function transfer(msg, fs) {

if (fs.existsSync('./data/UserData/' + msg.author.id))
{
  if (fs.existsSync('./data/UserData/' + msg.author.id + '/DATATRANSFERCONFIRMATION'))
  {
    msg.reply('Йоу! Твои данные не нуждаются в переносе ^^')
  }else{
    let VOICEXP = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/voice'))
    let TEXTXP = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/SummarXP')) * 2.25
let TEXTXPALPHA = Number(fs.readFileSync('./data/UserData/' + msg.author.id + '/integers/exp')) * 2.25


    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    
    fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/totalXp', (VOICEXP + TEXTXP + TEXTXPALPHA).toString())
    fs.writeFileSync('./data/UserData/' + msg.author.id + '/integers/grandXp', (VOICEXP + TEXTXP + TEXTXPALPHA).toString())
    fs.writeFileSync('./data/UserData/' + msg.author.id + '/tasks/global', '0')
    fs.writeFileSync('./data/UserData/' + msg.author.id + '/DATATRANSFERCONFIRMATION', CurrentDate)


    msg.reply('ХЕЙ! Данные успешно перенесены! Проверь их командой `/card`\nПеренёс тебе ' + (Math.floor(VOICEXP + TEXTXP + TEXTXPALPHA)).toString() + ' опыта :Р')
  }
}
}
module.exports = { transfer }

