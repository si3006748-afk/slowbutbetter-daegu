# cafe-starter

React + Vite + TypeScript + Tailwind CSS 기반의 **카페 웹사이트 스타터 프로젝트**입니다.  
모든 콘텐츠는 `cafeConfig.ts` 한 곳에서 관리하며, 새 카페 프로젝트를 빠르게 시작할 수 있도록 설계되었습니다.

## 프로젝트 초기 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

개발 서버 실행 후 터미널에 표시되는 로컬 URL(기본: `http://localhost:5173`)에서 확인할 수 있습니다.

## 새 카페 프로젝트 시작하기

`src/config/cafeConfig.ts` 파일을 수정하면 사이트 전체 콘텐츠가 변경됩니다.

| 항목 | 설명 |
|------|------|
| `name`, `tagline`, `description` | 카페 이름, 슬로건, 소개 |
| `logo` | 헤더 로고 이미지 URL |
| `hero` | 메인 히어로 섹션 (제목, 부제, 배경 이미지, CTA) |
| `about` | 소개 섹션 텍스트 및 이미지 |
| `menu` | 카테고리별 메뉴 (이름, 설명, 가격, 이미지) |
| `gallery` | 갤러리 이미지 목록 |
| `reviews` | 고객 리뷰 |
| `location` | 주소, 연락처, 영업시간, 지도 제공자(`naver` \| `kakao`) |
| `social` | SNS 링크 (Instagram, Facebook, Kakao 등) |
| `navLinks` | 헤더/모바일 메뉴 네비게이션 |

타입 정의는 `src/types/cafe.ts`에서 확인할 수 있습니다.

## 브랜드 색상 및 폰트 변경

### 색상

`tailwind.config.js`의 `theme.extend.colors`에서 브랜드 색상을 수정합니다.

```js
colors: {
  primary: '#6F4E37',      // 메인 브랜드 색
  secondary: '#D4A574',    // 보조 색
  accent: '#2D5016',       // 강조 색
  background: '#FAF7F2',   // 배경색
  'surface-text': '#3D3229', // 본문 텍스트
}
```

참고용 색상 값은 `src/config/themeConfig.ts`에도 정의되어 있습니다.

### 폰트

1. `tailwind.config.js`의 `theme.extend.fontFamily`에서 `main`(제목), `sans`(본문) 폰트를 변경합니다.
2. `src/index.css` 상단의 Google Fonts `@import` URL을 새 폰트에 맞게 수정합니다.
3. `src/config/themeConfig.ts`의 `googleFontsUrl`도 함께 업데이트하면 문서와 설정이 일치합니다.

## 이미지 및 아이콘 교체

### 이미지

- `cafeConfig.ts`의 각 `image`, `src`, `backgroundImage`, `logo` 필드에 실제 이미지 URL 또는 `/public` 폴더 내 경로를 입력합니다.
- 기본값은 `https://placehold.co/` placeholder URL입니다.
- 로컬 이미지 사용 시 `public/images/` 폴더에 파일을 넣고 `/images/파일명.jpg` 형식으로 참조합니다.

### 아이콘

- UI 아이콘은 [lucide-react](https://lucide.dev/)에서 제공합니다.
- `Header.tsx`, `Footer.tsx`, `Reviews.tsx`, `Location.tsx` 등에서 import된 아이콘을 원하는 것으로 교체할 수 있습니다.

## 폴더 구조

```
src/
├── components/
│   ├── common/       # FadeInSection 등 공통 컴포넌트
│   ├── layout/       # Header, Footer
│   └── sections/     # Hero, About, Menu, Gallery, Reviews, Location
├── config/           # cafeConfig.ts, themeConfig.ts
├── types/            # TypeScript 인터페이스
└── utils/            # cn (clsx + tailwind-merge)
```

## 지도 API 연동

`src/components/sections/Location.tsx` 파일 상단 주석에 카카오맵/네이버맵 SDK 연동 가이드가 포함되어 있습니다.  
`cafeConfig.location.mapProvider` 값을 `"kakao"` 또는 `"naver"`로 설정한 뒤, `index.html`에 해당 SDK 스크립트를 추가하고 Placeholder 영역을 실제 지도 컴포넌트로 교체하세요.

## 기술 스택

- React 19 + Vite 8
- TypeScript
- Tailwind CSS 4
- lucide-react (아이콘)
- clsx + tailwind-merge (클래스 유틸)
