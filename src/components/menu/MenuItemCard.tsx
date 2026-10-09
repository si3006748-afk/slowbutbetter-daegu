import type { MenuItem, MenuItemTag } from '../../types/cafe'
import { cn } from '../../utils/cn'
import { FadeInSection } from '../common/FadeInSection'

const tagStyles: Record<MenuItemTag, string> = {
  signature: 'bg-primary text-white',
  bestseller: 'bg-accent text-white',
  season: 'bg-secondary text-primary',
}

const tagLabels: Record<MenuItemTag, string> = {
  signature: 'SIGNATURE',
  bestseller: 'BEST',
  season: 'SEASON',
}

interface MenuItemCardProps {
  item: MenuItem
  index?: number
  highlighted?: boolean
}

export function MenuItemCard({
  item,
  index = 0,
  highlighted = false,
}: MenuItemCardProps) {
  return (
    <FadeInSection delay={index * 80}>
      <article
        className={cn(
          'overflow-hidden rounded-2xl bg-background shadow-md transition-shadow hover:shadow-lg',
          highlighted && 'ring-2 ring-accent/40',
        )}
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="h-48 w-full object-cover"
          />
          {item.tags && item.tags.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide',
                    tagStyles[tag],
                  )}
                >
                  {tagLabels[tag]}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-main text-lg font-semibold text-primary">
              {item.name}
            </h3>
            <span className="shrink-0 font-medium text-accent">
              {item.price.toLocaleString()}원
            </span>
          </div>
          {item.description && (
            <p className="mt-2 text-sm text-surface-text/70">
              {item.description}
            </p>
          )}
        </div>
      </article>
    </FadeInSection>
  )
}
