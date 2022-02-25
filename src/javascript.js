function jsCmd(msg, fs , client, args, MessageEmbed, commandcontent, iniciator) {
if (iniciator == '544902183007813652') //if (msg.member.hasPermission("ADMINISTRATOR"))
  {
    console.log('123')
    let interaction = msg
    let i = msg
    const args = commandcontent.slice(`/био`).split(/ +/);
    let executeCommand = (args.splice(1, args.length)).join(' ')
    try{
      console.log(executeCommand)
    eval(executeCommand)
    }catch(err)
    {
      msg.reply(err.toString() + '\n\nИсходная команда: `' + commandcontent + '`')
    }
  }else{
    msg.reply("НЕДОСТАТОЧНО ПРАВ!\nОшибка: ```{\n   name: 'DiscordAPIError',\n   message: 'Missing Permissions',\n   method: 'patch',\n   path: '...',\n   code: 50013,\n   httpStatus: 403\n}```")
  }
}
module.exports = { jsCmd }

