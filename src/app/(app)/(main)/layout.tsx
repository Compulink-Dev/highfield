import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

export const metadata = {
  description: 'Highfield Driving School',
  title: 'Highfield Driving School',
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="text-black">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
