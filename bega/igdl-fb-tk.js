const {
  mediafireDl
} = require("../framework/dl/Function");
const {
  zokou
} = require("../framework/zokou");
const getFBInfo = require("@xaviabot/fb-downloader");
const {
  default: axios
} = require("axios");
const {
  ndown
} = require('nayan-media-downloader');
zokou({
  'nomCom': "story",
  'categorie': 'Download',
  'aliases': ['igstory', "instastory", "storydl"]
}, async (_0x2af4f4, _0x34586c, _0x41e3b1) => {
  const {
    ms: _0x7de77d,
    repondre: _0x33f492,
    arg: _0x4ff792
  } = _0x41e3b1;
  if (!_0x4ff792 || !_0x4ff792.length) {
    _0x33f492("Please provide an Instagram story link.");
    return;
  }
  let _0xb5c857 = _0x4ff792.join(" ");
  if (!_0xb5c857.startsWith("https://www.instagram.com/stories/")) {
    _0x33f492("Insert a link for Instagram storie!");
    return;
  }
  try {
    const _0x47a95a = await axios.get("https://api-aswin-sparky.koyeb.app/api/downloader/story?url=" + encodeURIComponent(_0xb5c857));
    const _0x46b50b = _0x47a95a.data;
    if (_0x46b50b.status && _0x46b50b.data.length > 0x0) {
      const _0x269704 = _0x46b50b.data[0x0];
      const _0xcbf2c6 = _0x269704.url;
      if (_0x269704.type === "image") {
        await _0x34586c.sendMessage(_0x2af4f4, {
          'image': {
            'url': _0xcbf2c6
          },
          'caption': "_╰►IG-STORY IMAGE DOWNLOADED BY_ *BARAKA-MD*"
        }, _0x7de77d);
      } else if (_0x269704.type === "video") {
        await _0x34586c.sendMessage(_0x2af4f4, {
          'video': {
            'url': _0xcbf2c6
          },
          'caption': "_╰►IG-STORY VIDEO DOWNLOADED BY_ *BARAKA-MD*"
        }, _0x7de77d);
      } else {
        _0x33f492("Unsupported media type.");
      }
    } else {
      _0x33f492("No media found at the provided Instagram story link. Please make sure the link is correct.");
    }
  } catch (_0x199053) {
    console.error("An error occurred while downloading the story:", _0x199053);
    _0x33f492("An error occurred while downloading the story: " + _0x199053.message + ". Please ensure the link is correct and points to public media.");
  }
});
zokou({
  'nomCom': "insta",
  'categorie': "Download",
  'aliases': ['ig', "igdl", "instagram"]
}, async (_0x427594, _0x128b0a, _0x107ed1) => {
  const {
    ms: _0x321bff,
    repondre: _0x2f837d,
    arg: _0x42ed2b
  } = _0x107ed1;
  if (!_0x42ed2b || !_0x42ed2b.length) {
    _0x2f837d("Please insert an Instagram link.");
    return;
  }
  let _0x40df98 = _0x42ed2b.join(" ");
  const _0xe65d14 = _0x40df98.startsWith("https://www.instagram.com/reel");
  const _0x5bc55f = _0x40df98.startsWith("https://www.instagram.com/p");
  try {
    const _0x365292 = await ndown(_0x40df98);
    console.log("Full ndown response:", JSON.stringify(_0x365292, null, 0x2));
    if (_0xe65d14) {
      if (_0x365292.data && _0x365292.data.length > 0x0) {
        const _0x4bfaad = _0x365292.data[0x0];
        const _0x409d49 = _0x4bfaad.url;
        await _0x128b0a.sendMessage(_0x427594, {
          'video': {
            'url': _0x409d49
          },
          'caption': "_╰►VIDEO DOWNLOADED BY_ *BARAKA-MD*"
        }, _0x321bff);
      } else {
        _0x2f837d("No video found at the provided Instagram Reel link. Please make sure the link is correct.");
      }
    } else {
      if (_0x5bc55f) {
        if (_0x365292.data && _0x365292.data.length > 0x0) {
          const _0x531c5c = _0x365292.data[0x0];
          const _0x3ed247 = _0x531c5c.url;
          await _0x128b0a.sendMessage(_0x427594, {
            'image': {
              'url': _0x3ed247
            },
            'caption': "_╰►IMAGE DOWNLOADED BY_ *FLASH-MD*"
          }, _0x321bff);
        } else {
          _0x2f837d("No image found at the provided Instagram post link. Please make sure the link is correct.");
        }
      } else {
        _0x2f837d("The provided link does not match the expected format for Instagram Reel or post.");
      }
    }
  } catch (_0x4881ab) {
    console.error("An error occurred while downloading:", _0x4881ab);
    _0x2f837d("An error occurred while downloading the media: " + _0x4881ab.message + ". Please ensure the link is correct and points to public media.");
  }
});
zokou({
  'nomCom': "gitclone",
  'categorie': "Download"
}, async (_0xe98cdd, _0xc64ac3, _0x5ad7d4) => {
  const {
    ms: _0x530602,
    repondre: _0x35ab3c,
    arg: _0x3c7b2a
  } = _0x5ad7d4;
  const _0x407780 = _0x3c7b2a.join(" ");
  if (!_0x407780) {
    return _0x35ab3c("Please provide a valid github link.");
  }
  if (!_0x407780.includes("github.com")) {
    return _0x35ab3c("Is that a GitHub repo link ?!");
  }
  let [, _0x33ccdf, _0x3f59dd] = _0x407780.match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
  _0x3f59dd = _0x3f59dd.replace(/.git$/, '');
  let _0x5327cc = "https://api.github.com/repos/" + _0x33ccdf + '/' + _0x3f59dd + '/zipball';
  let _0x4b3d32 = (await fetch(_0x5327cc, {
    'method': 'HEAD'
  })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
  _0xc64ac3.sendMessage(_0xe98cdd, {
    'document': {
      'url': _0x5327cc
    },
    'fileName': _0x4b3d32 + '.zip',
    'mimetype': "application/zip"
  }, {
    'quoted': _0x530602
  })['catch'](_0x1956a9 => _0x35ab3c("error"));
});
zokou({
  'nomCom': "math",
  'categorie': "Finance"
}, async (_0xf3a067, _0x3071c5, _0x245f4e) => {
  const {
    ms: _0x5cb1f4,
    repondre: _0x207e24,
    arg: _0x991204
  } = _0x245f4e;
  const _0x513081 = _0x991204.join(" ").replace(/\s+/g, '');
  if (!/^[0-9+\-*/().]+$/.test(_0x513081)) {
    return _0x207e24("Invalid input. Please use a valid format like '1+1' or '2*3+5/2'.");
  }
  try {
    const _0x54e619 = eval(_0x513081);
    if (!isFinite(_0x54e619)) {
      return _0x207e24("Error: Division by zero or other invalid operation.");
    }
    _0x3071c5.sendMessage(_0xf3a067, {
      'text': "The result is: " + _0x54e619
    }, {
      'quoted': _0x5cb1f4
    })['catch'](_0x5976c3 => _0x207e24("Error sending the result"));
  } catch (_0x1c11b8) {
    return _0x207e24("Invalid expression. Please ensure you are using valid mathematical operators.");
  }
});
zokou({
  'nomCom': "tiktok",
  'categorie': "Download",
  'aliases': ["tik", "tok", 'tikdl']
}, async (_0x62f136, _0x4816a1, _0xc446) => {
  const {
    ms: _0x2b75e3,
    repondre: _0x4fd6ee,
    arg: _0x2219a6
  } = _0xc446;
  const _0x1c238f = _0x2219a6.join(" ");
  if (!_0x1c238f) {
    return _0x4fd6ee("Please insert a TikTok video link!");
  }
  try {
    const _0x31debb = await fetch("https://api.prabath-md.tech/api/tiktokdl?url=" + encodeURIComponent(_0x1c238f));
    const _0x5d9495 = await _0x31debb.json();
    if (!_0x5d9495.data || !_0x5d9495.data.no_wm) {
      return _0x4fd6ee("Failed to retrieve video. Please check the link and try again.");
    }
    await _0x4fd6ee("A moment, *FLASH-MD* is downloading that...");
    const _0x404ffc = _0x5d9495.data.no_wm;
    await _0x4816a1.sendMessage(_0x62f136, {
      'video': {
        'url': _0x404ffc
      },
      'caption': "╰►𝐇𝐞𝐫𝐞 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐓𝐢𝐤𝐓𝐨𝐤 𝐕𝐢𝐝𝐞𝐨!\n𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐝 𝐛𝐲 *BARAKA-MD*",
      'gifPlayback': false
    }, {
      'quoted': _0x2b75e3
    });
  } catch (_0x3b5816) {
    console.error(_0x3b5816);
    await _0x4fd6ee("An error occurred while processing the request. Please try again later.");
  }
});
zokou({
  'nomCom': 'video-dl',
  'categorie': 'Download'
}, async (_0x38b960, _0x46a4d1, _0xe6cfd6) => {
  const {
    ms: _0x35b21c,
    repondre: _0x38c899,
    arg: _0x31aa8a
  } = _0xe6cfd6;
  let _0x12cc80 = _0x31aa8a.join(" ");
  if (!_0x31aa8a[0x0]) {
    _0x38c899("Give me any social media video link!");
    return;
  }
  try {
    const _0x39757a = await fetch("https://www.noobs-api.000.pe/dipto/alldl?url=" + _0x12cc80);
    const _0x84c725 = await _0x39757a.json();
    const _0xa3226 = _0x84c725.result;
    _0x46a4d1.sendMessage(_0x38b960, {
      'video': {
        'url': _0xa3226
      },
      'caption': "╰►𝐇𝐞𝐫𝐞 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨!\n𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐝 𝐛𝐲 *BARAKA-MD*",
      'gifPlayback': false
    }, {
      'quoted': _0x35b21c
    });
  } catch (_0x5d8532) {
    _0x38c899("A fatal error has occured... \n " + _0x5d8532);
  }
});
zokou({
  'nomCom': 'mediafire',
  'categorie': 'Download'
}, async (_0x59e448, _0x519162, _0xed7f4f) => {
  const {
    ms: _0x24a2a7,
    repondre: _0x3411ba,
    arg: _0x74a001
  } = _0xed7f4f;
  let _0x2236b9 = _0x74a001.join(" ");
  if (!_0x74a001[0x0]) {
    _0x3411ba("Provide mediafire link\n\nmediafire <valid mediafire link>");
    return;
  }
  ;
  try {
    const _0x3a8685 = await mediafireDl(_0x2236b9);
    if (_0x3a8685[0x0].size.split('MB')[0x0] >= 0x64) {
      _0x3411ba("File tooooo big");
    }
    await _0x519162.sendMessage(_0x59e448, {
      'document': {
        'url': _0x3a8685[0x0].link
      },
      'fileName': _0x3a8685[0x0].nama,
      'mimetype': _0x3a8685[0x0].mime,
      'caption': "*Downloaded by BARAKA-MD:* " + _0x3a8685[0x0].nama
    }, {
      'quoted': _0x24a2a7
    });
  } catch (_0x2600fe) {
    _0x3411ba("I am unable to download the file. \n " + _0x2600fe);
  }
});
zokou({
  'nomCom': 'fb',
  'categorie': "Download",
  'reaction': "📽️",
  'aliases': ["fbdl", "facebook", "fb1"]
}, async (_0x26e87d, _0x2275d6, _0x1250d5) => {
  const {
    repondre: _0x2c7375,
    ms: _0x457e0c,
    arg: _0x1c585b
  } = _0x1250d5;
  if (!_0x1c585b[0x0]) {
    _0x2c7375("Insert a public facebook video link!");
    return;
  }
  const _0x5785a0 = _0x1c585b.join(" ");
  try {
    getFBInfo(_0x5785a0).then(_0x464227 => {
      let _0x12caae = "\n        *Title:* " + _0x464227.title + "\n\n        *Direct Link:* " + _0x464227.url + "\n      ";
      _0x2275d6.sendMessage(_0x26e87d, {
        'image': {
          'url': _0x464227.thumbnail
        },
        'caption': _0x12caae
      }, {
        'quoted': _0x457e0c
      });
      _0x2275d6.sendMessage(_0x26e87d, {
        'video': {
          'url': _0x464227.hd
        },
        'caption': "_╰►FB VIDEO DOWNLOADED BY_ *BARAKA-MD*"
      }, {
        'quoted': _0x457e0c
      });
    })["catch"](_0x4f9333 => {
      console.log('Error:', _0x4f9333);
      _0x2c7375("try fb2 on this link");
    });
  } catch (_0x54d83f) {
    console.error("An error occurred while *BARAKA-MD* was downloading your media:", _0x54d83f);
    _0x2c7375("An error occurred while downloading your media.", _0x54d83f);
  }
});
zokou({
  'nomCom': "fb2",
  'categorie': "Download",
  'reaction': "📽️",
  'aliases': ['fbdl2', "fb2", "facebook2"]
}, async (_0x144532, _0x148ee8, _0x25a9da) => {
  const {
    repondre: _0x1828f1,
    ms: _0x4a4a6a,
    arg: _0x51d9ed
  } = _0x25a9da;
  if (!_0x51d9ed[0x0]) {
    _0x1828f1("Insert a public facebook video link!");
    return;
  }
  const _0x461a30 = _0x51d9ed.join(" ");
  try {
    getFBInfo(_0x461a30).then(_0xd5cad9 => {
      let _0x6d9f0b = "\n        *Title:* " + _0xd5cad9.title + "\n\n        *Direct Link:* " + _0xd5cad9.url + "\n      ";
      _0x148ee8.sendMessage(_0x144532, {
        'image': {
          'url': _0xd5cad9.thumbnail
        },
        'caption': _0x6d9f0b
      }, {
        'quoted': _0x4a4a6a
      });
      _0x148ee8.sendMessage(_0x144532, {
        'video': {
          'url': _0xd5cad9.sd
        },
        'caption': "_╰►FACEBOOK VIDEO DOWNLOADED BY_ *BARAKA-MD*"
      }, {
        'quoted': _0x4a4a6a
      });
    })["catch"](_0x28c0ea => {
      console.log("Error:", _0x28c0ea);
      _0x1828f1(_0x28c0ea);
    });
  } catch (_0x45b8c7) {
    console.error("An error occurred while Baraka-Md was downloading your media:", _0x45b8c7);
    _0x1828f1("An error occurred while Baraka-Md was downloading your media.", _0x45b8c7);
  }
});
zokou({
  'nomCom': "xvid",
  'categorie': "Download",
  'aliases': ["xxx", "porn", "xxxnx"]
}, async (_0x1d733c, _0x1dc12c, _0x412a75) => {
  const {
    ms: _0x57a0e9,
    repondre: _0x495960,
    arg: _0x513e24
  } = _0x412a75;
  let _0x2f7b0f = _0x513e24.join(" ");
  const _0x112c4b = {
    'xvid': "https://example.com/xvid",
    'porn': "https://example.com/porn",
    'xxxnx': "https://example.com/xxxnx"
  };
  if (_0x112c4b[_0x2f7b0f]) {
    _0x2f7b0f = _0x112c4b[_0x2f7b0f];
  }
  if (!_0x513e24[0x0]) {
    _0x495960("Please insert an *X Video Link* for *BARAKA-MD* to download");
    return;
  }
  try {
    const _0x93fc79 = await fetch('https://api.prabath-md.tech/api/xvdl?url=' + encodeURIComponent(_0x2f7b0f));
    const _0x215fdd = await _0x93fc79.json();
    if (_0x215fdd && _0x215fdd.data && _0x215fdd.data.download) {
      const _0x5be68e = _0x215fdd.data.download;
      _0x1dc12c.sendMessage(_0x1d733c, {
        'video': {
          'url': _0x5be68e
        },
        'caption': "Here is your 18+ Video.\n_╰►DOWNLOADED BY_ *BARAKA-MD*",
        'gifPlayback': false
      }, {
        'quoted': _0x57a0e9
      });
    } else {
      _0x495960("No downloadable link found for the provided URL.");
    }
  } catch (_0x4528e2) {
    _0x495960("I am unable to download your media.\n" + _0x4528e2.message);
  }
});
zokou({
  'nomCom': "gdrive",
  'categorie': 'Download'
}, async (_0x57a607, _0x130367, _0x2e4136) => {
  const {
    ms: _0x4e04bd,
    repondre: _0x3922ef,
    arg: _0x2580ea
  } = _0x2e4136;
  const _0xcd0660 = _0x2580ea.join(" ");
  if (!_0xcd0660) {
    return _0x3922ef("Please insert a Google Drive link!");
  }
  if (!_0xcd0660.includes('drive.google.com')) {
    return _0x3922ef("That is not a Google Drive link!");
  }
  try {
    const _0x6db48e = await fetch("https://api-smd.onrender.com/api/gdrive?url=" + _0xcd0660);
    if (!_0x6db48e.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x5d51f9 = await _0x6db48e.json();
    await _0x3922ef("*BARAKA-MD* is downloading media from Google Drive. Please wait...");
    if (_0x5d51f9 && _0x5d51f9.downloadUrl) {
      const _0x220152 = _0x5d51f9.downloadUrl;
      const _0x517f02 = _0x5d51f9.mimetype.split('/')[0x0];
      if (_0x517f02 === "audio" || _0x517f02 === "video" || _0x517f02 === "image") {
        await _0x130367.sendMessage(_0x57a607, {
          [_0x517f02]: {
            'url': _0x220152
          },
          'caption': '*' + _0x5d51f9.fileName + "*\n\n> *POWERED BY FLASH-MD*"
        }, {
          'quoted': _0x4e04bd
        });
      } else {
        const _0x17bad4 = _0x5d51f9.fileName.split('.').pop();
        await _0x130367.sendMessage(_0x57a607, {
          'document': {
            'url': _0x220152,
            'filename': _0x5d51f9.fileName
          },
          'caption': _0x17bad4.toUpperCase() + ": *" + _0x5d51f9.fileName + "*\n\n> *POWERED BY FLASH-MD*"
        }, {
          'quoted': _0x4e04bd
        });
      }
    } else {
      await _0x3922ef("Failed to retrieve the media. Please try again later.");
    }
  } catch (_0x558608) {
    console.error("Error fetching media:", _0x558608);
    await _0x3922ef("Failed to retrieve the media. Please try again later.");
  }
});
zokou({
  'nomCom': "element",
  'categorie': 'User',
  'aliases': ["chem", "study"]
}, async (_0x45d8d6, _0xf2a400, _0x316a2d) => {
  const {
    ms: _0x34cb81,
    repondre: _0x240f38,
    arg: _0x263991
  } = _0x316a2d;
  let _0x5ce117 = _0x263991.join(" ");
  if (!_0x5ce117) {
    return _0x240f38("Please specify an element name or symbol.");
  }
  try {
    const _0x41742d = "https://api.popcat.xyz/periodic-table?element=" + encodeURIComponent(_0x5ce117);
    const _0x4ea517 = await fetch(_0x41742d);
    const _0x502519 = await _0x4ea517.json();
    if (_0x502519 && !_0x502519.error) {
      const _0x2c5db7 = ("\n                Element Name: " + _0x502519.name + "\n\n                Element Symbol: " + _0x502519.symbol + "\n\n                Atomic Number: " + _0x502519.atomic_number + "\n\n                Atomic Mass: " + _0x502519.atomic_mass + "\n\n                Period: " + _0x502519.period + "\n\n                Phase: " + _0x502519.phase + "\n\n                Discovered By: " + _0x502519.discovered_by + "\n            ").trim();
      await _0x240f38("A moment, BARAKA-MD is sending your results");
      if (_0x502519.image) {
        await _0xf2a400.sendMessage(_0x45d8d6, {
          'image': {
            'url': _0x502519.image
          },
          'caption': _0x2c5db7
        }, {
          'quoted': _0x34cb81
        });
      }
    } else {
      _0x240f38("Element not found or error fetching data.");
    }
  } catch (_0x1254b8) {
    console.error("Error fetching element data:", _0x1254b8.message);
    _0x240f38("Error fetching element data.");
  }
});
zokou({
  'nomCom': "npm",
  'categorie': 'Search',
  'aliases': ['npmstalk', 'npstalk', "pmstalk"]
}, async (_0xbde2f6, _0x19a172, _0x21b91b) => {
  const {
    ms: _0x5ef25f,
    repondre: _0x1103bb,
    arg: _0x36ee25
  } = _0x21b91b;
  const _0x2d1eac = _0x36ee25.join(" ");
  if (!_0x2d1eac) {
    return _0x1103bb("Please provide a package name to search for.");
  }
  try {
    const _0x2c80f0 = "https://api.prabath-md.tech/api/npmsearch?q=" + encodeURIComponent(_0x2d1eac);
    const _0x4fbe6c = await axios.get(_0x2c80f0);
    const _0x2ecb21 = _0x4fbe6c.data;
    if (_0x2ecb21 && _0x2ecb21.data && _0x2ecb21.data.data) {
      const {
        name: _0x1a065d,
        description: _0xa0741,
        version: _0x1f8f89,
        packageLink: _0x3ca668,
        downloadLink: _0x42c30e,
        publishedDate: _0x669dfa,
        owner: _0x4dde79,
        homepage: _0x2cd9f9,
        license: _0x5e5a75,
        readme: _0xfb2d79
      } = _0x2ecb21.data.data;
      const _0x50bbfd = "*FLASH-MD NPM STALKER*:\n\n" + ("*Name:* " + _0x1a065d + "\n*Owner:* " + _0x4dde79 + "\n*Version:* " + _0x1f8f89 + "\n") + ("*Published:* " + _0x669dfa + "\n*Description:* " + _0xa0741 + "\n") + ("*Package Link:* " + _0x3ca668 + "\n*Download Link:* " + _0x42c30e + "\n") + ("*Homepage:* " + _0x2cd9f9 + "\n*License:* " + _0x5e5a75 + "\n") + ("*Readme:* " + (_0xfb2d79 || 'N/A') + "\n\n> POWERED BY © FRANCE KING");
      await _0x19a172.sendMessage(_0xbde2f6, {
        'text': _0x50bbfd
      }, {
        'quoted': _0x5ef25f
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x43e5ec) {
    console.error("Error getting API response:", _0x43e5ec.message);
    await _0x1103bb("Error getting response from the API.");
  }
});
zokou({
  'nomCom': "image-dl",
  'categorie': "Download"
}, async (_0x3ab5cb, _0x2b4b7f, _0x396684) => {
  const {
    ms: _0x5c44e4,
    repondre: _0x3bbf4f,
    arg: _0x508c46
  } = _0x396684;
  let _0x1fbd3d = _0x508c46.join(" ");
  if (!_0x1fbd3d) {
    _0x3bbf4f("Give me any social media image link!");
    return;
  }
  try {
    const _0x5cf077 = await fetch('https://www.noobs-api.000.pe/dipto/alldl?url=' + _0x1fbd3d);
    if (!_0x5cf077.ok) {
      _0x3bbf4f("Failed to fetch image: " + _0x5cf077.statusText);
      return;
    }
    const _0x4b465e = _0x5cf077.headers.get("content-type");
    if (!_0x4b465e || !_0x4b465e.includes('application/json')) {
      _0x3bbf4f("Received non-JSON response from the server.");
      return;
    }
    const _0x59a673 = await _0x5cf077.json();
    const _0x2c5344 = _0x59a673.result;
    if (!_0x2c5344) {
      _0x3bbf4f("Failed to retrieve the image link. Please check the provided URL.");
      return;
    }
    _0x2b4b7f.sendMessage(_0x3ab5cb, {
      'image': {
        'url': _0x2c5344
      },
      'caption': "_╰►IMAGE DOWNLOADED BY_ *BARAKA-MD*",
      'gifPlayback': false
    }, {
      'quoted': _0x5c44e4
    });
  } catch (_0x5555f8) {
    _0x3bbf4f("A fatal error has occurred... \n" + _0x5555f8.message);
  }
});
zokou({
  'nomCom': "fetch",
  'categorie': "Search",
  'aliases': ["check", 'try']
}, async (_0x34e935, _0x726ab, _0x295c2d) => {
  const {
    ms: _0x449a3e,
    repondre: _0x356671,
    arg: _0x3dfafe
  } = _0x295c2d;
  let _0x5d7675 = _0x3dfafe.join(" ");
  if (!/^https?:\/\//.test(_0x5d7675)) {
    return _0x356671("Start the *URL* with http:// or https://");
  }
  try {
    const _0x2cc4d4 = new URL(_0x5d7675);
    const _0x13de0d = '' + _0x2cc4d4.origin + _0x2cc4d4.pathname + '?' + _0x2cc4d4.searchParams.toString();
    const _0x1ec58c = await fetch(_0x13de0d);
    if (!_0x1ec58c.ok) {
      return _0x356671("Failed to fetch the URL. Status: " + _0x1ec58c.status + " " + _0x1ec58c.statusText);
    }
    const _0x129025 = _0x1ec58c.headers.get('content-length');
    if (_0x129025 && parseInt(_0x129025) > 104857600) {
      return _0x356671("Content-Length exceeds the limit: " + _0x129025);
    }
    const _0x2730c2 = _0x1ec58c.headers.get('content-type');
    console.log('Content-Type:', _0x2730c2);
    if (/image\/.*/.test(_0x2730c2)) {
      await _0x726ab.sendMessage(_0x34e935, {
        'image': {
          'url': _0x13de0d
        },
        'caption': "> > *POWERED BY BARAKA-MD*"
      }, {
        'quoted': _0x449a3e
      });
      return;
    } else {
      if (/video\/.*/.test(_0x2730c2)) {
        await _0x726ab.sendMessage(_0x34e935, {
          'video': {
            'url': _0x13de0d
          },
          'caption': "> > *POWERED BY BARAKA-MD*"
        }, {
          'quoted': _0x449a3e
        });
        return;
      } else {
        if (/text|json/.test(_0x2730c2)) {
          let _0x52b911 = Buffer.from(await _0x1ec58c.arrayBuffer());
          try {
            const _0x3cc237 = JSON.parse(_0x52b911);
            console.log("Parsed JSON:", _0x3cc237);
            _0x52b911 = JSON.stringify(_0x3cc237, null, 0x2);
          } catch (_0x4de044) {
            console.error("Error parsing JSON:", _0x4de044);
            _0x52b911 = _0x52b911.toString();
          } finally {
            _0x356671(_0x52b911.slice(0x0, 0x10000));
          }
        } else {
          await _0x726ab.sendMessage(_0x34e935, {
            'document': {
              'url': _0x13de0d
            },
            'caption': "> > *POWERED BY BARAKA-MD*"
          }, {
            'quoted': _0x449a3e
          });
        }
      }
    }
  } catch (_0x334d2e) {
    console.error("Error fetching data:", _0x334d2e.message);
    _0x356671("Error fetching data: " + _0x334d2e.message);
  }
});
zokou({
  'nomCom': 'blackpink',
  'aliases': ["bpink"],
  'categorie': 'Download'
}, async (_0x33e7a9, _0x50d4ba, _0x197db4) => {
  const {
    ms: _0x2d5548,
    repondre: _0xf96ca9,
    arg: _0x15abe7
  } = _0x197db4;
  if (_0x15abe7[0x0]) {
    _0xf96ca9("This command doesn't require any arguments. Just type the command to get 5 random Blackpink images!");
    return;
  }
  try {
    const _0x5e8806 = await fetch("https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt");
    const _0x45fc32 = await _0x5e8806.text();
    const _0x386758 = _0x45fc32.split("\n");
    const _0x47561d = _0x386758.filter(_0x120bbd => _0x120bbd.trim() !== '');
    if (_0x47561d.length < 0x5) {
      _0xf96ca9("There aren't enough images available at the moment. Please try again later.");
      return;
    }
    const _0x62c2a6 = [];
    while (_0x62c2a6.length < 0x5) {
      const _0xf4546c = _0x47561d[Math.floor(Math.random() * _0x47561d.length)];
      if (!_0x62c2a6.includes(_0xf4546c)) {
        _0x62c2a6.push(_0xf4546c);
      }
    }
    await _0x50d4ba.sendMessage(_0x33e7a9, {
      'text': "BARAKA-MD is sending you 5 BLACKPINK IMAGES"
    }, {
      'quoted': _0x2d5548
    });
    for (const _0x2eb0cd of _0x62c2a6) {
      await _0x50d4ba.sendMessage(_0x33e7a9, {
        'image': {
          'url': _0x2eb0cd
        },
        'caption': "_╰►DOWNLOADED BY_ *BARAKA-MD*"
      }, {
        'quoted': _0x2d5548
      });
    }
    await _0x50d4ba.sendMessage(_0x33e7a9, {
      'text': "SUCCESSFULLY SENT THE 5 IMAGES ✅"
    }, {
      'quoted': _0x2d5548
    });
  } catch (_0x2f8d29) {
    _0xf96ca9("A fatal error has occurred... \n " + _0x2f8d29.message);
  }
});
zokou({
  'nomCom': 'twitter',
  'aliases': ['xdl'],
  'categorie': 'Download',
  'reaction': '🐦'
}, async (_0x15a172, _0x2d12f5, _0x37f796) => {
  const {
    repondre: _0x11ad7b,
    ms: _0x3ff70a,
    arg: _0x533854
  } = _0x37f796;
  const _0x160d31 = extractUrlFromMessage(_0x533854);
  if (!_0x160d31) {
    return _0x11ad7b("Please provide a valid Twitter URL.");
  }
  try {
    const _0x3d9c5e = await fetch("https://api.guruapi.tech/xdown?url=" + encodeURIComponent(_0x160d31));
    const _0x20a215 = await _0x3d9c5e.json();
    if (!_0x20a215 || !_0x20a215.media || _0x20a215.media.length === 0x0) {
      return _0x11ad7b("No media found or invalid response from API.");
    }
    for (const _0x168a56 of _0x20a215.media) {
      const _0xf1edd8 = _0x168a56.type;
      const _0x3a5073 = _0x168a56.url;
      const _0x47dbf9 = _0xf1edd8 === "video" ? "_╰►VIDEO  DOWNLOADED BY_ *BARAKA-MD*" : "_╰►IMAGE DOWNLOADED BY_ *BARAKA-MD*";
      if (_0xf1edd8 === "video") {
        await _0x2d12f5.sendMessage(_0x15a172, {
          'video': {
            'url': _0x3a5073
          },
          'caption': _0x47dbf9
        }, {
          'quoted': _0x3ff70a
        });
      } else if (_0xf1edd8 === "image") {
        await _0x2d12f5.sendMessage(_0x15a172, {
          'image': {
            'url': _0x3a5073
          },
          'caption': _0x47dbf9
        }, {
          'quoted': _0x3ff70a
        });
      }
    }
  } catch (_0x58dd42) {
    console.error("Error occurred while retrieving data:", _0x58dd42);
    _0x11ad7b("Error occurred while retrieving data: " + _0x58dd42.message);
  }
});
function extractUrlFromMessage(_0x26b5f9) {
  const _0x2bfe6a = Array.isArray(_0x26b5f9) ? _0x26b5f9.join(" ") : _0x26b5f9;
  const _0x20d654 = _0x2bfe6a.match(/https:\/\/(x|twitter)\.com\/[^\s]+/);
  return _0x20d654 ? _0x20d654[0x0] : null;
     }
