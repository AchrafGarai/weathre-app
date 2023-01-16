'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

function Search() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/?location=${search}`)
  }
  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex gap bg-zinc-900 items-center rounded-full border border-zinc-800"
      >
        <input
          className="p-4 bg-zinc-900 rounded-full "
          type="text"
          placeholder="Search for a location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="p-4 text-gray-500" type="submit">
          <MagnifyingGlassIcon width={24} height={24} />
        </button>
      </form>
    </div>
  )
}

export default Search
