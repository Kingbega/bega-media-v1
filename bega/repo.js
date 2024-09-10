'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "repo",
  'alia': 'sc',
  'reaction': '✅',
  'nomFichier': __filename
}, async (_0x3b41c4, _0x169b6c, _0x53c185) => {
  const _0x2c7597 = await fetch("https://api.github.com/repos/Kingbega/BARAKA-MD-V1");
  const _0x31f399 = await _0x2c7597.json();
  if (_0x31f399) {
    const _0x2f5374 = {
      'stars': _0x31f399.stargazers_count,
      'forks': _0x31f399.forks_count,
      'update': _0x31f399.updated_at,
      'owner': _0x31f399.owner.login
    };
    const _0x187feb = new Date(_0x31f399.created_at).toLocaleDateString("en-GB");
    const _0x5bd4cd = "*HEY 👋 THIS IS BARAKA-MD-V1.*\n\n I'm A WhatsApp bot created by *©Baraka Bega*.\n\n[✨] *STARS:* - " + _0x2f5374.stars + "\n[🧧] *FORKS:* - " + _0x2f5374.forks + "\n[📅] *RELEASE DATE:* - " + _0x187feb + "\n[🗼] *REPO:* - " + _0x31f399.html_url + "\n[👨‍💻] *OWNER:* - *Baraka Bega*\n__________________________________\n *Made With* 🤍";
    await _0x169b6c.sendMessage(_0x3b41c4, {
      'image': {
        'url': "https://telegra.ph/file/73d05b8d0ae57de7b564a.jpg"
      },
      'caption': _0x5bd4cd
    });
  } else {
    console.log("Could not fetch data");
  }
});
