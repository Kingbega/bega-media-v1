'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "test",
  'reaction': "🙂‍↔️",
  'nomFichier': __filename
}, async (_0x28d107, _0x4b75ef, _0xc0b5a3) => {
  console.log("Commande saisie !!!s");
  await _0x4b75ef.sendMessage(_0x28d107, {
    'video': {
      'url': "https://telegra.ph/file/ce58cf8c538b1496fda33.mp4"
    },
    'caption': "*𝙱𝙾𝚃 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴* \n\n 𝙱𝙰𝚁𝙰𝙺𝙰-𝙼𝙳 𝙸𝚂 𝙸𝚂 𝙲𝚄𝚁𝚁𝙴𝙽𝚃𝙻𝚈 𝚆𝙾𝚁𝙺𝙸𝙽𝙽𝙶 𝙶𝙾𝙾𝙳 𝙾𝙽 𝙰 𝚂𝙿𝙴𝙴𝙳.🙂‍↔️"
  });
});
console.log("mon test");
