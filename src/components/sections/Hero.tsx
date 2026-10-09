import { cafeConfig } from '../../config/cafeConfig'
import { FadeInSection } from '../common/FadeInSection'

export function Hero() {
  const { hero, tagline } = cafeConfig

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-primary/55" />

      <FadeInSection className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <p className="text-sm font-medium tracking-widest text-white/80 uppercase">
          Slow But Better
        </p>
        <h1 className="mt-3 font-main text-5xl font-bold tracking-tight md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-2 text-lg text-secondary md:text-xl">{hero.subtitle}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
          {tagline}
        </p>
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
