// 紅色手繪風塗鴉素材,inline SVG 字串,直接插入 HTML 使用
// 每條線都加上 pathLength="1",搭配 style.css 的 stroke-dasharray/dashoffset
// 就能做出「捲動到眼前才描邊畫出來」的動畫,不用管線條實際長度

export const doodleHeart = `
<svg viewBox="0 0 100 90" class="doodle doodle--heart" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M50 82C22 62 6 44 6 26 6 12 17 3 30 3c9 0 16 5 20 13 4-8 11-13 20-13 13 0 24 9 24 23 0 18-16 36-44 56z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  <path pathLength="1" d="M47 86C20 65 5 47 5 28" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
</svg>`

// 實心小愛心(貼紙感)
export const doodleHeartSolid = `
<svg viewBox="0 0 100 90" class="doodle doodle--heart-solid" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M50 82C22 62 6 44 6 26 6 12 17 3 30 3c9 0 16 5 20 13 4-8 11-13 20-13 13 0 24 9 24 23 0 18-16 36-44 56z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
</svg>`

// 斜線填滿的塗鴉愛心
export const doodleHeartHatch = `
<svg viewBox="0 0 100 90" class="doodle doodle--heart-hatch" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M50 82C22 62 6 44 6 26 6 12 17 3 30 3c9 0 16 5 20 13 4-8 11-13 20-13 13 0 24 9 24 23 0 18-16 36-44 56z" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M18 18 L34 8 M12 32 L52 10 M14 44 L70 12 M20 56 L84 16 M28 66 L90 26 M38 74 L92 40 M48 80 L88 54" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
</svg>`

// 五瓣圈圈小花
export const doodleFlower = `
<svg viewBox="0 0 60 60" class="doodle doodle--flower" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M30 24 C28 12 24 4 30 3 C36 4 32 12 30 24" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M35 27 C46 21 55 20 56 26 C55 32 45 31 35 27" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M33 34 C40 44 42 53 36 55 C30 54 30 43 33 34" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M27 34 C22 45 16 52 11 49 C8 44 17 37 27 34" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M25 27 C14 24 5 20 7 15 C12 11 20 19 25 27" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <circle pathLength="1" cx="30" cy="29" r="4.5" stroke="currentColor" stroke-width="2.5"/>
</svg>`

// 向上的大繞圈箭頭(封面用):由左下掃過來,底部繞一圈,往上指
export const doodleArrowUp = `
<svg viewBox="0 0 110 130" class="doodle doodle--arrow-up" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M6 122 C36 130 66 124 74 106 C80 92 68 84 60 92 C52 102 62 112 74 104 C88 94 92 62 84 22" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
  <path pathLength="1" d="M70 34 L84 10 L98 32" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

// 向下的繞圈箭頭(倒數計時用):從上方繞一圈後往左下指
export const doodleArrowDown = `
<svg viewBox="0 0 90 120" class="doodle doodle--arrow-down" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M78 6 C84 34 78 56 62 62 C50 66 44 56 52 50 C60 44 68 52 60 64 C52 76 36 92 18 104" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
  <path pathLength="1" d="M34 96 L14 108 L22 84" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

// 舊名稱兼容:預設箭頭(地圖區用)
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

// 大的多圈塗鴉愛心,疊在照片上用
export const doodleBigHeart = `
<svg viewBox="0 0 220 200" class="doodle doodle--bigheart" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M110 182C58 140 20 104 16 66 13 38 32 16 60 14c22-2 40 10 50 30 10-20 28-32 50-30 28 2 47 24 44 52-4 38-42 74-94 116z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path pathLength="1" d="M106 188C52 144 12 106 10 66 8 40 28 20 54 18c24-2 44 12 54 34 8-22 30-36 54-34 26 2 46 22 44 48-2 40-44 80-100 122z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
  <path pathLength="1" d="M114 176C64 136 30 102 26 68 23 44 40 26 62 24c20-2 36 8 46 26 10-18 26-28 46-26 22 2 39 20 36 44-3 34-38 68-76 108z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
</svg>`

