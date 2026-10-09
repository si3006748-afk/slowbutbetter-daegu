import { Camera, Clock, MapPin, ParkingCircle, Phone } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { social, location, name, tagline } = cafeConfig

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-main text-xl font-semibold">{name}</h3>
            <p className="mt-2 text-sm text-white/80">{tagline}</p>
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Camera className="h-4 w-4" />
                @slow_but_better_official
              </a>
            )}
          </div>

          <div className="space-y-3 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${location.phone}`} className="hover:text-white">
                {location.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                {location.businessHours.map((schedule) => (
                  <p key={schedule.day}>
                    {schedule.day} {schedule.hours}
                  </p>
                ))}
                <p className="mt-1 text-white/60">연중무휴</p>
              </div>
            </div>
            {location.parking && (
              <div className="flex items-start gap-3">
                <ParkingCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{location.parking}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p className="text-xs text-white/50">포트폴리오 예시</p>
          <p className="mt-2">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
