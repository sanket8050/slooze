"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/src/context/AuthContext"
import { ROLES } from "@/src/lib/roles"

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(email, password)

    if (!success) {
      setError("Invalid credentials")
      return
    }

    const storedUser = JSON.parse(localStorage.getItem("user")!)

    if (storedUser.role === ROLES.MANAGER) {
      router.push("/dashboard")
    } else {
      router.push("/products")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl border p-6"
      >
        <h2 className="text-xl font-semibold">Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded bg-black p-2 text-white dark:bg-white dark:text-black">
          Login
        </button>
      </form>
    </div>
  )
}
