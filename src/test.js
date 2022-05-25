async function test(getData, msg) {
msg.channel.send('123')
  let userdata = await getData('544902183007813652')
  console.log(userdata.config.theme)
}
module.exports = { test }