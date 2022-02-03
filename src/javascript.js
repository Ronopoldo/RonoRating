function jsCmd(msg, fs , client, args, MessageEmbed) {
if (msg.author.id == '544902183007813652') //if (msg.member.hasPermission("ADMINISTRATOR"))
  {
    const args = msg.content.slice(`/био`).split(/ +/);
    let executeCommand = (args.splice(1, args.length)).join(' ')
    try{
    eval(executeCommand)
    }catch(err)
    {
      msg.reply(err.toString())
    }
  }
}
module.exports = { jsCmd }

