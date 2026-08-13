import { cafeConfig } from '../../config/cafeConfig'
import { FadeInSection } from '../common/FadeInSection'

export function Hero() {
  const { hero } = cafeConfig

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <FadeInSection className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="font-main text-5xl font-bold tracking-tight md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-4 text-lg text-white/90 md:text-xl">{hero.subtitle}</p>
        <a
          href="#menu"
          className="mt-8 inline-block rounded-full bg-secondary px-8 py-3 font-medium text-primary transition-transform hover:scale-105 hover:bg-secondary/90"
        >
          {hero.ctaText}
        </a>
      </FadeInSection>
    </section>
  )
}
