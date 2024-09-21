const { bot, getUrl } = require('../framework/zokou')

zokou(
  {
    pattern: 'url2 ?(.*)',
    desc: 'Image/Video to url',
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.image && !message.reply_message.video))
      return await message.send('*Reply to a image | video*\nurl imgur - for imgur url')
    await message.send(
      await getUrl(await message.reply_message.downloadAndSaveMediaMessage('url'), match)
    )
  }
)
