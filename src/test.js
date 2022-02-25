function test(msg, client, args, MessageActionRow, MessageButton, fs) {

  if (msg.author.id == '544902183007813652') {
  let userThemes = fs.readdirSync('./data/UserData/')
  console.log(userThemes)
  userThemes.forEach(element => 
    {

      if (fs.existsSync('./data/UserData/' + element + '/tasks'))
   {}else{
      fs.mkdirSync('./data/UserData/' + element + '/tasks', err => {console.log(err)})
   }
      fs.writeFileSync('./data/UserData/' + element + '/integers/count', '0')
    fs.writeFileSync('./data/UserData/' + element + '/tasks/countlvl', '0')
    console.log(element + ' written')
    }); 



     console.log(client.users.cache.find(user => user.id === '413362916327292933'))
  } //ПРОФИ :sunglasses: ====))
}
module.exports = { test }