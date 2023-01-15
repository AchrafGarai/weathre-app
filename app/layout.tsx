import './globals.css'

import Navbar from './Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <div className="p-4 mx-auto my-6 max-w-4xl">{children}</div>
      </body>
    </html>
  )
}
