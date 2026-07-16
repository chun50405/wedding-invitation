import './style.css'
import { content } from './content.js'
import {
  doodleHeart,
  doodleBigHeart,
  doodleFlower,
  doodleArrow,
  doodleRing,
  doodleSparkle,
} from './assets/doodles.js'

// ---------- 照片(依頁面出現順序) ----------
import photo1 from './assets/photos/01.jpg' // 封面:長椅合照
import photo2 from './assets/photos/02.jpg' // 大愛心疊圖:林間小徑
import photo3 from './assets/photos/03.jpg' // 拱窗:LOVE YOU
import photo4 from './assets/photos/04.jpg' // 櫻花
import photo5 from './assets/photos/05.jpg' // 插畫:拱門
import photo6 from './assets/photos/06.jpg' // 插畫:長椅
import photo7 from './assets/photos/07.jpg' // 頭紗特寫
import photo8 from './assets/photos/08.jpg' // 兩張長椅:好久不見 婚禮見

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  content.venue.mapQuery,
)}`

// ---------- 日曆(結婚月份) ----------
const weddingDate = new Date(content.weddingDateISO)
const calendarYear = weddingDate.getFullYear()
const calendarMonth = weddingDate.getMonth()
const weddingDay = weddingDate.getDate()

function buildCalendarDays(year, month, highlightDay) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7 // 週一開頭

  const cells = []
  for (let i = 0; i < firstWeekday; i++) cells.push('<div class="calendar__day"></div>')
  for (let day = 1; day <= daysInMonth; day++) {
    if (day === highlightDay) {
      cells.push(
        `<div class="calendar__day calendar__day--wedding">${doodleHeart}<span>${day}</span></div>`,
      )
    } else {
      cells.push(`<div class="calendar__day"><span>${day}</span></div>`)
    }
  }
  return cells.join('')
}

function photoFrame(src, alt, extra = '') {
  return `<div class="photo-frame">
    <img class="photo-frame__img" src="${src}" alt="${alt}" loading="lazy" />
    ${extra}
  </div>`
}

// ---------- 渲染頁面 ----------
document.querySelector('#app').innerHTML = `
  <section class="hero">
    <p class="hero__mark">囍囍</p>
    <p class="hero__invitation">—INVITATION</p>
    <div class="hero__photo">
      <div class="hero__doodle-flower">${doodleFlower}</div>
      <div class="hero__doodle-flower2">${doodleFlower}</div>
      ${photoFrame(photo1, `${content.groom} & ${content.bride}`)}
    </div>
    <div class="hero__married">
      <div class="hero__married-text">
        <p class="hero__married-zh">結婚啦</p>
        <p class="hero__caption">We are married</p>
      </div>
      <div class="hero__doodle-arrow">${doodleArrow}</div>
    </div>
  </section>

  <section class="intro reveal">
    <div class="intro__body">
      <div class="intro__main">
        <p class="intro__date">${content.weddingDateShort}</p>
        ${content.introLines
          .map((line) => `<p class="intro__line">${line}</p>`)
          .join('')}
      </div>
      <div class="intro__names">
        <span>${content.groomZh}</span>
        <span class="intro__amp">&amp;</span>
        <span>${content.brideZh}</span>
      </div>
    </div>
    <div class="intro__ring">${doodleRing}</div>
    <p class="signature-banner">— ${content.groom} &amp; ${content.bride}</p>
  </section>

  <section class="heart-photo reveal">
    <div class="heart-photo__wrap">
      ${photoFrame(photo2, '林間合照')}
      <div class="heart-photo__overlay">${doodleBigHeart}</div>
    </div>
    <div class="heart-photo__lines">
      ${content.heartLines.map((l) => `<p>${l}</p>`).join('')}
    </div>
  </section>

  <section class="arch reveal">
    <div class="arch__banners">
      ${content.banners.map((b, i) => `<p class="arch__banner arch__banner--${i}">${b}</p>`).join('')}
    </div>
    <div class="photo-frame-wrap">
      <div class="story-item__doodle story-item__doodle--tl">${doodleFlower}</div>
      <div class="story-item__loveyou">LOVE&nbsp;&nbsp;YOU</div>
      ${photoFrame(photo3, '拱窗合照')}
    </div>
    <div class="love-doodle">
      <span class="love-doodle__text">LOVE</span>
      <span class="love-doodle__hearts">${doodleHeart}${doodleHeart}</span>
    </div>
  </section>

  <section class="blossom reveal">
    <div class="photo-frame-wrap">
      <div class="story-item__doodle story-item__doodle--br">${doodleFlower}</div>
      ${photoFrame(photo4, '櫻花合照')}
    </div>
    <div class="bullets">
      ${content.bulletLines
        .map(
          (b) => `
        <div class="bullets__row bullets__row--${b.align}">
          <span class="bullets__dot"></span>
          <div>
            <p>${b.text}</p>
            ${b.sub ? `<p>${b.sub}</p>` : ''}
          </div>
        </div>`,
        )
        .join('')}
    </div>
    <div class="bullets__arrow">${doodleArrow}</div>
    <div class="countdown" id="countdown">
      ${['days', 'hours', 'minutes', 'seconds']
        .map(
          (unit) => `
        <div class="countdown__item">
          <span class="countdown__value" data-unit="${unit}">--</span>
          <span class="countdown__label">${
            { days: '天', hours: '時', minutes: '分', seconds: '秒' }[unit]
          }</span>
        </div>`,
        )
        .join('')}
    </div>
  </section>

  <section class="illust reveal">
    ${photoFrame(photo5, '婚禮插畫')}
    <p class="handwritten">歡迎參加<br /><span class="handwritten__indent">我們的婚禮</span></p>
    <div class="welcome-lines">
      ${content.welcomeLines.map((l) => `<p>${l}</p>`).join('')}
    </div>
    <div class="welcome-banner">
      <p class="welcome-banner__mark">囍囍</p>
      <div class="welcome-banner__en">
        <p>WELCOME TO</p>
        <p>OUR WEDDING</p>
      </div>
    </div>
    ${photoFrame(photo6, '婚禮插畫')}
  </section>

  <section class="calendar-section reveal">
    <div class="calendar">
      <div class="calendar__doodle">${doodleFlower}</div>
      <p class="calendar__month">${calendarMonth + 1} <span>/ ${weddingDay}</span></p>
      <p class="calendar__year">- ${calendarYear} -</p>
      <div class="calendar__grid">
        ${['一', '二', '三', '四', '五', '六', '日']
          .map((w) => `<div class="calendar__weekday">${w}</div>`)
          .join('')}
        ${buildCalendarDays(calendarYear, calendarMonth, weddingDay)}
      </div>
    </div>
    <div class="calendar__photo">
      ${photoFrame(photo7, '頭紗特寫')}
    </div>
  </section>

  <section class="location-section reveal">
    <div class="location__mark">
      <p class="location__xi">囍</p>
      <div class="location__hearts">${doodleHeart}${doodleHeart}${doodleHeart}</div>
    </div>
    <div class="location">
      <div class="location__row">
        <span class="location__dot"></span>
        <div>
          <p class="location__label">婚禮時間 /</p>
          <p class="location__value">${content.weddingDateDisplay}</p>
        </div>
      </div>
      <div class="location__row">
        <span class="location__dot"></span>
        <div>
          <p class="location__label">婚禮地點 /</p>
          <p class="location__value">${content.venue.address}</p>
        </div>
      </div>
      <a class="location__link" href="${mapUrl}" target="_blank" rel="noopener">在 Google 地圖開啟</a>
    </div>
    <div class="location__ring">${doodleRing}</div>
  </section>

  <section class="farewell reveal">
    <div class="photo-frame-wrap">
      <div class="story-item__doodle story-item__doodle--tr">${doodleSparkle}</div>
      ${photoFrame(photo8, '兩張長椅合照')}
    </div>
    <p class="handwritten handwritten--slant">好久不見<br /><span class="handwritten__indent">婚禮見</span></p>
  </section>

  <section class="closing reveal">
    <div class="closing__hearts">
      ${[0, 1, 2, 3].map((i) => `<span class="closing__heart closing__heart--${i}">${doodleHeart}</span>`).join('')}
    </div>
    <div class="closing__lines">
      ${content.closingLines
        .map((l) => (l ? `<p>${l}</p>` : '<p class="closing__gap"></p>'))
        .join('')}
    </div>
  </section>

  <footer class="footer">
    <p class="footer__mark">囍囍</p>
    <p class="footer__names">${content.groom} &amp; ${content.bride}</p>
    <p class="footer__sub">感謝您撥冗參加我們的婚禮</p>
  </footer>

  ${
    content.rsvpUrl
      ? `<section class="rsvp-section reveal">
          <a class="rsvp__button" href="${content.rsvpUrl}" target="_blank" rel="noopener">填寫回覆表單</a>
        </section>`
      : ''
  }

  ${
    content.musicSrc
      ? `<audio id="bgm" src="${content.musicSrc}" loop></audio>
         <button id="musicToggle" class="music-toggle" aria-label="${content.musicTitle}">♪</button>`
      : ''
  }
