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

// 照原版婚卡描的實色插畫:新郎捧花眨眼+新娘雙手比 OK
// (doodle--illust:不做描邊動畫,整張淡入)
export const doodleCoupleCheer = `
<svg viewBox="0 0 220 200" class="doodle doodle--couple doodle--illust" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 152 L40 106 C40 95 49 88 60 88 L72 88 C83 88 92 95 92 106 L92 152 Z" fill="#3f3d42" stroke="#2b2930" stroke-width="2" stroke-linejoin="round"/>
  <path d="M55 89 C58 98 62 104 66 108 C70 104 74 98 77 89 C70 92 62 92 55 89 Z" fill="#ffffff" stroke="#2b2930" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M55 89 L63 100 L60 107 M77 89 L69 100 L72 107" stroke="#2b2930" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M66 92 L57 87 L57 97 Z M66 92 L75 87 L75 97 Z" fill="#2b2930" stroke="#2b2930" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="66" cy="92" r="2.2" fill="#2b2930"/>
  <path d="M88 100 C92 92 90 84 87 78" stroke="#3f3d42" stroke-width="9" stroke-linecap="round"/>
  <circle cx="46" cy="62" r="3.2" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.6"/>
  <circle cx="86" cy="62" r="3.2" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.6"/>
  <ellipse cx="66" cy="60" rx="19" ry="20" fill="#ffe0c7" stroke="#2f2a28" stroke-width="2"/>
  <path d="M48 50 C46 31 55 24 66 24 C77 24 86 31 84 50 C80 39 74 35 66 35 C58 35 52 39 48 50 Z" fill="#332e2b" stroke="#2f2a28" stroke-width="2" stroke-linejoin="round"/>
  <path d="M54 51 Q58 48 62 50 M70 50 Q74 48 78 51" stroke="#2f2a28" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M54 58 Q58 61 62 58" stroke="#2f2a28" stroke-width="2" stroke-linecap="round"/>
  <circle cx="75" cy="58" r="2.1" fill="#2f2a28"/>
  <path d="M60 68 Q66 73 72 68" stroke="#2f2a28" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="52" cy="66" rx="3" ry="1.8" fill="#f5b3a6" opacity="0.85"/>
  <ellipse cx="80" cy="66" rx="3" ry="1.8" fill="#f5b3a6" opacity="0.85"/>
  <circle cx="86" cy="73" r="4.5" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.8"/>
  <path d="M85.5 69 L89.5 60.5" stroke="#2f2a28" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M85.5 69 L89.5 60.5" stroke="#ffe0c7" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M42 112 C54 124 68 130 82 129" stroke="#3f3d42" stroke-width="9" stroke-linecap="round"/>
  <circle cx="81" cy="128" r="3.4" fill="#ffffff" stroke="#2b2930" stroke-width="1.4"/>
  <circle cx="86" cy="128" r="4" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.8"/>
  <path d="M76 128 C84 132 100 132 108 127 L97 160 C93 164 87 164 84 160 Z" fill="#ffffff" stroke="#9c968f" stroke-width="2" stroke-linejoin="round"/>
  <path d="M92 131 L90 159" stroke="#d9d4ce" stroke-width="1.5"/>
  <path d="M72 116 C64 110 60 100 64 92 C72 96 76 106 74 116 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M108 114 C116 108 120 98 116 90 C108 94 104 104 106 114 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M70 124 C62 126 56 124 54 118 C60 114 68 117 70 124 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="78" cy="112" r="5" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.6"/>
  <circle cx="90" cy="105" r="5" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.6"/>
  <circle cx="102" cy="110" r="5" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.6"/>
  <circle cx="84" cy="121" r="5" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.6"/>
  <circle cx="97" cy="119" r="5" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.6"/>
  <circle cx="71" cy="105" r="2.6" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.4"/>
  <circle cx="108" cy="102" r="2.6" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.4"/>
  <circle cx="92" cy="97" r="2.6" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.4"/>
  <circle cx="78" cy="112" r="1.4" fill="#6e6862"/>
  <circle cx="90" cy="105" r="1.4" fill="#6e6862"/>
  <circle cx="102" cy="110" r="1.4" fill="#6e6862"/>
  <circle cx="84" cy="121" r="1.4" fill="#6e6862"/>
  <circle cx="97" cy="119" r="1.4" fill="#6e6862"/>
  <path d="M150 32 C136 32 128 43 129 58 C129 66 130 72 132 77 L168 77 C170 72 171 66 171 58 C172 43 164 32 150 32 Z" fill="#332e2b" stroke="#2f2a28" stroke-width="2" stroke-linejoin="round"/>
  <path d="M133 95 C140 90 160 90 167 95 L170 116 C176 138 178 152 176 162 L124 162 C122 152 124 138 130 116 Z" fill="#ffffff" stroke="#8f8a84" stroke-width="2" stroke-linejoin="round"/>
  <path d="M133 95 C142 99 158 99 167 95" stroke="#d9d4ce" stroke-width="1.5"/>
  <path d="M143 122 L140 158 M157 122 L160 158" stroke="#d9d4ce" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M147 78 h6 v12 h-6 z" fill="#ffe0c7"/>
  <path d="M129 58 C122 68 119 80 121 92 C116 106 118 118 124 128 C128 134 134 132 133 125 C129 114 129 102 131 92 C127 82 127 66 130 60 Z" fill="#332e2b" stroke="#2f2a28" stroke-width="2" stroke-linejoin="round"/>
  <path d="M171 58 C178 68 181 80 179 92 C184 106 182 118 176 128 C172 134 166 132 167 125 C171 114 171 102 169 92 C173 82 173 66 170 60 Z" fill="#332e2b" stroke="#2f2a28" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="133" cy="66" r="3" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.5"/>
  <circle cx="167" cy="66" r="3" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.5"/>
  <circle cx="136" cy="94" r="7" fill="#ffffff" stroke="#8f8a84" stroke-width="1.8"/>
  <circle cx="164" cy="94" r="7" fill="#ffffff" stroke="#8f8a84" stroke-width="1.8"/>
  <path d="M136 94 C128 86 120 76 114 64" stroke="#2f2a28" stroke-width="6.5" stroke-linecap="round"/>
  <path d="M136 94 C128 86 120 76 114 64" stroke="#ffe0c7" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M164 94 C172 86 180 76 186 64" stroke="#2f2a28" stroke-width="6.5" stroke-linecap="round"/>
  <path d="M164 94 C172 86 180 76 186 64" stroke="#ffe0c7" stroke-width="4.2" stroke-linecap="round"/>
  <ellipse cx="150" cy="64" rx="17" ry="18" fill="#ffe0c7" stroke="#2f2a28" stroke-width="2"/>
  <path d="M134 62 C132 44 140 37 150 37 C160 37 168 44 166 62 C164 50 158 45 150 45 C142 45 136 50 134 62 Z" fill="#332e2b" stroke="#2f2a28" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M156 30 C146 28 144 18 152 18 C158 18 158 26 156 30 Z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M160 30 C170 28 172 18 164 18 C158 18 158 26 160 30 Z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="158" cy="28" r="3" fill="#ffffff" stroke="#8f8a84" stroke-width="1.6"/>
  <path d="M139 56 Q143 53 147 55 M153 55 Q157 53 161 56" stroke="#2f2a28" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="143" cy="62" r="2.1" fill="#2f2a28"/>
  <circle cx="157" cy="62" r="2.1" fill="#2f2a28"/>
  <path d="M144 71 Q150 80 156 71 Q150 74 144 71 Z" fill="#b35f52" stroke="#2f2a28" stroke-width="1.5" stroke-linejoin="round"/>
  <ellipse cx="137" cy="68" rx="3" ry="1.8" fill="#f5b3a6" opacity="0.85"/>
  <ellipse cx="163" cy="68" rx="3" ry="1.8" fill="#f5b3a6" opacity="0.85"/>
  <path d="M108 51 L105 43 M112 50 L111 42 M116 51 L118 43" stroke="#2f2a28" stroke-width="3.8" stroke-linecap="round"/>
  <path d="M108 51 L105 43 M112 50 L111 42 M116 51 L118 43" stroke="#ffe0c7" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="112" cy="56" r="4.5" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.8"/>
  <circle cx="115" cy="62" r="3.2" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.8"/>
  <path d="M192 51 L195 43 M188 50 L189 42 M184 51 L182 43" stroke="#2f2a28" stroke-width="3.8" stroke-linecap="round"/>
  <path d="M192 51 L195 43 M188 50 L189 42 M184 51 L182 43" stroke="#ffe0c7" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="188" cy="56" r="4.5" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.8"/>
  <circle cx="185" cy="62" r="3.2" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.8"/>
  <path d="M22 34 l2.5 6 6 1-4.5 4.5 1 6-5-3.5-5 3.5 1-6-4.5-4.5 6-1z" fill="#f5c84c" stroke="#e0a92e" stroke-width="1" stroke-linejoin="round"/>
  <path d="M202 100 l2.5 6 6 1-4.5 4.5 1 6-5-3.5-5 3.5 1-6-4.5-4.5 6-1z" fill="#f5c84c" stroke="#e0a92e" stroke-width="1" stroke-linejoin="round"/>
</svg>`

