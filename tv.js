

const m3u8 = require('m3u8-stream-list')
const fs = require('fs')
const playlist = fs.readFileSync('./ips/tamil.m3u', 'utf8')

console.log(m3u8(playlist))

/*
*
*   {
    "name": "+24",
    "logo": "https://graph.facebook.com/24htve/picture?width=320&height=320",
    "url": "http://rtvev4-live.hss.adaptive.level3.net/egress/ahandler/rtvegl0/irtve01_lv3_aosv4_gl0/irtve01_lv3_aosv4_gl0.isml/irtve01_lv3_aosv4_gl0.m3u8",
    "category": null,
    "language": [
      {
        "code": "spa",
        "name": "Spanish"
      }
    ],
    "country": {
      "code": "unsorted",
      "name": "Unsorted"
    },
    "tvg": {
      "id": null,
      "name": "+24",
      "url": null
    }
  },
* */
