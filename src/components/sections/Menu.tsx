import { useMemo, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'
import { cn } from '../../utils/cn'
import { FadeInSection } from '../common/FadeInSection'
import { MenuItemCard } from '../menu/MenuItemCard'

function findMenuItem(id: string) {
  for (const category of cafeConfig.menu) {
    const found = category.items.find((item) => item.id === id)
    if (found) return found
  }
  return undefined
}

export function Menu() {
  const { menu, menuHighlights, menuSubtitle } = cafeConfig
  const [activeCategory, setActiveCategory] = useState(menu[0]?.id ?? '')
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({})

  const highlightItems = useMemo(
    () =>
      menuHighlights
        .map((id) => findMenuItem(id))
        .filter((item): item is NonNullable<typeof item> => item !== undefined),
    [menuHighlights],
  )

  const activeCategoryData = menu.find(
    (category) => category.id === activeCategory,
  )
  const isExpanded = expandedCategories[activeCategory] ?? false

  const displayItems = useMemo(() => {
    if (!activeCategoryData) return []
    if (isExpanded) return activeCategoryData.items

    const featured = activeCategoryData.items.filter((item) => item.featured)
    if (featured.length > 0) return featured
    return activeCategoryData.items.slice(0, 4)
  }, [activeCategoryData, isExpanded])

  const hasMoreItems =
    activeCategoryData !== undefined &&
    displayItems.length < activeCategoryData.items.length

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const toggleExpand = () => {
    setExpandedCategories((prev) => ({
      ...prev,
      [activeCategory]: !isExpanded,
    }))
  }

  return (
    <section id="menu" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeInSection>
          <div className="text-center">
            <h2 className="font-main text-3xl font-bold text-primary md:text-4xl">
              메뉴
            </h2>
            {menuSubtitle && (
              <p className="mt-3 text-surface-text/70">{menuSubtitle}</p>
            )}
          </div>

          {highlightItems.length > 0 && (
            <div className="mt-14">
              <h3 className="text-center font-main text-xl font-semibold text-primary md:text-2xl">
                시그니처 &amp; 베스트
              </h3>
              <p className="mt-2 text-center text-sm text-surface-text/60">
                슬로우벗베럴 대구점 대표 메뉴
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {highlightItems.map((item, index) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    index={index}
                    highlighted
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 flex flex-wrap justify-center gap-2">
            {menu.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-background text-surface-text hover:bg-secondary/30',
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayItems.map((item, index) => (
              <MenuItemCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {activeCategoryData && activeCategoryData.items.length > 4 && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={toggleExpand}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                {isExpanded ? (
                  <>
                    접기
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    전체 메뉴 보기 ({activeCategoryData.items.length}개)
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}

          {!isExpanded && hasMoreItems && activeCategoryData && (
            <p className="mt-4 text-center text-xs text-surface-text/50">
              {activeCategoryData.name} 카테고리 대표 메뉴만 표시 중입니다
            </p>
          )}
        </FadeInSection>
      </div>
    </section>
  )
}