// 照原版婚卡描的實色插畫:新人牽手高舉、鞠躬謝禮,四周金星星+月亮
export const doodleCoupleBow = `
<svg viewBox="0 0 220 170" class="doodle doodle--couple doodle--illust" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M58 142 L54 156 M72 144 L71 158" stroke="#2f2a28" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M58 142 L54 156 M72 144 L71 158" stroke="#ffe0c7" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M46 158 q4 -7 10 -3 l2 6 l-12 0 z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M64 160 q4 -7 10 -3 l2 6 l-12 0 z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M88 86 C72 78 52 82 42 96 C33 109 33 128 42 140 C58 150 80 146 90 132 C96 116 94 96 88 86 Z" fill="#ffffff" stroke="#8f8a84" stroke-width="2" stroke-linejoin="round"/>
  <path d="M45 136 C60 144 78 141 88 130" stroke="#d9d4ce" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M102 68 C86 66 66 76 52 94 C64 96 84 90 100 80 Z" fill="#f6f3f0" stroke="#d9d4ce" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M84 88 C88 80 96 76 102 80 C104 86 100 94 92 96 Z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M88 84 C80 66 70 46 62 24" stroke="#8f8a84" stroke-width="8.5" stroke-linecap="round"/>
  <path d="M88 84 C80 66 70 46 62 24" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  <path d="M96 80 C102 62 106 44 111 26" stroke="#8f8a84" stroke-width="8.5" stroke-linecap="round"/>
  <path d="M96 80 C102 62 106 44 111 26" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  <circle cx="61" cy="20" r="5.5" fill="#ffffff" stroke="#8f8a84" stroke-width="1.8"/>
  <circle cx="112" cy="23" r="5.5" fill="#ffffff" stroke="#8f8a84" stroke-width="1.8"/>
  <circle cx="105" cy="84" r="15" fill="#332e2b" stroke="#2f2a28" stroke-width="2"/>
  <circle cx="113" cy="67" r="7.5" fill="#332e2b" stroke="#2f2a28" stroke-width="2"/>
  <path d="M109 61 l1.5 -5 2.5 3.2 2.5 -3.2 1.5 5 z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M168 88 C166 104 161 118 157 130" stroke="#38322e" stroke-width="11" stroke-linecap="round"/>
  <path d="M182 84 C183 104 180 120 178 134" stroke="#38322e" stroke-width="11" stroke-linecap="round"/>
  <path d="M149 130 q5 -7 12 -3 l2.5 8 l-14.5 1 z" fill="#2f3a55" stroke="#232c42" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M170 134 q5 -7 12 -3 l2.5 8 l-14.5 1 z" fill="#2f3a55" stroke="#232c42" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M134 80 C146 58 164 46 178 47 C191 48 197 59 192 72 C186 90 169 101 152 105 C139 108 130 96 134 80 Z" fill="#38322e" stroke="#262019" stroke-width="2" stroke-linejoin="round"/>
  <path d="M138 90 C142 85 148 83 154 86 L149 98 C143 98 139 95 138 90 Z" fill="#ffffff" stroke="#8f8a84" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="134" cy="103" r="14.5" fill="#332e2b" stroke="#2f2a28" stroke-width="2"/>
  <path d="M136 86 C130 66 124 44 116 28" stroke="#38322e" stroke-width="8" stroke-linecap="round"/>
  <circle cx="116" cy="26" r="5" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.6"/>
  <path d="M178 58 C184 46 188 34 191 22" stroke="#38322e" stroke-width="8" stroke-linecap="round"/>
  <circle cx="192" cy="19" r="5" fill="#ffe0c7" stroke="#2f2a28" stroke-width="1.6"/>
  <path d="M109 12 L109 5 M99 15 L94 9 M119 15 L124 9" stroke="#f0b429" stroke-width="2" stroke-linecap="round"/>
  <path transform="translate(50 118) scale(6) rotate(12)" d="M0 -1 L0.224 -0.309 L0.951 -0.309 L0.363 0.118 L0.588 0.809 L0 0.382 L-0.588 0.809 L-0.363 0.118 L-0.951 -0.309 L-0.224 -0.309 Z" fill="#f5c84c" stroke="#e0a92e" stroke-width="0.18" stroke-linejoin="round"/>
  <path transform="translate(108 148) scale(9) rotate(-8)" d="M0 -1 L0.224 -0.309 L0.951 -0.309 L0.363 0.118 L0.588 0.809 L0 0.382 L-0.588 0.809 L-0.363 0.118 L-0.951 -0.309 L-0.224 -0.309 Z" fill="#f5c84c" stroke="#e0a92e" stroke-width="0.14" stroke-linejoin="round"/>
  <path transform="translate(163 62) scale(7) rotate(18)" d="M0 -1 L0.224 -0.309 L0.951 -0.309 L0.363 0.118 L0.588 0.809 L0 0.382 L-0.588 0.809 L-0.363 0.118 L-0.951 -0.309 L-0.224 -0.309 Z" fill="#f5c84c" stroke="#e0a92e" stroke-width="0.16" stroke-linejoin="round"/>
  <path transform="translate(86 58) scale(3.5)" d="M0 -1 L0.224 -0.309 L0.951 -0.309 L0.363 0.118 L0.588 0.809 L0 0.382 L-0.588 0.809 L-0.363 0.118 L-0.951 -0.309 L-0.224 -0.309 Z" fill="#f5c84c" stroke="#e0a92e" stroke-width="0.24" stroke-linejoin="round"/>
  <path transform="translate(203 138) scale(4) rotate(20)" d="M0 -1 L0.224 -0.309 L0.951 -0.309 L0.363 0.118 L0.588 0.809 L0 0.382 L-0.588 0.809 L-0.363 0.118 L-0.951 -0.309 L-0.224 -0.309 Z" fill="#f5c84c" stroke="#e0a92e" stroke-width="0.22" stroke-linejoin="round"/>
  <path d="M198 96 a11 11 0 1 0 10 17 a8.5 8.5 0 1 1 -10 -17 z" fill="#f5c84c" stroke="#e0a92e" stroke-width="1" stroke-linejoin="round"/>
</svg>`

