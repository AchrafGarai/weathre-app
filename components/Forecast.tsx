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
import { appId } from '@/utils/AppId'
import Loading from './Loading'
import Error from './Error'
import useSWR from 'swr'

import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



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
  if (error) return <Error message={'Unable to load data.'}/>
  if (!data) return <Loading />
  
  // Initialize filtered data from api response
  let filteredData
  let chartData 
  
  try{
     filteredData = FilterResults(data)
     chartData = getChatData(filteredData)
  }catch(e){
    return <Error message={'Error.Unknown location...'}/>
  }

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
