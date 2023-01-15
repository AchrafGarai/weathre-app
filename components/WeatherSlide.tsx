'use client'
import { List } from '@/types'
import Image from 'next/image'
import { useUnitStore } from '@/utils/unitStore'

export default function WeatherSlide({ data }: { data: List[] }) {
  const unit = useUnitStore((state) => state.unit)
  return (
    <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-lg text-white">
      <Image
        src={`http://openweathermap.org/img/wn/${data[0].weather[0].icon}@4x.png`}
        alt=""
        width={64}
        height={64}
      />
      <ul>
        <li className="text-2xl font-bold ">
          {data[0].main.feels_like.toFixed()} {unit === 'metric' ? 'C°' : 'F°'}
        </li>
        <li>{data[0].dt_txt.slice(0, 10)}</li>
      </ul>
    </div>
  )
}
