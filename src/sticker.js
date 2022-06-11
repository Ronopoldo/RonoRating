const { getUnpackedSettings } = require("http2")

async function stickerCommand(fs, msg, ctx, sharp, canvas, args, inciator, isExist, getData, putData, debug) {
    if (isExist(inciator))
{
  try{
    let obj = await getData(inciator)
    let stickerArray = obj.stickers

        if (Number(args[1]) <= 5)
        {
          if (args[2] == 'set' || args[2] == 'name' || args[2] == 'clear')
          {

            if (fs.existsSync('./Background/' + args[3]) || args[2] == 'clear')
            {
              if (stickerArray.includes(args[3]) || args[2] == 'clear')
              {


          let dataName = 'sticker' + Number(args[1]).toString()
          let pos = [0,0]
          let size = [200,200]
          let rot = 0

          if (obj.config[dataName] != undefined)
          {
          if (obj.config[dataName].position != undefined)
          {
            pos = obj.config[dataName].position
          }


          if (obj.config[dataName].rotation != undefined)
          {
            rot = obj.config[dataName].rotation
          }


          if (obj.config[dataName].size != undefined)
          {
            size = obj.config[dataName].size
          }
        }


          if (args[2] !== 'clear')
          {
          obj.config[dataName] =
          {
            "name" : args[3],
            "position": pos,
            "rotation": rot,
            "size": size
          }
        }else{
          obj.config[dataName] =
          {
            "name" : "undefined",
            "position": pos,
            "rotation": rot,
            "size": size
          }
        }
          msg.reply('Gotcha')

          putData(inciator, obj)
        }else{msg.reply('У тебя нету этой темы!').catch(err => {});}
      }else{msg.reply('Не найдено темы!').catch(err => {});}


        }









      if(args[2] == 'position' || args[2] == 'pos' || args[2] == 'place')
      {
        console.log(((Number(args[3]) > 750) && (Number(args[4]) < 200)))
        console.log((Number(args[3]) > 150) && (Number(args[4]) > 150) && (Number(args[4]) < 230) && (Number(args[3]) < 230))
        if ((((Number(args[3]) > 750) && (Number(args[4]) < 200)) == false) && ((Number(args[3]) > 150) && (Number(args[4]) > 150) && (Number(args[4]) < 230) && (Number(args[3]) < 230)) == false && Number(args[3]) > 0 && Number(args[3]) < 1024 && Number(args[4]) > 0 && Number(args[4]) < 1024)


{

        let dataName = 'sticker' + Number(args[1]).toString()
        let name = 'undefined'
        let size = [200,200]
        let rot = 0

        if (obj.config[dataName] != undefined)
        {
        if (obj.config[dataName].name != undefined)
        {
          name = obj.config[dataName].name
        }


        if (obj.config[dataName].rotation != undefined)
        {
          rot = obj.config[dataName].rotation
        }


        if (obj.config[dataName].size != undefined)
        {
          size = obj.config[dataName].size
        }
      }


        obj.config[dataName] =
        {
          "name" : name,
          "position": [Math.floor(Number(args[3])), Math.floor(Number(args[4]))],
          "rotation": rot,
          "size": size
        }

        msg.reply('Gotcha')

        putData(inciator, obj)
      }else{
        msg.reply('Хей. Похоже стикер залезает на значок или вылезает за границы! Это запрещено. Попробуй поставить другую позицию.')
      }

    }









    if(args[2] == 'rotation' || args[2] == 'rot' || args[2] == 'angle' || args[2] == 'axis')
    {
      if (Number(args[3]) != undefined || Number(args[3]) != NaN)
{
      let dataName = 'sticker' + Number(args[1]).toString()
      let name = 'undefined'
      let size = [200,200]
      let pos = [0,0]

      if (obj.config[dataName] != undefined)
      {
      if (obj.config[dataName].name != undefined)
      {
        name = obj.config[dataName].name
      }


      if (obj.config[dataName].position != undefined)
      {
        pos = obj.config[dataName].position
      }


      if (obj.config[dataName].size != undefined)
      {
        size = obj.config[dataName].size
      }
    }


      obj.config[dataName] =
      {
        "name" : name,
        "position": pos,
        "rotation": Number(args[3]),
        "size": size
      }

      msg.reply('Gotcha')

      putData(inciator, obj)
    }else{
      msg.reply('Что-то не так с аргументом. Убедись, что это число.')
    }
  }

      if(args[2] == 'rotation' || args[2] == 'rot' || args[2] == 'angle' || args[2] == 'axis')
    {
      if (Number(args[3]) != undefined || Number(args[3]) != NaN)
{
      let dataName = 'sticker' + Number(args[1]).toString()
      let name = 'undefined'
      let size = [200,200]
      let pos = [0,0]

      if (obj.config[dataName] != undefined)
      {
      if (obj.config[dataName].name != undefined)
      {
        name = obj.config[dataName].name
      }


      if (obj.config[dataName].position != undefined)
      {
        pos = obj.config[dataName].position
      }


      if (obj.config[dataName].size != undefined)
      {
        size = obj.config[dataName].size
      }
    }


      obj.config[dataName] =
      {
        "name" : name,
        "position": pos,
        "rotation": Number(args[3]),
        "size": size
      }

      msg.reply('Gotcha')

      putData(inciator, obj)
    }else{
      msg.reply('Что-то не так с аргументом. Убедись, что это число.')
    }
  }















  if(args[2] == 'size' || args[2] == 'siz')
  {
    if ((Number(args[3]) != undefined || Number(args[3]) != NaN))
{
  console.log(args[4])
  if(Number(args[3]) < 1000 && (Number(args[4]) < 1000 || args[4] == undefined || args[4] == NaN) && Number(args[3]) > 0  && (Number(args[4]) > 0 || args[4] == undefined || args[4] == NaN))
  {
    let dataName = 'sticker' + Number(args[1]).toString()
    let name = 'undefined'
    let rot = 0
    let pos = [0,0]

    if (obj.config[dataName] != undefined)
    {
    if (obj.config[dataName].name != undefined)
    {
      name = obj.config[dataName].name
    }


    if (obj.config[dataName].position != undefined)
    {
      pos = obj.config[dataName].position
    }


    if (obj.config[dataName].rotation != undefined)
    {
      rot = obj.config[dataName].rotation
    }
  }


  if (Number(args[4]) == undefined || Number(args[4]) == NaN)
  {
    args[4] = Number(args[3])
  }


    obj.config[dataName] =
    {
      "name" : name,
      "position": pos,
      "rotation": rot,
      "size": [Number(args[3]), Number(args[4])]
    }

    msg.reply('Gotcha')

    putData(inciator, obj)
  }else{
    msg.reply('Хей! Размер должен быть меньше 1000!')
  }
  }else{
    msg.reply('Что-то не так с аргументом. Убедись, что это число.')
  }
}


        }else{
          msg.reply('Хей! Максимально можно поставить всего 5 стикеров.')
        }


  }catch(err){console.log(err)}
  }
}

module.exports = { stickerCommand }