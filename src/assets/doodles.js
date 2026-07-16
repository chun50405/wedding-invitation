// 紅色手繪風塗鴉素材,inline SVG 字串,直接插入 HTML 使用
// 每條線都加上 pathLength="1",搭配 style.css 的 stroke-dasharray/dashoffset
// 就能做出「捲動到眼前才描邊畫出來」的動畫,不用管線條實際長度

export const doodleHeart = `
<svg viewBox="0 0 100 90" class="doodle doodle--heart" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M50 82C22 62 6 44 6 26 6 12 17 3 30 3c9 0 16 5 20 13 4-8 11-13 20-13 13 0 24 9 24 23 0 18-16 36-44 56z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  <path pathLength="1" d="M47 86C20 65 5 47 5 28" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
</svg>`

export const doodleFlower = `
<svg viewBox="0 0 60 60" class="doodle doodle--flower" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle pathLength="1" cx="30" cy="16" r="11" stroke="currentColor" stroke-width="2.5"/>
  <circle pathLength="1" cx="30" cy="44" r="11" stroke="currentColor" stroke-width="2.5"/>
  <circle pathLength="1" cx="14" cy="30" r="11" stroke="currentColor" stroke-width="2.5"/>
  <circle pathLength="1" cx="46" cy="30" r="11" stroke="currentColor" stroke-width="2.5"/>
  <circle pathLength="1" cx="30" cy="30" r="6" stroke="currentColor" stroke-width="2.5"/>
</svg>`

export const doodleArrow = `
<svg viewBox="0 0 90 70" class="doodle doodle--arrow" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M8 8c6 22 22 40 44 46 10 3 20 2 28-3" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <path pathLength="1" d="M62 42c8 1 15 4 18 9-6 2-13 6-16 13" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

export const doodleRing = `
<svg viewBox="0 0 80 90" class="doodle doodle--ring" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle pathLength="1" cx="40" cy="58" r="20" stroke="currentColor" stroke-width="3"/>
  <circle pathLength="1" cx="40" cy="58" r="13" stroke="currentColor" stroke-width="2"/>
  <path pathLength="1" d="M28 32l12-14 12 14-12 9z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  <path pathLength="1" d="M40 4v8M22 12l6 6M58 12l-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
</svg>`

export const doodleSparkle = `
<svg viewBox="0 0 40 40" class="doodle doodle--sparkle" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M20 2c1 8 3 14 5 16 2 2 8 4 15 5-7 1-13 3-15 5-2 2-4 8-5 16-1-8-3-14-5-16-2-2-8-4-15-5 7-1 13-3 15-5 2-2 4-8 5-16z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>`
