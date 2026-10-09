import type { CafeConfig, MenuItem } from '../types/cafe'

const img = (label: string) =>
  `https://placehold.co/600x400/E8DFD4/5C4033?text=${encodeURIComponent(label)}`

const item = (
  id: string,
  name: string,
  price: number,
  options: Partial<Omit<MenuItem, 'id' | 'name' | 'price'>> = {},
): MenuItem => ({
  id,
  name,
  price,
  description: options.description ?? '',
  image: options.image ?? img(name),
  tags: options.tags,
  featured: options.featured,
})

export const cafeConfig: CafeConfig = {
  name: '슬로우벗베럴 대구점',
  tagline: '대구판 루브르, 오래된 사우나 건물의 리모델링 카페&베이커리',
  description:
    '오래된 사우나 건물을 리모델링한 대형 카페&베이커리. 독특한 건축미로 \'대구판 루브르\'라 불리며, 실내외 다양한 포토존을 갖춘 공간입니다.',
  logo: null,
  useTextLogo: true,
  hero: {
    title: '슬로우벗베럴',
    subtitle: '대구점 — 건축과 베이커리가 만나는 대형 카페',
    backgroundImage:
      'https://placehold.co/1920x1080/E8DFD4/5C4033?text=Slow+But+Better+Daegu',
    ctaText: '메뉴 보기',
  },
  about: {
    title: '공간 이야기',
    content:
      '옛 사우나 건물을 리모델링해 탄생한 슬로우벗베럴 대구점은 예술적·건축적인 인테리어와 넓은 실내외 공간이 조화를 이룹니다. 우드톤과 화이트, 식물 요소가 어우러진 톤 속에서 공간마다 다른 컨셉의 포토존을 만날 수 있습니다. 대형 베이커리와 시그니처 커피, 자체 농장 재료를 활용한 계절 한정 메뉴까지 — 데이트, 나들이, 가족 방문 모두를 위한 카페입니다.',
    image:
      'https://placehold.co/600x400/E8DFD4/5C4033?text=Interior+Space',
    highlights: [
      '건물 안쪽 대형 주차장, 약 80대 무료 주차',
      '공간마다 다른 컨셉의 실내·외 포토존',
      '대형 베이커리 & 시그니처 커피',
      '살구·복숭아 등 자체 농장 재료 계절 메뉴',
    ],
  },
  menuHighlights: [
    'barrel-white',
    'caramel-ice',
    'caramel-donut-latte',
    'chestnut-bread',
    'salt-bread',
  ],
  menuSubtitle:
    '시그니처 커피부터 대형 베이커리, 계절 한정 메뉴까지',
  menu: [
    {
      id: 'coffee',
      name: '커피',
      items: [
        item('americano', '아메리카노', 5500),
        item('espresso', '에스프레소', 5500),
        item('cafe-latte', '카페라떼', 5800),
        item('cappuccino-hot', '카푸치노 (HOT)', 5800),
        item('barrel-white', '베럴 화이트 (ICE)', 6300, {
          tags: ['signature'],
          featured: true,
          description: '슬로우벗베럴 시그니처 화이트 커피',
        }),
        item('vanilla-bean-latte', '바닐라 빈 라떼', 6000),
        item('ethiopia-hand-drip', '에티오피아 첼베사 내추럴 (핸드드립)', 6300, {
          featured: true,
          description: '핸드드립 스페셜티',
        }),
        item('caramel-ice', '카라멜 (ICE)', 6700, {
          tags: ['signature'],
          featured: true,
        }),
        item('caramel-donut-latte', '카라멜 도넛라떼 (HOT)', 6700, {
          tags: ['signature'],
          featured: true,
        }),
        item('choco-latte', '초코라떼', 5700),
      ],
    },
    {
      id: 'tea-ade-smoothie',
      name: '티 / 에이드 / 스무디',
      items: [
        item('peach-ice-tea', '복숭아 아이스티', 5500, { featured: true }),
        item('herbal-tea', '캐모마일 / 얼그레이 / 히비스커스', 5100),
        item('ginger-tea', '생강차', 5700),
        item('jeju-matcha-latte', '제주말차라떼', 6100, { featured: true }),
        item('omija-mong', '오미자몽 (ICE/HOT)', 6100),
        item('green-tangerine-omija-ade', '청귤오미자에이드', 6700, {
          featured: true,
        }),
        item('mango-lemon-ade', '망고레몬에이드', 6700),
        item('chamoe-honey-latte', '참외가득꿀라떼', 7100, { featured: true }),
        item('chamoe-honey-smoothie', '참외가득꿀스무디', 7300),
        item('apricot-ice-cream', '살구가득 아이스크림', 7500, {
          tags: ['season'],
          description: '여름 한정',
        }),
        item('apricot-smoothie', '살구가득 스무디', 7500, {
          tags: ['season'],
          featured: true,
          description: '여름 한정',
        }),
        item('peach-yogurt-latte', '피치 요거트라떼', 7500),
        item('watermelon-juice', '수박 생과일주스', 7900, {
          tags: ['season'],
          description: '여름 한정',
        }),
      ],
    },
    {
      id: 'bakery',
      name: '베이커리',
      items: [
        item('plain-blue-cheese-financier', '플레인 블루치즈 휘낭시에', 3000),
        item('ringel-lemon-madeleine', '링겔 레몬 마들렌', 3000),
        item('ringel-choco-madeleine', '링겔 초코마들렌', 3000),
        item('egg-tart', '에그타르트', 3200),
        item('salt-bread', '소금빵', 3200, {
          tags: ['bestseller'],
          featured: true,
          description: '베스트셀러',
        }),
        item('castella-salt-bread', '카스테라 소금빵', 4700),
        item('croissant', '크로와상', 5100),
        item('cheese-ciabatta', '치즈 치아바타', 5300),
        item('dirty-choco-croissant', '더티초코 크로와상', 5900, {
          featured: true,
        }),
        item('pain-au-chocolat', '뺑오쇼콜라', 5500),
        item('mascarpone-mocha-bun', '마스카포네 모카번', 5700),
        item('matcha-white-choco-scone', '말차 화이트 초코스콘', 5900),
        item('chestnut-bread', '알밤식빵', 5900, {
          tags: ['bestseller'],
          featured: true,
          description: '베스트셀러',
        }),
        item('ang-butter', '앙버터', 6100),
        item('mont-blanc', '몽블랑', 6300, { featured: true }),
        item('apricot-danish', '살구가득 데니쉬', 6900, {
          tags: ['season'],
          description: '계절 한정',
        }),
        item('peach-brot-kuchen', '복숭아 브로트쿠헨', 6900),
        item('cheese-ciabatta-sandwich', '치즈 치아바타 샌드위치', 7900),
        item('peach-bottle', '복숭아가득보틀', 7900),
      ],
    },
    {
      id: 'cake-bingsu',
      name: '케이크 / 빙수',
      items: [
        item('chocolate-onoa', '쇼콜라 오노아', 13000, { featured: true }),
        item('walnut-marron-pound', '호두마룽 파운드', 15000),
        item('apple-crumble-pound', '애플크럼블 파운드', 15000),
        item('old-redbean-bingsu', '옛날 팥빙수', 15000, { featured: true }),
        item('peach-bingsu', '복숭아가득빙수', 27000, {
          tags: ['season'],
          featured: true,
          description: '여름 한정',
        }),
      ],
    },
    {
      id: 'side',
      name: '사이드',
      items: [
        item('mini-jam', '알랭밀리아 미니잼 (무화과/살구/딸기)', 1700, {
          featured: true,
        }),
        item('balsamic-sauce', '발사믹 소스', 1700),
        item('organic-juice', '오가닉 적포도/사과/오렌지 주스', 1900, {
          featured: true,
        }),
      ],
    },
  ],
  gallerySubtitle: '건축미와 포토존이 어우러진 슬로우벗베럴 대구점',
  gallery: [
    {
      id: 'gallery-1',
      src: 'https://placehold.co/600x400/E8DFD4/5C4033?text=Architecture',
      alt: '리모델링 건축 외관',
    },
    {
      id: 'gallery-2',
      src: 'https://placehold.co/600x400/E8DFD4/5C4033?text=Wood+Interior',
      alt: '우드톤 인테리어',
    },
    {
      id: 'gallery-3',
      src: 'https://placehold.co/600x400/E8DFD4/5C4033?text=Bakery+Display',
      alt: '대형 베이커리 디스플레이',
    },
    {
      id: 'gallery-4',
      src: 'https://placehold.co/600x400/E8DFD4/5C4033?text=Photo+Zone',
      alt: '실내 포토존',
    },
    {
      id: 'gallery-5',
      src: 'https://placehold.co/600x400/E8DFD4/5C4033?text=Outdoor+Space',
      alt: '야외 공간',
    },
    {
      id: 'gallery-6',
      src: 'https://placehold.co/600x400/E8DFD4/5C4033?text=Season+Menu',
      alt: '계절 한정 메뉴',
    },
  ],
  reviews: [
    {
      id: 'review-1',
      author: '방문객 A',
      rating: 5,
      comment:
        '건물 자체가 너무 예뻐요! 포토존이 많아서 데이트 코스로 최고입니다. 베럴 화이트 꼭 드세요.',
      date: '2026-07-12',
    },
    {
      id: 'review-2',
      author: '방문객 B',
      rating: 5,
      comment:
        '주차장이 넓어서 가족 단위로 오기 편해요. 알밤식빵이랑 소금빵은 무조건 테이크아웃!',
      date: '2026-07-28',
    },
    {
      id: 'review-3',
      author: '방문객 C',
      rating: 5,
      comment:
        '대구판 루브르라는 말이 과장이 아니에요. 공간마다 분위기가 달라서 구경하는 재미가 있어요.',
      date: '2026-08-05',
    },
  ],
  location: {
    address: '대구광역시 동구 신평로 113',
    phone: '0507-1305-9611',
    businessHours: [
      { day: '매일', hours: '10:30 – 22:00' },
      { day: '라스트오더', hours: '21:30' },
    ],
    parking: '건물 안쪽 대형 주차장, 약 80대 동시 주차 가능 (무료)',
    mapProvider: 'naver',
    coordinates: {
      lat: 35.8714,
      lng: 128.6348,
    },
  },
  social: {
    instagram: 'https://instagram.com/slow_but_better_official',
  },
  navLinks: [
    { label: '소개', href: '#about' },
    { label: '메뉴', href: '#menu' },
    { label: '갤러리', href: '#gallery' },
    { label: '리뷰', href: '#reviews' },
    { label: '오시는 길', href: '#location' },
  ],
}
