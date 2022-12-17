async function claimCommand(fs, msg, ctx, sharp, canvas, client, getData, putData, isExist, iniciator) {
    if (await isExist(iniciator) == true)
    {
     try{

    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let obj = await getData(iniciator)
    let userThemes = obj.themes
       
    const args = msg.message.text.slice(`/био`).split(/ +/);
    if (args[1] == '2022pixel')
    {
      if (userThemes.includes('2022pixel'))
      {
        msg.reply('У тебя уже есть эта тема!').catch(err => {});
      }else
      {
        obj.themes[obj.themes.length] = '2022pixel'
        msg.reply('Тема успешно получена!').catch(err => {});
        console.log('Бета')

        let owned = Number(fs.readFileSync('./Background/2022pixel/owned', "utf8"));
            fs.writeFileSync('./Background/2022pixel/owned',(owned + 1).toString(), 'utf8', (err) => { console.log(err) })
      }
      console.log(iniciator)
      putData(iniciator, obj)
    }else{
      msg.reply('Не найдено темы..')
    }
  
  }catch(err){ msg.reply('Ошибка: ' + err).catch(err => {}); }
}
}

module.exports = { claimCommand }