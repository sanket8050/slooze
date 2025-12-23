"use client"

import { useAuth } from "@/src/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({
  allowedRoles,
  children,
}: {
  allowedRoles: string[]
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace("/login")
      return
    }

    if (!allowedRoles.includes(user.role)) {
      router.replace("/products")
    }
  }, [user, allowedRoles, router])

  if (!user || !allowedRoles.includes(user.role)) return null

  return <>{children}</>
}
