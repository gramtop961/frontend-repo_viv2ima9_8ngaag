import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 ring-2 ring-blue-500/30" />
            <span className="text-xl tracking-wide font-semibold text-blue-100">Éclat Bijoux</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
            <a href="#collections" className="hover:text-blue-100 transition-colors">Collections</a>
            <a href="#about" className="hover:text-blue-100 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-100 transition-colors">Contact</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-blue-100 hover:bg-slate-800/60"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-slate-800/60 text-blue-100/90">
            <a href="#collections" className="block py-2">Collections</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
