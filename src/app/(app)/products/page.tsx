"use client"

import ProtectedRoute from "@/src/components/ProtectedRoute"
import { ROLES } from "@/src/lib/roles"
import { useAuth } from "@/src/context/AuthContext"

export default function ProductsPage() {
  const { user } = useAuth()

  // ✅ IMPORTANT: wait until user is loaded
  if (!user) return null

  return (
    <ProtectedRoute allowedRoles={[ROLES.MANAGER, ROLES.STORE_KEEPER]}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Products</h1>

        <div className="mt-6 rounded border p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold">Wheat</p>
            <p className="text-sm text-gray-500">Price: ₹45</p>
          </div>

          {/* ✅ STEP 5 – Action-level role check */}
          <button
            disabled={user.role !== ROLES.MANAGER}
            className={`px-4 py-2 rounded text-sm
              ${
                user.role !== ROLES.MANAGER
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white"
              }`}
          >
            Edit Product
          </button>
        </div>
      </div>
    </ProtectedRoute>
  )
}
