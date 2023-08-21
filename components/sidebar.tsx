'use client'

import { LayoutDashboard, ShoppingCart, Timer, Users2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col items-center w-64 h-screen px-6 border-r row-span-full py-14 border-slate-200">
      <h2 className="mb-16 text-3xl font-semibold">
        <span className="text-sky-500">e</span>
        Psic
      </h2>

      <nav className="w-full">
        <ul className="flex flex-col items-center gap-8">
          <li
            className={`w-full flex gap-2 py-2 px-4 rounded-md ${
              pathname === '/' ? 'bg-stone-50' : ''
            }`}
          >
            <LayoutDashboard
              className={`${pathname === '/' ? 'text-sky-500' : ''}`}
            />
            <Link
              href="/"
              className={`${
                pathname === '/' ? 'text-sky-500 font-medium' : ''
              }`}
            >
              Dashboard
            </Link>
          </li>

          <li
            className={`w-full flex gap-2 py-2 px-4 rounded-md ${
              pathname === '/patients' ? 'bg-stone-50' : ''
            }`}
          >
            <Users2
              className={`${pathname === '/patients' ? 'text-sky-500' : ''}`}
            />
            <Link
              href="/patients"
              className={`${
                pathname === '/patients' ? 'text-sky-500 font-medium' : ''
              }`}
            >
              Pacientes
            </Link>
          </li>

          <li
            className={`w-full flex gap-2 py-2 px-4 rounded-md ${
              pathname === '/schedules' ? 'bg-stone-50' : ''
            }`}
          >
            <Timer
              className={`${pathname === '/schedules' ? 'text-sky-500' : ''}`}
            />
            <Link
              href="/schedules"
              className={`${
                pathname === '/schedules' ? 'text-sky-500 font-medium' : ''
              }`}
            >
              Horários
            </Link>
          </li>

          <li
            className={`w-full flex gap-2 py-2 px-4 rounded-md ${
              pathname === '/transactions' ? 'bg-stone-50' : ''
            }`}
          >
            <ShoppingCart
              className={`${
                pathname === '/transactions' ? 'text-sky-500' : ''
              }`}
            />
            <Link
              href="/transactions"
              className={`${
                pathname === '/transactions' ? 'text-sky-500 font-medium' : ''
              }`}
            >
              Transações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
