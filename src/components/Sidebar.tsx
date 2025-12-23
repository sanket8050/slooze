"use client"

import Link from "next/link"
import { useAuth } from "@/src/context/AuthContext"
import { ROLES } from "@/src/lib/roles"

export default function Sidebar() {
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <aside className="w-64 border-r p-4 space-y-4">
      <p className="font-semibold">{user.name}</p>

      <nav className="space-y-2">
        {user.role === ROLES.MANAGER && (
          <Link href="/dashboard" className="block">
            Dashboard
          </Link>
        )}

        <Link href="/products" className="block">
          Products
        </Link>
      </nav>

      <button
        onClick={logout}
        className="text-sm text-red-500"
      >
        Logout
      </button>
    </aside>
  )
}
