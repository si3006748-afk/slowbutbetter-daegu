import { Star } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'
import { FadeInSection } from '../common/FadeInSection'

export function Reviews() {
  const { reviews } = cafeConfig

  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeInSection>
          <div className="text-center">
            <h2 className="font-main text-3xl font-bold text-primary md:text-4xl">
              고객 리뷰
            </h2>
            <p className="mt-3 text-surface-text/70">
              방문해 주신 분들의 소중한 이야기
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <FadeInSection key={review.id} delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl bg-background p-6 shadow-md">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-secondary text-secondary'
                            : 'text-secondary/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-surface-text/80">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-secondary/20 pt-4">
                    <p className="font-medium text-primary">{review.author}</p>
                    <p className="text-xs text-surface-text/50">{review.date}</p>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
