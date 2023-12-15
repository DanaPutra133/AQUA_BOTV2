
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6281289694906']  
global.mods = ['6281289694906'] 
global.prems = ['6281289694906']
global.nameowner = 'dana'
global.numberowner = '6281289694906' 
global.mail = 'danaputra1001@gmail.com' 
global.dana = '6281289694906'
global.pulsa = '6281289694906'
global.gopay = '6281289694906'
global.namebot = '6281289694906-MD'
global.gc = 'https://chat.whatsapp.com/EUKH9asOX4y8DkikAtueEj'
global.web = 'https://github.com/danaputra133'
global.instagram = 'https://instagram.com/dana_putra13'
global.wm = 'Aqua Bot'
global.watermark = wm
global.wm2 = '⫹⫺ Aqua Bot'
global.wm3 = 'DANA'
global.wm4 = 'made by Aqua Bot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Aqua Bot'
global.author = '@dana_putra13'

//---- image thumbnail 
global.thumb = 'https://i.ibb.co/7RDSvnw/aqua.png'

//===> Apikey
global.lann = '' //isi apikey mu https://api.betabotz.org
global.btc = ''//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': '' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
