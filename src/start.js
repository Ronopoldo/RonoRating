async function startCommand(msg, iniciator, isExist, putData, debug, fs, client) {
  if (await isExist(iniciator.id) == false)
  {
    let dbsetup = JSON.parse(fs.readFileSync('./data/dbsetup'))
    const managment = client.guilds.cache.get("968122042765422682");
    const db = managment.channels.cache.get("968123915920617472");
    const log = managment.channels.cache.get("978739540736999444");
    let obj = JSON.parse(fs.readFileSync('./data/blankData.json'))
    obj.user = iniciator.id
    obj.active.daily.exp = new Date(new Date().toLocaleDateString("en-US", {timeZone: "Europe/Moscow"})).toISOString() + ' 0'
    console.log(obj)
    
    log.send('Создаана учётка ' + iniciator.id)
    await fs.writeFile('./data/dbsetupbackup.json', JSON.stringify(dbsetup, null, '\t'), (error) => {
      if (error) throw error;
    });

    await log.send({ files: ['./data/dbsetupbackup.json']})

    db.send(JSON.stringify(obj)).then(dataMsg => {
      dbsetup[iniciator.id] = dataMsg.id
      fs.writeFileSync('./data/dbsetup', JSON.stringify(dbsetup))
      
    })
    msg.reply('**__Добро пожаловать в RonoRating__**\nВаша учётная запись успешно создана! Проверьте свою карточку при помощи `/card`\nА про команды подробнее Вы сможете прочитать в <#647517557615755287>\nЖелаем удачи\n-RonoRating')
    
  }else{
    msg.reply('Похоже, что твоя учётная запись уже зарегистрирована. Если ты считаешь, что нет, то напиши в службу поддержки!')
  }


}

module.exports = { startCommand }