function claimCommand(fs, msg, ctx, sharp, canvas) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
    {
     try{

    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let filepath = "./data/UserData/" + msg.author.id;
     fs.readdir('./data/UserData/' + msg.author.id + '/themes', (err, files) => {
       
  files.forEach(file => {
        let UserThemes = []
    UserThemes[UserThemes.length] = file
    const args = msg.content.slice(`/био`).split(/ +/);
    if (args[1] == 'бета')
    {
      if (UserThemes.includes('beta'))
      {
        msg.reply('У тебя уже есть эта тема!')
      }else
      {
        fs.writeFileSync(filepath + '/themes/beta',CurrentDate, 'utf8', (err) => { console.log(err) })
        msg.reply('Тема успешно получена!')
        console.log('Бета')

      }
    }
  })})
  }catch(err){ msg.reply('Ошибка: ' + err) }
}
}

module.exports = { claimCommand }