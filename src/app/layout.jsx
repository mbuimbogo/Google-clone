import './globals.css'

export const metadata = {
  title: 'Google clone app',
  description: 'Google clone created by nextjs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
