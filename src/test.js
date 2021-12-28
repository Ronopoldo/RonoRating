function test(msg, fs) {
  let userThemes = fs.readdirSync('./data/UserData/')
  console.log(userThemes)
}

module.exports = { test }