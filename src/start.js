function startCommand(fs, msg, iniciator) {
  
    let filepath = "./data/UserData/" + iniciator.id;
    console.log(filepath)
    try{
    if (!fs.existsSync(filepath)) 
      {
        let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})).toJSON(); 
        fs.mkdirSync(filepath, err => {console.log(err)})
        fs.mkdirSync(filepath + '/integers', err => {console.log(err)})
        fs.mkdirSync(filepath + '/collections', err => {console.log(err)})
        fs.mkdirSync(filepath + '/config', err => {console.log(err)})
        fs.mkdirSync(filepath + '/badges', err => {console.log(err)})
        fs.mkdirSync(filepath + '/themes', err => {console.log(err)})
        fs.mkdirSync(filepath + '/tasks', err => {console.log(err)})
        fs.mkdirSync(filepath + '/cardBadges', err => {console.log(err)})
      fs.writeFileSync(filepath + '/tasks/voice', '0')
              fs.writeFileSync(filepath + '/integers/talkingPoints', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/integers/money', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });

    fs.writeFileSync('./data/UserData/' + iniciator.id + '/integers/totalXp', '0')
    fs.writeFileSync('./data/UserData/' + iniciator.id + '/integers/grandXp', '0')
    fs.writeFileSync('./data/UserData/' + iniciator.id + '/tasks/global', '0')
    fs.writeFileSync('./data/UserData/' + iniciator.id + '/DATATRANSFERCONFIRMATION', 'ПОЛУЧЕНО ПРИ РЕГИСТРАЦИИ')





                        fs.writeFileSync(filepath + '/integers/exp', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
                        fs.writeFileSync(filepath + '/config/language', 'RU', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/config/theme', 'default', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
                        fs.writeFileSync(filepath + '/collections/userThemes', 'default', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/integers/lvl', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/badges/active', '0\n0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/config/badge', 'NULL', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
            fs.writeFileSync(filepath + '/config/badge2', 'NULL', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/integers/socialCredit', '1000', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/integers/voice', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/integers/SummarXP', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/integers/count', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });
      fs.writeFileSync(filepath + '/tasks/countlvl', '0', 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });

      fs.writeFileSync(filepath + '/themes/default', CurrentDate, 'utf8', (err) => {
              if (err) throw err;
              console.log('Данные были добавлены в конец файла!');
            });

            fs.writeFileSync(filepath + '/cardBadges/nothing', '')

      
      msg.reply('Успешно!').catch(err => {});
      }else
      {
        msg.reply('Хей! Ты уже зарегестрирован. Эта команда не для тебя!').catch(err => {});
      }
    }catch(err){
    console.log(err)}
}

module.exports = { startCommand }