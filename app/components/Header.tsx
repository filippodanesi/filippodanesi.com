'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header>
      <div className="header-content">
        <Link href="/" className="logo">Filippo Danesi</Link>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/projects" className={pathname.startsWith('/projects') ? 'active' : ''}>Projects</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <a href="https://www.serp-secrets.com" target="_blank" rel="noopener">Blog</a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="menu-toggle nav-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`nav-mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <nav className="nav-mobile-content">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/projects" className={pathname.startsWith('/projects') ? 'active' : ''}>Projects</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <a href="https://www.serp-secrets.com" target="_blank" rel="noopener">Blog</a>
        </nav>
      </div>
    </header>
  )
}
