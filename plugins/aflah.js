/* Moded by Insane boy
reedit by saidali
copy അടിക്കുമ്പോൾ പേര് മാറ്റരുത് ഒരുപാട് ദിവസത്തെ കഷ്ടപ്പാട് ആണ്

Contact us :

https://chat.whatsapp.com/DzcfAcaAZoA5f1X4JT4eEo
*/

const Asena = require('../events');

const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const Config = require('../config');

const ll ="*Need some Word*"

const Ln = "*▷🤖nigalk avashiyam ulla perukal cherkkan◁* "

 const code = "*╔════◉ CAMANDS ◉════╗*\n\n            *❖═List═❖*\n \n*🔮.quby1    ❴text❵*\n*🔮.quby2    ❴text❵*\n*🔮.quby3    ❴text❵*\n*🔮.quby4    ❴text❵*\n*🔮.cat1    ❴text❵*\n*🔮.cat2    ❴text❵*\n*🔮.cat3    ❴text❵*\n*🔮.cat4    ❴text❵*\n*🔮.doggy1    ❴text❵*\n*🔮.doggy2    ❴text❵*\n*🔮.doggy3    ❴text❵*\n*🔮.doggy4    ❴text❵*\n*🔮.doggy5   ❴text❵*\n*🔮.doggy6    ❴text❵*\n*🔮.trollikka1    ❴text❵*\n*🔮.trollikka2    ❴text❵*\n*🔮.trollikka3    ❴text❵*\n*🔮.trollikka4    ❴text❵*\n*🔮.aah    ❴text❵*\n\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷ мoded вy: Aflah & SAIDALI*\n*▷Specιal тнanĸѕ тo ιnѕane вoy*"

if (Config.WORKTYPE == 'public') {

    

      Asena.addCommand({pattern: 'trollpack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(

  

      message.jid,code, MessageType.text);

  

  }));

    
Asena.addCommand({ pattern: 'doggy5 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f5277ae7383f852196e8c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.AFN}) 

    }));

Asena.addCommand({ pattern: 'doggy6 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/80c57bf5ac6c0fd0a1ca9.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.AFN})

    }));

Asena.addCommand({ pattern: 'aah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c34d400e0a937ee12a3f7.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:Config.AFN})

    }));

   Asena.addCommand({ pattern: 'quby1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/rIz7yEg.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'quby2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/rrfPeuq.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({ pattern: 'quby3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/l7ZCF3d.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'quby4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/3ohqPtW.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

   Asena.addCommand({ pattern: 'cat1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/7eDuJS9.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'cat2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/4t1sZoF.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({ pattern: 'cat3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/olnvBj7.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'cat4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/dTQ43sU.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
      Asena.addCommand({ pattern: 'trollikka1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/03J0RQA.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'trollikka2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/03J0RQA.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({ pattern: 'trollikka3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/oIdcRPg.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'trollikka4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/HRLF2Ri.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

   Asena.addCommand({ pattern: 'doggy1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/gMOz1st.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'doggy2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/9R5jjVQ.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({ pattern: 'doggy3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/V0Rdfrl.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
   Asena.addCommand({ pattern: 'doggy4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/6Bog4Xz.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   
}
