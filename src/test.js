function test(msg, fs,args) {
  // let userThemes = fs.readdirSync('./data/UserData/')
  // console.log(userThemes)
  // userThemes.forEach(element => 
  //   {

  //     if (fs.existsSync('./data/UserData/' + element + '/cardBadges'))
  //  {}else{
  //     fs.mkdirSync('./data/UserData/' + element + '/cardBadges', err => {console.log(err)})
  //  }
  //     fs.writeFileSync('./data/UserData/' + element + '/cardBadges/nothing', '')
    
  //   console.log(element + ' written')
  //   }); 

msg.reply('cardBadges')

  // if (msg.author.id == '544902183007813652')
  // {

  //   let pingedUser = args[1]
  //     pingedUser = pingedUser.replace("<@",'')
  //     pingedUser = pingedUser.replace("!",'')
  //     pingedUser = pingedUser.replace(">",'')


  //   msg.reply(args[1] + args[2])
  //   fs.writeFileSync('./data/UserData/' + pingedUser + '/integers/voice', args[2])
  //   msg.reply(args[2] + ' гс для <@' + pingedUser + '>')
  // }else{msg.reply('КЫШ АТСЕДА')}
}
module.exports = { test }