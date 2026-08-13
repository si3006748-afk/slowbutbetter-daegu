import type { CafeConfig } from '../types/cafe'

export const cafeConfig: CafeConfig = {
  name: 'Moonlight Café',
  tagline: '하루의 쉼표, 달빛 같은 커피',
  description:
    'Moonlight Café는 신선하게 로스팅한 원두와 정성스럽게 만든 디저트로 따뜻한 순간을 선사합니다.',
  logo: 'https://placehold.co/120x40?text=Logo',
  hero: {
    title: 'Moonlight Café',
    subtitle: '매일 아침, 신선하게 로스팅한 커피 한 잔',
    backgroundImage: 'https://placehold.co/1920x1080?text=Hero+Image',
    ctaText: '메뉴 보기',
  },
  about: {
    title: '우리의 이야기',
    content:
      '2018년 작은 골목에서 시작한 Moonlight Café는 지역 커뮤니티와 함께 성장해 왔습니다. 우리는 지속 가능한 원두를 직접 선별하고, 바리스타 한 분 한 분이 정성껏 추출합니다. 커피 한 잔이 전하는 따뜻함을 믿으며, 방문하시는 모든 분께 편안한 쉼터가 되고자 합니다.',
    image: 'https://placehold.co/600x400?text=About+Image',
  },
  menu: [
    {
      id: 'coffee',
      name: '커피',
      items: [
        {
          id: 'americano',
          name: '아메리카노',
          description: '깊고 깔끔한 에스프레소 베이스',
          price: 4500,
          image: 'https://placehold.co/600x400?text=Americano',
        },
        {
          id: 'latte',
          name: '카페 라떼',
          description: '부드러운 스팀 밀크와 에스프레소',
          price: 5000,
          image: 'https://placehold.co/600x400?text=Latte',
        },
        {
          id: 'cold-brew',
          name: '콜드 브루',
          description: '12시간 저온 추출의 깊은 풍미',
          price: 5500,
          image: 'https://placehold.co/600x400?text=Cold+Brew',
        },
      ],
    },
    {
      id: 'dessert',
      name: '디저트',
      items: [
        {
          id: 'cheesecake',
          name: '뉴욕 치즈케이크',
          description: '크리미하고 진한 클래식 치즈케이크',
          price: 6500,
          image: 'https://placehold.co/600x400?text=Cheesecake',
        },
        {
          id: 'tiramisu',
          name: '티라미수',
          description: '마스카포네와 에스프레소의 조화',
          price: 7000,
          image: 'https://placehold.co/600x400?text=Tiramisu',
        },
      ],
    },
    {
      id: 'beverage',
      name: '음료',
      items: [
        {
          id: 'ade',
          name: '레몬 에이드',
          description: '상큼한 수제 레몬 에이드',
          price: 5500,
          image: 'https://placehold.co/600x400?text=Lemon+Ade',
        },
        {
          id: 'tea',
          name: '허브 티',
          description: '계절 허브 블렌드 티',
          price: 5000,
          image: 'https://placehold.co/600x400?text=Herb+Tea',
        },
      ],
    },
  ],
  gallery: [
    {
      id: 'gallery-1',
      src: 'https://placehold.co/600x400?text=Gallery+1',
      alt: '카페 인테리어',
    },
    {
      id: 'gallery-2',
      src: 'https://placehold.co/600x400?text=Gallery+2',
      alt: '라떼 아트',
    },
    {
      id: 'gallery-3',
      src: 'https://placehold.co/600x400?text=Gallery+3',
      alt: '디저트 디스플레이',
    },
    {
      id: 'gallery-4',
      src: 'https://placehold.co/600x400?text=Gallery+4',
      alt: '창가 좌석',
    },
    {
      id: 'gallery-5',
      src: 'https://placehold.co/600x400?text=Gallery+5',
      alt: '바리스타 추출',
    },
    {
      id: 'gallery-6',
      src: 'https://placehold.co/600x400?text=Gallery+6',
      alt: '야외 테라스',
    },
  ],
  reviews: [
    {
      id: 'review-1',
      author: '김민지',
      rating: 5,
      comment: '분위기도 좋고 커피 맛이 정말 훌륭해요. 주말마다 방문합니다!',
      date: '2026-01-15',
    },
    {
      id: 'review-2',
      author: '이준호',
      rating: 5,
      comment: '콜드 브루가 제일 맛있어요. 직원분들도 친절합니다.',
      date: '2026-02-03',
    },
    {
      id: 'review-3',
      author: '박서연',
      rating: 4,
      comment: '치즈케이크가 특히 추천! 조용히 작업하기 좋은 공간이에요.',
      date: '2026-02-20',
    },
  ],
  location: {
    address: '서울특별시 마포구 연남동 123-45',
    phone: '02-1234-5678',
    email: 'hello@moonlightcafe.kr',
    businessHours: [
      { day: '월–금', hours: '08:00 – 22:00' },
      { day: '토–일', hours: '09:00 – 23:00' },
      { day: '공휴일', hours: '10:00 – 21:00' },
    ],
    closedDays: ['매주 월요일'],
    mapProvider: 'kakao',
    coordinates: {
      lat: 37.5665,
      lng: 126.978,
    },
  },
  social: {
    instagram: 'https://instagram.com/moonlightcafe',
    facebook: 'https://facebook.com/moonlightcafe',
    kakao: 'https://pf.kakao.com/moonlightcafe',
  },
  navLinks: [
    { label: '소개', href: '#about' },
    { label: '메뉴', href: '#menu' },
    { label: '갤러리', href: '#gallery' },
    { label: '리뷰', href: '#reviews' },
    { label: '오시는 길', href: '#location' },
  ],
}
