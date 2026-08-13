import { cafeConfig } from '../../config/cafeConfig'
import { FadeInSection } from '../common/FadeInSection'

export function About() {
  const { about } = cafeConfig

  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeInSection>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-main text-3xl font-bold text-primary md:text-4xl">
                {about.title}
              </h2>
              <p className="mt-6 leading-relaxed text-surface-text/80">
                {about.content}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={about.image}
                alt={about.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