`

// ---------- 倒數計時 ----------
function updateCountdown() {
  const target = new Date(content.weddingDateISO).getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const values = { days, hours, minutes, seconds }
  document.querySelectorAll('.countdown__value').forEach((el) => {
    el.textContent = String(values[el.dataset.unit]).padStart(2, '0')
  })
}
updateCountdown()
setInterval(updateCountdown, 1000)

// ---------- 滾動淡入動畫 ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 },
)
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

// ---------- 塗鴉描邊動畫(滑到眼前才畫出來) ----------
const doodleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-drawn')
        doodleObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.4 },
)
document.querySelectorAll('.doodle').forEach((el) => doodleObserver.observe(el))

// ---------- 背景音樂 ----------
const musicToggle = document.getElementById('musicToggle')
if (musicToggle) {
  const bgm = document.getElementById('bgm')

  bgm
    .play()
    .then(() => musicToggle.classList.add('is-playing'))
    .catch(() => {
      // 瀏覽器擋下自動播放,改成使用者第一次點擊/觸碰頁面時再播放
      const playOnFirstInteraction = () => {
        bgm.play().then(() => musicToggle.classList.add('is-playing'))
        document.removeEventListener('click', playOnFirstInteraction)
        document.removeEventListener('touchstart', playOnFirstInteraction)
      }
      document.addEventListener('click', playOnFirstInteraction)
      document.addEventListener('touchstart', playOnFirstInteraction)
    })

  musicToggle.addEventListener('click', () => {
    if (bgm.paused) {
      bgm.play()
      musicToggle.classList.add('is-playing')
    } else {
      bgm.pause()
      musicToggle.classList.remove('is-playing')
    }
  })
}
