import './globals.css'

export const metadata = {
  title: 'hh.kz',
  description: 'New project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