export const doodleSparkle = `
<svg viewBox="0 0 40 40" class="doodle doodle--sparkle" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M20 2c1 8 3 14 5 16 2 2 8 4 15 5-7 1-13 3-15 5-2 2-4 8-5 16-1-8-3-14-5-16-2-2-8-4-15-5 7-1 13-3 15-5 2-2 4-8 5-16z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>`

// 星星吊飾(掛在照片下緣),金黃色系
export const doodleGarland = `
<svg viewBox="0 0 240 90" class="doodle doodle--garland" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M14 4 V30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M10 38 L14 32 L18 38 L12 35 H16 Z M14 32 L14 44 M8 40 L20 40" stroke="currentColor" stroke-width="2" stroke-linejoin="round" transform="translate(0,-4)"/>
  <path pathLength="1" d="M52 4 V52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle pathLength="1" cx="52" cy="58" r="6" stroke="currentColor" stroke-width="2.5"/>
  <path pathLength="1" d="M92 4 V24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M92 28 l4 8 8 1-6 6 2 9-8-5-8 5 2-9-6-6 8-1z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M132 4 V44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle pathLength="1" cx="132" cy="50" r="5" stroke="currentColor" stroke-width="2.5"/>
  <path pathLength="1" d="M172 4 V32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M172 36 l4 8 8 1-6 6 2 9-8-5-8 5 2-9-6-6 8-1z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M212 4 V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle pathLength="1" cx="212" cy="28" r="6" stroke="currentColor" stroke-width="2.5"/>
</svg>`

// 自己畫的線繪卡通新人:新郎捧花+新娘舉手歡呼
export const doodleCoupleCheer = `
<svg viewBox="0 0 220 190" class="doodle doodle--couple" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle pathLength="1" cx="66" cy="48" r="21" stroke="currentColor" stroke-width="2.6"/>
  <path pathLength="1" d="M46 42 C44 24 62 16 72 20 C84 22 90 32 86 42 C82 32 70 28 62 32 C54 34 48 38 46 42 Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M56 50 q3.5 3.5 7 0" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <circle pathLength="1" cx="76" cy="49" r="2" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <path pathLength="1" d="M62 58 Q67 63 73 58" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <path pathLength="1" d="M60 74 l6 5 6-5 -2 8 h-8 z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M42 132 L44 92 C44 80 52 72 66 72 C80 72 88 80 88 92 L90 132 Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
  <path pathLength="1" d="M66 72 L58 88 L66 104 M66 72 L74 88 L66 104" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M44 94 C36 102 32 112 34 122 C38 124 42 122 44 118" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <path pathLength="1" d="M88 94 C96 100 102 106 105 112" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <circle pathLength="1" cx="110" cy="120" r="5" stroke="currentColor" stroke-width="2"/>
  <circle pathLength="1" cx="120" cy="115" r="5.5" stroke="currentColor" stroke-width="2"/>
  <circle pathLength="1" cx="116" cy="127" r="5" stroke="currentColor" stroke-width="2"/>
  <circle pathLength="1" cx="126" cy="123" r="4.5" stroke="currentColor" stroke-width="2"/>
  <circle pathLength="1" cx="122" cy="133" r="4" stroke="currentColor" stroke-width="2"/>
  <path pathLength="1" d="M112 136 L106 152 M120 138 L118 152 M128 130 L130 148" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle pathLength="1" cx="154" cy="52" r="20" stroke="currentColor" stroke-width="2.6"/>
  <path pathLength="1" d="M136 44 C134 30 148 22 158 24 C168 26 174 34 172 44 C168 34 158 30 150 33 C144 35 138 39 136 44 Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M134 46 C128 58 128 70 132 80 M172 46 C178 58 178 70 174 80" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <path pathLength="1" d="M146 24 C140 16 150 10 153 17 C156 10 166 14 160 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle pathLength="1" cx="147" cy="52" r="2" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <circle pathLength="1" cx="161" cy="52" r="2" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <path pathLength="1" d="M150 60 Q154 65 158 60" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <path pathLength="1" d="M140 76 C132 70 126 62 124 52" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <path pathLength="1" d="M124 52 l-7-3 M124 52 l-4-7 M124 52 l2-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M168 76 C176 70 182 62 184 52" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <path pathLength="1" d="M184 52 l7-3 M184 52 l4-7 M184 52 l-2-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M142 78 C140 92 132 114 122 134 L186 134 C176 114 168 92 166 78 C159 84 149 84 142 78 Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
  <path pathLength="1" d="M146 80 Q154 88 162 80" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M24 34 l2.5 6 6 1-4.5 4.5 1 6-5-3.5-5 3.5 1-6-4.5-4.5 6-1z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M198 88 l2.5 6 6 1-4.5 4.5 1 6-5-3.5-5 3.5 1-6-4.5-4.5 6-1z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
</svg>`

