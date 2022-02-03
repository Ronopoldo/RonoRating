function claimCommand(fs, msg, ctx, sharp, canvas) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
    {
     try{

    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let filepath = "./data/UserData/" + msg.author.id;
    let userThemes = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
       
    const args = msg.content.slice(`/био`).split(/ +/);
    if (args[1] == process.env.SecretCode1)
    {
      if (userThemes.includes('2022pixel'))
      {
        msg.reply('У тебя уже есть эта тема!').catch(err => {});
      }else
      {
        fs.writeFileSync(filepath + '/themes/2022pixel',CurrentDate, 'utf8', (err) => { console.log(err) })
        msg.reply('Тема успешно получена!').catch(err => {});
        console.log('Бета')

        let owned = Number(fs.readFileSync('./Background/2022pixel/owned', "utf8"));
            fs.writeFileSync('./Background/2022pixel/owned',(owned + 1).toString(), 'utf8', (err) => { console.log(err) })
      }
    }
  
  }catch(err){ msg.reply('Ошибка: ' + err).catch(err => {}); }
}
}

module.exports = { claimCommand }