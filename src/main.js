import './style.css'
import { content } from './content.js'
import { doodleHeart, doodleFlower, doodleArrow, doodleRing, doodleSparkle } from './assets/doodles.js'

// ---------- 依序照片素材 ----------
// 順序:0 封面 / 1 純照片 / 2 愛心疊圖 / 3 拱門 / 4 倒數計時旁 / 5 WELCOME 旁 / 6 日曆旁 / 7 婚禮資訊旁
import photo1 from './assets/photos/01.jpg'
import photo2 from './assets/photos/02.jpg'
import photo3 from './assets/photos/03.jpg'
import photo4 from './assets/photos/04.jpg'
const photoFiles = [photo1, photo2, photo3, photo4]
const [q1, q2, q3, q4, q5, q6, q7] = content.storyQuotes

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  content.venue.mapQuery,
)}`

function photoBlock(index, { doodle, corner } = {}) {
  const inner = photoFiles[index]
    ? `<img class="photo-frame__img" src="${photoFiles[index]}" alt="照片 ${index + 1}" />`
    : `<div class="photo-frame__placeholder">照片 ${index + 1}</div>`
  return `
    <div class="story-item">
      <div class="photo-frame-wrap">
        ${doodle ? `<div class="story-item__doodle ${corner}">${doodle}</div>` : ''}
        <div class="photo-frame">${inner}</div>
      </div>
    </div>`
}

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

function countdownMarkup() {
  return `
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
    </div>`
}

// ---------- 渲染頁面 ----------
document.querySelector('#app').innerHTML = `
  <section class="hero">
    <p class="hero__mark">囍</p>
    <div class="hero__photo">
      <div class="hero__doodle-flower">${doodleFlower}</div>
      <div class="photo-frame">
        ${
          photoFiles[0]
            ? `<img class="photo-frame__img" src="${photoFiles[0]}" alt="${content.groom} & ${content.bride}" />`
            : `<div class="photo-frame__placeholder">Photo</div>`
        }
      </div>
    </div>
    <div class="hero__married">
      <div class="hero__married-text">
        <p class="hero__married-zh">結婚啦</p>
        <p class="hero__caption">We are married</p>
      </div>
      <div class="hero__doodle-arrow">${doodleArrow}</div>
    </div>
    <h1 class="hero__names">${content.groom}<span class="hero__amp">&amp;</span>${content.bride}</h1>
    <p class="hero__date">${content.weddingDateDisplay}</p>
    <p class="hero__venue">${content.venue.name}・${content.venue.hall}</p>
    <div class="hero__scroll">▾ 往下滑動</div>
  </section>

  <section class="invite reveal">
    <div class="invite__doodles">
      <div class="invite__flower">${doodleFlower}</div>
      <div class="invite__ring">${doodleRing}</div>
    </div>
    <p class="invite__text">${content.invitationText}</p>
    <p class="invite__text">${q1}</p>
    <p class="invite__text">${q2}</p>
  </section>

  <section class="story-section reveal">
    <div class="story">
      ${photoBlock(1)}
    </div>
  </section>

  <section class="story-section reveal">
    <div class="story">
      <div class="story-item">
        <p class="story-quote">${q3}</p>
        <div class="photo-frame-wrap">
          <div class="photo-frame">
            ${
              photoFiles[2]
                ? `<img class="photo-frame__img" src="${photoFiles[2]}" alt="照片 3" />`
                : `<div class="photo-frame__placeholder">照片 3</div>`
            }
            <div class="photo-frame__heart-overlay">${doodleHeart}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="story-section reveal">
    <div class="story">
      <div class="story-item">
        <p class="story-quote">${q4}</p>
        <div class="photo-frame-wrap">
          <div class="story-item__loveyou">LOVE YOU</div>
          <div class="story-item__doodle story-item__doodle--br">${doodleFlower}</div>
          <div class="photo-frame">
            ${
              photoFiles[3]
                ? `<img class="photo-frame__img" src="${photoFiles[3]}" alt="照片 4" />`
                : `<div class="photo-frame__placeholder">照片 4</div>`
            }
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="countdown-section reveal">
    <p class="story-quote">${q5}</p>
    ${countdownMarkup()}
  </section>

  <section class="story-section reveal">
    <div class="story">
      ${photoBlock(4, { doodle: doodleSparkle, corner: 'story-item__doodle--tr' })}
    </div>
  </section>

  <section class="welcome reveal">
    <p class="story-quote">${q6}</p>
    <p class="welcome__mark">囍囍</p>
    <p class="welcome__en">WELCOME TO OUR WEDDING</p>
  </section>

  <section class="story-section reveal">
    <div class="story">
      ${photoBlock(5, { doodle: doodleSparkle, corner: 'story-item__doodle--tl' })}
    </div>
  </section>

  <section class="calendar-section reveal">
    <h2 class="section-title">倒數計時</h2>
    <div class="calendar">
      <div class="calendar__doodle">${doodleFlower}</div>
      <p class="calendar__month">${calendarMonth + 1} / ${weddingDay}</p>
      <p class="calendar__year">- ${calendarYear} -</p>
      <div class="calendar__grid">
        ${['一', '二', '三', '四', '五', '六', '日']
          .map((w) => `<div class="calendar__weekday">${w}</div>`)
          .join('')}
        ${buildCalendarDays(calendarYear, calendarMonth, weddingDay)}
      </div>
    </div>
  </section>

  <section class="story-section reveal">
    <div class="story">
      ${photoBlock(6, { doodle: doodleRing, corner: 'story-item__doodle--tr' })}
    </div>
  </section>

  <section class="location-section reveal">
    <h2 class="section-title">婚禮資訊</h2>
    <div class="location">
      <div class="location__doodle">${doodleSparkle}</div>
      <div class="location__row">
        <span class="location__dot"></span>
        <div>
          <p class="location__label">婚禮時間</p>
          <p class="location__value">${content.weddingDateDisplay}</p>
        </div>
      </div>
      <div class="location__row">
        <span class="location__dot"></span>
        <div>
          <p class="location__label">婚禮地點</p>
          <p class="location__value">${content.venue.name}・${content.venue.hall}</p>
          <p class="location__value">${content.venue.address}</p>
        </div>
      </div>
      <p class="story-quote">${q7}</p>
      <div class="location__quote">${doodleArrow}</div>
      <a class="location__link" href="${mapUrl}" target="_blank" rel="noopener">在 Google 地圖開啟</a>
    </div>
  </section>

  <section class="story-section reveal">
    <div class="story">
      ${photoBlock(7, { doodle: doodleFlower, corner: 'story-item__doodle--bl' })}
    </div>
  </section>

  ${
    content.rsvpUrl
      ? `<section class="rsvp-section reveal">
          <h2 class="section-title">賓客回覆</h2>
          <a class="rsvp__button" href="${content.rsvpUrl}" target="_blank" rel="noopener">填寫回覆表單</a>
        </section>`
      : ''
  }

  <section class="closing reveal">
    <p class="story-quote">${content.closingQuote}</p>
  </section>

  <footer class="footer">
    <p class="footer__mark">囍</p>
    <p class="footer__names">${content.groom} &amp; ${content.bride}</p>
    <p class="footer__sub">感謝您撥冗參加我們的婚禮</p>
  </footer>

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
