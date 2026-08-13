import { useState } from 'react'
import { cafeConfig } from '../../config/cafeConfig'
import { cn } from '../../utils/cn'
import { FadeInSection } from '../common/FadeInSection'

export function Menu() {
  const { menu } = cafeConfig
  const [activeCategory, setActiveCategory] = useState(menu[0]?.id ?? '')

  const activeItems =
    menu.find((category) => category.id === activeCategory)?.items ?? []

  return (
    <section id="menu" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeInSection>
          <div className="text-center">
            <h2 className="font-main text-3xl font-bold text-primary md:text-4xl">
              메뉴
            </h2>
            <p className="mt-3 text-surface-text/70">
              신선한 원두와 정성스럽게 만든 디저트를 만나보세요
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {menu.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-background text-surface-text hover:bg-secondary/30',
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activeItems.map((item, index) => (
              <FadeInSection key={item.id} delay={index * 100}>
                <article className="overflow-hidden rounded-2xl bg-background shadow-md transition-shadow hover:shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-main text-lg font-semibold text-primary">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-medium text-accent">
                        {item.price.toLocaleString()}원
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-surface-text/70">
                      {item.description}
                    </p>
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
