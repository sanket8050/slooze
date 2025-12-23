import ProtectedRoute from "@/src/components/ProtectedRoute"
import { ROLES } from "@/src/lib/roles"

export default function DashboardPage() {
  return (
    <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Manager Dashboard</h1>
        <p className="mt-2 text-zinc-500">
          Overview of commodities and stock insights
        </p>
      </div>
    </ProtectedRoute>
  )
}
