function checker(msg, client) {
  
let a = msg.channel.messages.fetch({limit: 2})
.then(messageMappings => {
let messages = Array.from(messageMappings.values());
let previousMessage = messages[1];
  // console.log(previousMessage)
return previousMessage;
})

.catch(error => Logger.log("error", "Error fetching messages in channel"))

while (a == undefined)
  {
    console.log('wait')
  }


  
  console.log(a)
}
module.exports = { checker }