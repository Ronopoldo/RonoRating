function transfer(fs, transuser) {

if (fs.existsSync('./data/UserData'))
{
  if (fs.existsSync('./data/UserData/' + transuser + '/DATATRANSFERCONFIRMATION'))
  {
    console.log('Йоу! Твои данные не нуждаются в переносе ^^')
  }else{
    let VOICEXP = Number(fs.readFileSync('./data/UserData/' + transuser + '/integers/voice'))
    let TEXTXP = Number(fs.readFileSync('./data/UserData/' + transuser + '/integers/SummarXP')) * 2.25
let TEXTXPALPHA = Number(fs.readFileSync('./data/UserData/' + transuser + '/integers/exp')) * 2.25


    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    
    fs.writeFileSync('./data/UserData/' + transuser + '/integers/totalXp', (VOICEXP + TEXTXP + TEXTXPALPHA).toString())
    fs.writeFileSync('./data/UserData/' + transuser + '/integers/grandXp', (VOICEXP + TEXTXP + TEXTXPALPHA).toString())
    fs.writeFileSync('./data/UserData/' + transuser + '/tasks/global', '0')
    fs.writeFileSync('./data/UserData/' + transuser + '/DATATRANSFERCONFIRMATION', CurrentDate)


    console.log('ХЕЙ! Данные успешно перенесены! Проверь их командой `/card`\nПеренёс тебе ' + (Math.floor(VOICEXP + TEXTXP + TEXTXPALPHA)).toString() + ' опыта :Р')
  }
}
}
module.exports = { transfer }

