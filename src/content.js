// 這裡集中放所有喜帖文字內容,之後要改文案只要改這個檔案就好

export const content = {
  groom: 'Wade',
  bride: 'Evelyn',

  // ISO 格式,含台北時區 +08:00
  weddingDateISO: '2026-11-22T12:00:00+08:00',
  weddingDateDisplay: '2026 年 11 月 22 日 星期日 中午 12:00',

  venue: {
    name: '典華旗艦館・大直',
    hall: '3F 光影廳',
    address: '10466 臺北市中山區成功里植福路8號',
    mapQuery: '典華旗艦館 大直', // 用於 Google 地圖搜尋連結,若地址填好可換成地址
  },

  invitationText: '我們即將攜手步入禮堂,誠摯邀請您撥冗蒞臨,共同見證這幸福的一刻。',

  // 故事時間軸,先給預留段落,之後再換上你們的真實故事
  timeline: [
    {
      date: '20XX . XX',
      title: '相識',
      desc: '在這裡填入你們相識的故事。',
    },
    {
      date: '20XX . XX',
      title: '在一起',
      desc: '在這裡填入告白 / 交往的故事。',
    },
    {
      date: '20XX . XX',
      title: '求婚',
      desc: '在這裡填入求婚的故事。',
    },
    {
      date: '2026 . 11',
      title: '結婚',
      desc: '我們決定攜手一生,邀請你一起見證。',
    },
  ],

  // 照片輪播預留張數,之後把對應檔案放到 src/assets/photos/ 並在 main.js 的 photoFiles 陣列填上檔名即可
  photoPlaceholderCount: 6,

  // 如果沒有背景音樂檔案,把這個留空字串,播放按鈕會自動隱藏
  musicSrc: `${import.meta.env.BASE_URL}audio/bgm.mp3`,
  musicTitle: '播放音樂',

  // 你們的問卷連結(RSVP),留空的話按鈕會隱藏
  rsvpUrl: '',
}
