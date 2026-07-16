import './style.css'
import { content } from './content.js'

// ---------- 照片輪播素材 ----------
// 之後把照片放進 src/assets/photos/,並在下面陣列填上檔名,例如:
// import photo1 from './assets/photos/01.jpg'
// const photoFiles = [photo1, photo2, ...]
const photoFiles = []
const photoCount = photoFiles.length || content.photoPlaceholderCount

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  content.venue.mapQuery,
)}`

// ---------- 渲染頁面 ----------
document.querySelector('#app').innerHTML = `
  <section class="hero">
    <p class="hero__eyebrow">WE ARE GETTING MARRIED</p>
    <h1 class="hero__names">${content.groom}<span class="hero__amp">&amp;</span>${content.bride}</h1>
    <p class="hero__date">${content.weddingDateDisplay}</p>
    <p class="hero__venue">${content.venue.name}・${content.venue.hall}</p>
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
    <div class="hero__scroll">▾ 往下滑動</div>
  </section>

  <section class="invite reveal">
    <p class="invite__text">${content.invitationText}</p>
  </section>

  <section class="timeline-section reveal">
    <h2 class="section-title">我們的故事</h2>
    <div class="timeline">
      ${content.timeline
        .map(
          (item, i) => `
        <div class="timeline__item ${i % 2 === 0 ? 'is-left' : 'is-right'}">
          <div class="timeline__dot"></div>
          <div class="timeline__card">
            <span class="timeline__date">${item.date}</span>
            <h3 class="timeline__title">${item.title}</h3>
            <p class="timeline__desc">${item.desc}</p>
          </div>
        </div>`,
        )
        .join('')}
    </div>
  </section>

  <section class="gallery-section reveal">
    <h2 class="section-title">我們的照片</h2>
    <div class="gallery" id="gallery">
      <div class="gallery__track" id="galleryTrack" style="width:${photoCount * 100}%">
        ${Array.from({ length: photoCount })
          .map(
            (_, i) =>
              `<div class="gallery__slide" style="width:${100 / photoCount}%">
                ${
                  photoFiles[i]
                    ? `<img src="${photoFiles[i]}" alt="照片 ${i + 1}" />`
                    : `<div class="gallery__placeholder">照片 ${i + 1}</div>`
                }
              </div>`,
          )
          .join('')}
      </div>
      <button class="gallery__nav gallery__nav--prev" id="galleryPrev" aria-label="上一張">‹</button>
      <button class="gallery__nav gallery__nav--next" id="galleryNext" aria-label="下一張">›</button>
      <div class="gallery__dots" id="galleryDots">
        ${Array.from({ length: photoCount })
          .map((_, i) => `<button class="gallery__dot${i === 0 ? ' is-active' : ''}" data-index="${i}"></button>`)
          .join('')}
      </div>
    </div>
  </section>

  <section class="location-section reveal">
    <h2 class="section-title">婚禮地點</h2>
    <p class="location__name">${content.venue.name}</p>
    <p class="location__hall">${content.venue.hall}</p>
    <p class="location__address">${content.venue.address}</p>
    <a class="location__link" href="${mapUrl}" target="_blank" rel="noopener">在 Google 地圖開啟 →</a>
  </section>

  ${
    content.rsvpUrl
      ? `<section class="rsvp-section reveal">
          <h2 class="section-title">賓客回覆</h2>
          <a class="rsvp__button" href="${content.rsvpUrl}" target="_blank" rel="noopener">填寫回覆表單</a>
        </section>`
      : ''
  }

  <footer class="footer">
    <p>${content.groom} &amp; ${content.bride}</p>
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

// ---------- 照片輪播 ----------
if (photoCount > 0) {
  const track = document.getElementById('galleryTrack')
  const dots = Array.from(document.querySelectorAll('.gallery__dot'))
  let current = 0
  let autoplayTimer = null

  function goTo(index) {
    current = (index + photoCount) % photoCount
    track.style.transform = `translateX(-${(100 / photoCount) * current}%)`
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current))
  }

  document.getElementById('galleryPrev').addEventListener('click', () => goTo(current - 1))
  document.getElementById('galleryNext').addEventListener('click', () => goTo(current + 1))
  dots.forEach((dot) => dot.addEventListener('click', () => goTo(Number(dot.dataset.index))))

  function startAutoplay() {
    autoplayTimer = setInterval(() => goTo(current + 1), 4000)
  }
  function stopAutoplay() {
    clearInterval(autoplayTimer)
  }
  const gallery = document.getElementById('gallery')
  gallery.addEventListener('mouseenter', stopAutoplay)
  gallery.addEventListener('mouseleave', startAutoplay)
  startAutoplay()
}

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
