'use client'

import { List } from '@/types'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import WeatherSlide from './WeatherSlide'
import { useUnitStore } from '@/utils/unitStore'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import Chart from './Chart'
import { FilterResults } from '@/utils/FilteredList'
import { getChatData } from '@/utils/getWeatherData'
import Loading from './Loading'
import useSWR from 'swr'

import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const appId = '762385c71cb82e47ad4fdd68f06f6271'

export default function Forecast({ location }: { location: any }) {
  const unit = useUnitStore((state) => state.unit)
  const { lat, lon } = location
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  // The API URL includes the page index, which is a React state.
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appId}&units=${unit}`,
    fetcher,
  )

  // ... handle loading and error states
  if (error) return <p>An error has occurred.</p>
  if (!data) return <Loading />

  const filteredData = FilterResults(data)
  const chartData = getChatData(filteredData)

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="my-swiper p-8"
      >
        {filteredData.map((item: List[]) => (
          <SwiperSlide className="card">
            <WeatherSlide data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Chart data={chartData} />
    </div>
  )
}
