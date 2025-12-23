import "./globals.css"
import { AuthProvider } from "../context/AuthContext"
import { ThemeProvider } from "../context/ThemeContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <ThemeProvider>

          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
        
      </body>
    </html>
  )
}
