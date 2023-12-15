let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['Yap','Sepertinya Begitu','Kayaknya','Kayaknya nggak','Nggak','Nggak mungkin', '🤔 Tentu saja! Mengapa tidak?', '🧐 Hmm, mungkin, tetapi kita perlu mempertimbangkannya lebih lanjut.', '😃 Ya, apakah ada keraguan?', '🤨 Mungkin tidak, kita harus memikirkannya lagi.', '😁 Pasti, tanpa keraguan!', '😌 Saya rasa itu tidak.', 'Seperti nya iya', '😊 Saya rasa itu mungkin.', 'Sangat benar', 'Betul sekali', 'Ini fakta', 'Gk yakin', 'Mustahil bisa terjadi', '50:50 gak pasti dapat', 'Ngarep', 'GAK AKAN TERJADI', 'Bang udah bang gak mungkin', 'Turunkan ekspetasi mu nak', 'bisa jadi sih', 'mungkin saja bisa terjadi','🥳 Ya, itu pasti!', '😞 Sayangnya, saya pikir tidak.', '😟 Saya bingung, tapi mungkin iya.', '😯 Oh, tentu saja tidak.', '😰 Maaf, tapi saya rasa tidak.', '😮 Ups, saya rasa itu seharusnya tidak.', ' Tidak, menurut saya itu tidak tepat. 😨', 'Sangat mungkin, tapi saya sarankan melakukan penelitian lebih lanjut. 🧐', 'Saya tidak memiliki cukup informasi untuk menjawab itu. 😓'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