// 照原版婚卡風格的實色捧花:白色小花+綠葉+白紙包裝(拱窗照片右下角)
export const doodleBouquet = `
<svg viewBox="0 0 140 170" class="doodle doodle--bouquet doodle--illust" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M62 30 q-3 -10 5 -16 q7 6 0 16 z" fill="#7f915f" stroke="#66774a" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M80 30 q3 -10 -5 -16 q-7 6 0 16 z" fill="#7f915f" stroke="#66774a" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M42 60 C32 54 27 44 31 34 C41 38 46 50 44 60 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M98 58 C108 52 113 42 109 32 C99 36 94 48 96 58 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M42 76 C32 80 24 78 20 70 C28 64 38 68 42 76 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M98 74 C108 78 116 76 120 68 C112 62 102 66 98 74 Z" fill="#7f915f" stroke="#66774a" stroke-width="1.5" stroke-linejoin="round"/>
  <circle cx="52" cy="52" r="7" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.8"/>
  <circle cx="70" cy="42" r="7" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.8"/>
  <circle cx="88" cy="52" r="7" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.8"/>
  <circle cx="58" cy="68" r="7" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.8"/>
  <circle cx="80" cy="68" r="7" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.8"/>
  <circle cx="70" cy="58" r="6" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.8"/>
  <circle cx="40" cy="48" r="3.2" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.5"/>
  <circle cx="100" cy="46" r="3.2" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.5"/>
  <circle cx="62" cy="32" r="3.2" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.5"/>
  <circle cx="82" cy="32" r="3.2" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.5"/>
  <circle cx="48" cy="78" r="3.2" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.5"/>
  <circle cx="92" cy="78" r="3.2" fill="#fdfcf8" stroke="#8a847d" stroke-width="1.5"/>
  <circle cx="52" cy="52" r="1.8" fill="#6e6862"/>
  <circle cx="70" cy="42" r="1.8" fill="#6e6862"/>
  <circle cx="88" cy="52" r="1.8" fill="#6e6862"/>
  <circle cx="58" cy="68" r="1.8" fill="#6e6862"/>
  <circle cx="80" cy="68" r="1.8" fill="#6e6862"/>
  <circle cx="70" cy="58" r="1.6" fill="#6e6862"/>
  <path d="M36 80 C48 88 92 88 104 80 L84 148 C78 154 62 154 56 148 Z" fill="#ffffff" stroke="#9c968f" stroke-width="2" stroke-linejoin="round"/>
  <path d="M36 80 C48 76 92 76 104 80" stroke="#d9d4ce" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M52 84 L62 146 M88 84 L78 146" stroke="#d9d4ce" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M70 106 c-2.5 -3.4 -6.6 -1.2 -6.6 1.8 c0 3 3.6 5.5 6.6 7.8 c3 -2.3 6.6 -4.8 6.6 -7.8 c0 -3 -4.1 -5.2 -6.6 -1.8 z" fill="currentColor"/>
  <path d="M66 152 C62 158 60 162 56 166 M74 152 C77 158 79 162 82 166" stroke="#c9c4be" stroke-width="2" stroke-linecap="round"/>
</svg>`
