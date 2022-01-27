function jsCmd(msg, fs , client, args) {
if (msg.author.id == '544902183007813652') //if (msg.member.hasPermission("ADMINISTRATOR"))
  {
    const args = msg.content.slice(`/био`).split(/ +/);
    let executeCommand = (args.splice(1, args.length)).join(' ')
    eval(executeCommand)
  }
}
module.exports = { jsCmd }

