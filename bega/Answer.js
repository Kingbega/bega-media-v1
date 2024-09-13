const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




zokou({nomCom:"bot",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("yes I'm listening to you.")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'en' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Error when translating into French :', error);
      repondre('Error when translating into French');
    });
})
.catch(error => {
  console.error('Error requesting BrainShop :', error);
  repondre('Error requesting BrainShop');
});

  }catch(e){ repondre("oops an error : "+e)}
    
  
  });  



  zokou({ nomCom: "dalle", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please enter the necessary information to generate the image.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const image = arg.join(' ');
      const response = await axios.get(`http://api.maher-zubair.tech/ai/photoleap?q=${image}`);
      
      const data = response.data;
      let caption = '*powered by Baraka-Md*';
      
      if (data.status == 200) {
        // Utiliser les données retournées par le service
        const imageUrl = data.result;
        zk.sendMessage(dest, { image: { url: imageUrl }, caption: caption }, { quoted: ms });
      } else {
        repondre("Error during image generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request");
    }
  });
  
  zokou({ nomCom: "ai", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
      const response = await axios.get(`http://api.maher-zubair.tech/ai/chatgpt4?q=${question}`);
      
      const data = response.data;
      if (data) {
        repondre(data.result);
      } else {
        repondre("Error during response generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request.");
    }
  });


zokou({ nomCom: "gpt", reaction: "😇", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
      const response = await axios.get(`https://gpt4.giftedtech.workers.dev/?prompt=${question}`);
      
      const data = response.data;
      if (data) {
        repondre(data.result);
      } else {
        repondre("Error during response generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request.");
    }
  });

const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "generate",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0xd5693f, _0xc7214c, _0x4080a1) => {
  const {
    repondre: _0x1e3edf,
    arg: _0xfb9f90,
    ms: _0x2b08ed
  } = _0x4080a1;
  try {
    if (!_0xfb9f90 || _0xfb9f90.length === 0) {
      return _0x1e3edf("Please enter the necessary information to generate the image.");
    }
    const _0x59bb35 = _0xfb9f90.join(" ");
    const _0x127cbb = "https://samirxpikachuio.onrender.com/marjia?prompt=" + _0x59bb35;
    _0xc7214c.sendMessage(_0xd5693f, {
      'image': {
        'url': _0x127cbb
      },
      'caption': "*powered by BARAKA-MD*"
    }, {
      'quoted': _0x2b08ed
    });
  } catch (_0x247fd4) {
    console.error("Erreur:", _0x247fd4.message || "Une erreur s'est produite");
    _0x1e3edf("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "extract",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x4080ac, _0x1a9e2d, _0x4a7d66) => {
  const {
    repondre: _0x5e7c97,
    arg: _0x588900,
    ms: _0x42e5ab
  } = _0x4a7d66;
  try {
    if (!_0x588900 || _0x588900.length === 0) {
      return _0x5e7c97("Please insert the image url Baraka-Md will extract it for you.");
    }
    const _0x74d177 = _0x588900.join(" ");
    const _0x38dd8e = "https://www.samirxpikachu.run.place/extract/text?url=" + _0x74d177;
    _0x1a9e2d.sendMessage(_0x4080ac, {
      'image': {
        'url': _0x38dd8e
      },
      'caption': "*powered by BARAKA-MD*"
    }, {
      'quoted': _0x42e5ab
    });
  } catch (_0x812368) {
    console.error("Erreur:", _0x812368.message || "Une erreur s'est produite");
    _0x5e7c97("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "bing",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x445b33, _0x4f7745, _0x245979) => {
  const {
    repondre: _0x3baed4,
    arg: _0x2d283a,
    ms: _0x552c6c
  } = _0x245979;
  try {
    if (!_0x2d283a || _0x2d283a.length === 0) {
      return _0x3baed4("Please describe your image and Baraka Md will generate it.");
    }
    const _0x52d5af = _0x2d283a.join(" ");
    const _0xe7186 = "https://samirxpikachuio.onrender.com/flux?prompt=" + _0x52d5af;
    _0x4f7745.sendMessage(_0x445b33, {
      'image': {
        'url': _0xe7186
      },
      'caption': "*powered by BARAKA-MD*"
    }, {
      'quoted': _0x552c6c
    });
  } catch (_0x3784be) {
    console.error("Erreur:", _0x3784be.message || "Une erreur s'est produite");
    _0x3baed4("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "bing2",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0xbeca82, _0x519e6d, _0x124ac7) => {
  const {
    repondre: _0x16c607,
    arg: _0x30c86a,
    ms: _0x58be74
  } = _0x124ac7;
  try {
    if (!_0x30c86a || _0x30c86a.length === 0) {
      return _0x16c607("Please describe your image and Baraka Md will generate it.");
    }
    const _0x23c6e2 = _0x30c86a.join(" ");
    const _0x38847c = "https://samirxpikachuio.onrender.com/marjia?prompt=" + _0x23c6e2;
    _0x519e6d.sendMessage(_0xbeca82, {
      'image': {
        'url': _0x38847c
      },
      'caption': "*powered by BARAKA-MD*"
    }, {
      'quoted': _0x58be74
    });
  } catch (_0x18cbc4) {
    console.error("Erreur:", _0x18cbc4.message || "Une erreur s'est produite");
    _0x16c607("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "ilama",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x528f7f, _0xcad773, _0x40a06b) => {
  const {
    repondre: _0x64dfea,
    arg: _0x380eb1,
    ms: _0x37266e
  } = _0x40a06b;
  try {
    if (!_0x380eb1 || _0x380eb1.length === 0) {
      return _0x64dfea("Please describe your image and Baraka Md will generate it.");
    }
    const _0x497b56 = _0x380eb1.join(" ");
    const _0x44dad7 = "https://www.samirxpikachu.run.place/multi/Ml?prompt=" + _0x497b56;
    _0xcad773.sendMessage(_0x528f7f, {
      'image': {
        'url': _0x44dad7
      },
      'caption': "*powered by BARAKA-MD*"
    }, {
      'quoted': _0x37266e
    });
  } catch (_0x2c4000) {
    console.error("Erreur:", _0x2c4000.message || "Une erreur s'est produite");
    _0x64dfea("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "beautify",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x29c0b7, _0x25e9c0, _0x2b609a) => {
  const {
    repondre: _0x54668d,
    arg: _0x4fe6fa,
    ms: _0x3a34f0
  } = _0x2b609a;
  try {
    if (!_0x4fe6fa || _0x4fe6fa.length === 0) {
      return _0x54668d("Kindly enter a valid image url to beautify your image.");
    }
    const _0x199622 = _0x4fe6fa.join(" ");
    const _0x42fd3c = "https://samirxpikachuio.onrender.com/remacne?url=" + _0x199622;
    _0x25e9c0.sendMessage(_0x29c0b7, {
      'image': {
        'url': _0x42fd3c
      },
      'caption': "*powered by BARAKA-MD*"
    }, {
      'quoted': _0x3a34f0
    });
  } catch (_0x1cc21f) {
    console.error("Erreur:", _0x1cc21f.message || "Une erreur s'est produite");
    _0x54668d("Oops, an error occurred while processing your request");
  }
});
