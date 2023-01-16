import React from 'react'

function Error({message , title} : {title? : string , message : string}) {
  return (
    <div className="p-8 flex flex-col gap-4 items-center justify-center h-72 text-gray-500  bg-zinc-900 rounded-lg border border-zinc-800">
        <p>{title}</p>
        <p>{message}</p>
    </div>
  )
}

export default Error