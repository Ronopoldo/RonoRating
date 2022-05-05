async function test(getData, msg, isExist) {

console.log('VVVV')
  console.log(await isExist(msg.author.id))

}
module.exports = { test }