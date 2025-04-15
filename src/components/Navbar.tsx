'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Submit', href: '/submit' },
  { label: 'Education', href: '/education' },
  { label: 'Events', href: '/events' },
  { label: 'Prints', href: '/prints' },
  { label: 'Media', href: '/media' },
  { label: 'Join', href: '/join' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full flex justify-center bg-black text-white py-4 shadow-md">
      <ul className="flex flex-wrap gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`px-3 py-1 rounded hover:bg-white hover:text-black transition ${
                pathname === item.href ? 'bg-white text-black' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