// 自己畫的線繪卡通新人:互相牽手高舉、鞠躬謝禮
export const doodleCoupleBow = `
<svg viewBox="0 0 220 170" class="doodle doodle--couple" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle pathLength="1" cx="110" cy="20" r="6" stroke="currentColor" stroke-width="2.4"/>
  <path pathLength="1" d="M104 22 C94 34 86 48 82 62 M116 22 C126 34 134 48 138 62" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
  <circle pathLength="1" cx="86" cy="80" r="17" stroke="currentColor" stroke-width="2.6"/>
  <path pathLength="1" d="M74 68 C68 60 78 52 84 58 C86 50 98 54 94 64" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M70 78 C60 84 52 94 50 106" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <path pathLength="1" d="M74 94 C60 100 50 112 48 128 C62 140 92 142 106 132 C108 116 100 102 88 96" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
  <path pathLength="1" d="M62 136 L58 152 M92 138 L94 152" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <circle pathLength="1" cx="140" cy="82" r="17" stroke="currentColor" stroke-width="2.6"/>
  <path pathLength="1" d="M126 74 C124 60 140 52 150 56 C158 58 162 66 158 74 C152 66 138 64 132 70 C128 72 127 73 126 74 Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M138 98 C130 108 126 120 128 132 M152 94 C158 104 162 116 160 128" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
  <path pathLength="1" d="M128 132 C138 138 152 136 160 128" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
  <path pathLength="1" d="M132 134 L128 150 M156 132 L160 148" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <path pathLength="1" d="M60 46 l2 5 5 1-4 4 1 5-4-3-4 3 1-5-4-4 5-1z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M158 40 l2 5 5 1-4 4 1 5-4-3-4 3 1-5-4-4 5-1z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M184 92 a10 10 0 1 0 4 14 a8 8 0 1 1-4-14z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M104 152 l1.5 4 4 .8-3 3 .7 4-3.2-2.3-3.2 2.3 .7-4-3-3 4-.8z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
  <path pathLength="1" d="M36 118 l1.5 4 4 .8-3 3 .7 4-3.2-2.3-3.2 2.3 .7-4-3-3 4-.8z" stroke="#f0b429" stroke-width="2" stroke-linejoin="round"/>
</svg>`

// 線繪捧花(拱窗照片右下角)
export const doodleBouquet = `
<svg viewBox="0 0 140 170" class="doodle doodle--bouquet" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength="1" d="M46 44 C38 30 48 16 62 18 C64 8 80 6 86 16 C98 10 112 20 108 32 C120 36 120 52 108 58 C112 70 98 80 88 74 C82 84 66 84 60 74 C46 78 36 64 44 54 C38 52 40 46 46 44 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M64 34 C60 40 64 48 72 48 C80 48 84 40 78 34 C74 30 68 30 64 34 Z M72 48 C70 54 74 58 80 56" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M96 34 C92 38 94 46 100 46 C106 46 108 38 104 34 C101 31 99 31 96 34 Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M40 62 C28 66 20 76 22 86 C32 88 42 80 44 70" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M60 80 L48 128 M72 82 L62 132 M84 78 L76 128 M96 72 L88 122" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path pathLength="1" d="M56 104 C48 98 40 100 38 108 C44 114 54 112 56 104 Z M56 104 C64 110 74 108 76 100" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <path pathLength="1" d="M52 128 C46 140 40 152 34 160 M64 132 C62 144 60 154 58 164 M76 128 C78 140 82 152 88 160" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`
