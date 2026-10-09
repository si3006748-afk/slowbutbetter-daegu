import { cafeConfig } from '../../config/cafeConfig'
import { FadeInSection } from '../common/FadeInSection'

export function Gallery() {
  const { gallery, gallerySubtitle } = cafeConfig

  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeInSection>
          <div className="text-center">
            <h2 className="font-main text-3xl font-bold text-primary md:text-4xl">
              갤러리
            </h2>
            {gallerySubtitle && (
              <p className="mt-3 text-surface-text/70">{gallerySubtitle}</p>
            )}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <FadeInSection key={image.id} delay={index * 80}>
                <div className="group overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
