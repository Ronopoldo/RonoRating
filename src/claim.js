function claimCommand(fs, msg, ctx, sharp, canvas) {
    if (fs.existsSync('./data/UserData/' + msg.author.id))
    {
     try{

    let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
    let filepath = "./data/UserData/" + msg.author.id;
    let userThemes = fs.readdirSync('./data/UserData/' + msg.author.id + '/themes')
       
    const args = msg.content.slice(`/био`).split(/ +/);
    // if (args[1] == 'бета')
    // {
    //   if (userThemes.includes('beta'))
    //   {
    //     msg.reply('У тебя уже есть эта тема!')
    //   }else
    //   {
    //     fs.writeFileSync(filepath + '/themes/beta',CurrentDate, 'utf8', (err) => { console.log(err) })
    //     msg.reply('Тема успешно получена!')
    //     console.log('Бета')

    //     let owned = Number(fs.readFileSync('./Background/beta/owned', "utf8"));
    //         fs.writeFileSync('./Background/beta/owned',(owned + 1).toString(), 'utf8', (err) => { console.log(err) })
    //   }
    // }
  
  }catch(err){ msg.reply('Ошибка: ' + err) }
}
}

module.exports = { claimCommand }