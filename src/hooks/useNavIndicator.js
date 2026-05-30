import { useEffect, useRef } from 'react'

export function useNavIndicator(links, pathname) {
  const navbarRef = useRef()
  const tabRefs = useRef({})

  useEffect(() => {
    const moveIndicator = () => {
      const activeLink =
        links.find((link) =>
          link.to === '/' ? pathname === '/' : pathname.startsWith(link.to),
        ) ?? links[0]
      const firstTab = tabRefs.current[links[0].name]
      const activeTab = tabRefs.current[activeLink.name]

      if (!navbarRef.current || !firstTab || !activeTab) return

      const firstTabOffset = firstTab.offsetLeft
      navbarRef.current.style.setProperty('--_left', `${firstTabOffset}px`)
      navbarRef.current.style.setProperty(
        '--_offset',
        `${activeTab.offsetLeft - firstTabOffset}px`,
      )
      navbarRef.current.style.setProperty(
        '--_width',
        `${activeTab.offsetWidth}px`,
      )
    }

    moveIndicator()
    window.addEventListener('resize', moveIndicator)

    return () => window.removeEventListener('resize', moveIndicator)
  }, [links, pathname])

  return { navbarRef, tabRefs }
}
