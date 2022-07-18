async function checker(client) {
  // let dataServer = await client.guilds.cache.get("968122042765422682");
  // let dataSubServer = await dataServer.channels.cache.get("998542566918197388");
  // let JSONcount = await dataSubServer.messages.cache.get("998544849357779024").content


  let JSONcount = await client.guilds.cache.get("968122042765422682").channels.cache.get("998542566918197388").messages.fetch("998544849357779024")
  console.log(JSONcount.content)
  let count = await JSON.parse(JSONcount).count
  console.log(count)
  return await count;
}
module.exports = { checker }