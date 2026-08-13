import { Camera, Globe, MessageCircle } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { social } = cafeConfig

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-main text-xl font-semibold">{cafeConfig.name}</h3>
            <p className="mt-1 text-sm text-white/80">{cafeConfig.tagline}</p>
          </div>

          <div className="flex items-center gap-4">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <Camera className="h-5 w-5" />
              </a>
            )}
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
            {social.kakao && (
              <a
                href={social.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors hover:bg-white/10"
                aria-label="Kakao"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>
            &copy; {currentYear} {cafeConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
