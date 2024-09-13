"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🙂‍↔️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*𝙱𝙾𝚃 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴*  \n\n ' + "𝙱𝙰𝚁𝙰𝙺𝙰-𝙼𝙳 𝙸𝚂 𝙸𝚂 𝙲𝚄𝚁𝚁𝙴𝙽𝚃𝙻𝚈 𝚆𝙾𝚁𝙺𝙸𝙽𝙽𝙶 𝙶𝙾𝙾𝙳 𝙾𝙽 𝙰 𝚂𝙿𝙴𝙴𝙳.🙂‍↔️";
    let d = '                                                                           𝙷𝙴𝙰𝙻𝚃𝙷 𝚂𝚃𝙰𝚁𝚄𝚂✨';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/ce58cf8c538b1496fda33.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
