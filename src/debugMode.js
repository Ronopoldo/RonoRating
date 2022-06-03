async function debugMode(msg, iniciator, isExist, getData, putData) {

  console.log(iniciator)
  if (await isExist(iniciator.id) == true) {
    let obj = await getData(iniciator.id)
    if (obj.debugMode == true)
    {
      obj.debugMode = false
      msg.reply('Режим откладки **__отключён__**!\nDebug mode **__disabled__**!')
    }else{
      obj.debugMode = true
      msg.reply('Режим откладки **__включён__**!\nDebug mode **__enabled__**!')
    }

    putData(iniciator.id, obj);
  }
}
module.exports = { debugMode }

