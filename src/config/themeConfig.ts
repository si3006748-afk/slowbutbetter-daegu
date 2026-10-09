// 브랜드 컬러 임시 설정 — 우드 브라운 + 화이트 + 그린 포인트
// 실제 방문 사진·브랜드 가이드 확보 후 아래 값을 조정하세요.
export const themeConfig = {
  fonts: {
    main: ['Playfair Display', 'serif'],
    sans: ['Inter', 'sans-serif'],
  },
  googleFontsUrl:
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
  colors: {
    primary: '#5C4033', // 우드 브라운
    secondary: '#C4A882', // warm 베이지
    accent: '#3D6B4F', // 그린 포인트
    background: '#FAFAF8', // 화이트 톤
    surfaceText: '#2C2419',
  },
} as const
