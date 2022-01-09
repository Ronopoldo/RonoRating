function exportCmd(msg, fs) {
  const archiver = require('archiver');

  let output = fs.createWriteStream('./userArchives/' + msg.author.id + '.zip');
let archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    msg.reply({files: ['./userArchives/' + msg.author.id + '.zip'], content:'✅Твой архив с файлами готов!✅\nВыбран уровень экспорта: МИНИМАЛЬНЫЙ'})
    .then(() => fs.unlinkSync('./userArchives/' + msg.author.id + '.zip'))
    .catch(console.error);

});

archive.on('error', function(err){
    throw err;
});
archive.pipe(output);

archive.directory('./data/UserData/' + msg.author.id, false);

archive.finalize();

}
module.exports = { exportCmd }

