export interface NavLink {
  label: string
  href: string
}

export interface HeroConfig {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText: string
}

export interface AboutConfig {
  title: string
  content: string
  image: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export interface BusinessHours {
  day: string
  hours: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface LocationConfig {
  address: string
  phone: string
  email: string
  businessHours: BusinessHours[]
  closedDays?: string[]
  mapProvider: 'naver' | 'kakao'
  coordinates?: Coordinates
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  twitter?: string
  kakao?: string
}

export interface CafeConfig {
  name: string
  tagline: string
  description: string
  logo: string
  hero: HeroConfig
  about: AboutConfig
  menu: MenuCategory[]
  gallery: GalleryImage[]
  reviews: Review[]
  location: LocationConfig
  social: SocialLinks
  navLinks: NavLink[]
}
