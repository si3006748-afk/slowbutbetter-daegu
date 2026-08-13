import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'
import { cn } from '../../utils/cn'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 shadow-md backdrop-blur-sm'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={cafeConfig.logo}
              alt={`${cafeConfig.name} logo`}
              className="h-8 w-auto"
            />
            <span
              className={cn(
                'hidden font-main text-lg font-semibold sm:inline',
                isScrolled ? 'text-primary' : 'text-white',
              )}
            >
              {cafeConfig.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {cafeConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-secondary',
                  isScrolled ? 'text-surface-text' : 'text-white/90',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className={cn(
              'rounded-lg p-2 transition-colors md:hidden',
              isScrolled
                ? 'text-primary hover:bg-primary/10'
                : 'text-white hover:bg-white/10',
            )}
            aria-label="메뉴 열기"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-background shadow-xl transition-transform duration-300 md:hidden',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!isDrawerOpen}
      >
        <div className="flex items-center justify-between border-b border-secondary/20 p-4">
          <span className="font-main text-lg font-semibold text-primary">
            {cafeConfig.name}
          </span>
          <button
            type="button"
            onClick={closeDrawer}
            className="rounded-lg p-2 text-primary hover:bg-primary/10"
            aria-label="메뉴 닫기"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {cafeConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="rounded-lg px-4 py-3 text-surface-text transition-colors hover:bg-secondary/20 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
