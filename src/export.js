async function exportCmd(msg, fs, iniciator, isExist, getData, debug) {


  if (await isExist(iniciator.id) == true) {
    let obj = await getData(iniciator.id)
    debug(msg, '\n' + iniciator, obj)
    await fs.writeFile('./archives/' + iniciator + '.json', JSON.stringify(obj, null, '\t'), (error) => {
      if (error) throw error;
    });
      await msg.reply({ files: ['./archives/' + iniciator + '.json'], content: '✅Твои данные собраны и запакованы в легко-читаемый JSON✅\nУровень экспорта: МИНИМАЛЬНЫЙ'});
    // fs.unlinkSync('./archives/' + iniciator + '.json') ПОФИКСИТЬ
  }
}
module.exports = { exportCmd }

