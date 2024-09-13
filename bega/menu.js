const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x4e1acc, _0x5aca82, _0x51c166) => {
  let {
    ms: _0x46e3a0,
    repondre: _0x3155c9,
    prefixe: _0x16fbbd,
    nomAuteurMessage: _0x3bd0f3,
    mybotpic: _0x593072
  } = _0x51c166;
  let {
    cm: _0x5318a1
  } = require(__dirname + "/../framework//zokou");
  var _0x5a90b3 = {};
  var _0x51533c = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x51533c = "private";
  }
  _0x5318a1.map(async (_0x2f376e, _0x411b71) => {
    if (!_0x5a90b3[_0x2f376e.categorie]) {
      _0x5a90b3[_0x2f376e.categorie] = [];
    }
    _0x5a90b3[_0x2f376e.categorie].push(_0x2f376e.nomCom);
  });
  moment.tz.setDefault("EAT");
  const _0x5d14ea = moment().format("HH:mm:ss");
  let _0x24e40f = "\n╭─────𝑩𝑨𝑹𝑨𝑲𝑨-𝑴𝑫-𝑽1──────❂\n┊❂╭─────────────────❂\n┊✺┊ *User* : " + s.OWNER_NAME + "\n┊✺┊ *Mode* : " + _0x51533c + "\n┊✺┊ *Commands* : 208\n┊✺┊ *Time* : " + _0x5d14ea + " \n┊✺┊ *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n┊❂╰─────────────────❂\n╰───────────────────❂ \n\n";
  let _0x51b11a = " \n*┊¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*\n";
  for (const _0x33870a in _0x5a90b3) {
    _0x51b11a += "*╭────❂* *" + _0x33870a + "* *❂*";
    for (const _0x24b14d of _0x5a90b3[_0x33870a]) {
      _0x51b11a += " \n*┊* " + _0x24b14d;
    }
    _0x51b11a += "\n*╰═════════════❂* \n";
  }
  _0x51b11a += "\n \n *𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑩𝑨𝑹𝑨𝑲𝑨 𝑪𝑯𝑨𝑪𝑯𝑨 𝑩𝑬𝑮𝑨*\n*╰═════════════════════════❂*\n";
  var _0x30785c = _0x593072();
  if (_0x30785c.match(/\.(mp4|gif)$/i)) {
    try {
      _0x5aca82.sendMessage(_0x4e1acc, {
        'video': {
          'url': _0x30785c
        },
        'caption': _0x24e40f + _0x51b11a,
        'footer': "Je suis *Baraka-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x46e3a0
      });
    } catch (_0x4e6551) {
      console.log("🥵🥵 Menu erreur " + _0x4e6551);
      _0x3155c9("🥵🥵 Menu erreur " + _0x4e6551);
    }
  } else {
    if (_0x30785c.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x5aca82.sendMessage(_0x4e1acc, {
          'image': {
            'url': _0x30785c
          },
          'caption': _0x24e40f + _0x51b11a,
          'footer': "*Baraka-Tech*"
        }, {
          'quoted': _0x46e3a0
        });
      } catch (_0x4ef99e) {
        console.log("🥵🥵 Menu erreur " + _0x4ef99e);
        _0x3155c9("🥵🥵 Menu erreur " + _0x4ef99e);
      }
    } else {
      _0x3155c9(_0x24e40f + _0x51b11a);
    }
  }
});
