import React from 'react'
import UnitToggle from '@/components/UnitToggle'
import Search from '@/components/Search'
import Image from 'next/image'
function Navbar() {
  return (
    <nav className=" flex gap-4 justify-between items-center p-4 border-b border-zinc-900 ">
      <Image src="/sun-clouds.svg" width={64} height={64} alt={'Logo'} />
      <Search />
      <UnitToggle />
    </nav>
  )
}

export default Navbar
