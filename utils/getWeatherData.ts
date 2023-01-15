const appId = '762385c71cb82e47ad4fdd68f06f6271'
import { List, Result } from '../types'
// import { useUnitStore } from './unitStore'

// export const getWeatherData = async (
//   location: string | undefined,
//   unit: string | undefined,
// ) => {
//   // const unit = useUnitStore((state) => state.unit)

//   const geoData = (await fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${appId}`,
//   ).then((res) => res.json())) as any

//   const { lon, lat } = geoData[0]

//   const weatherData = (await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appId}&units=${unit}`,
//   ).then((res) => res.json())) as Result

//   const date = new Date(weatherData.list[0].dt_txt)

//   let filteredList: List[][] = new Array()

//   for (let i = 0; i <= 5; i++) {
//     const data = weatherData.list.filter(function (item) {
//       return item.dt_txt.slice(0, 10) == date.toJSON().slice(0, 10)
//     })

//     filteredList.push(data)
//     date.setDate(date.getDate() + 1)
//   }

//   return filteredList
// }

export const getChatData = (filteredList: List[][]) => {
  let chartData = []
  for (let i = 0; i < filteredList.length; i++) {
    chartData.push({
      Date: filteredList[i][0].dt_txt.slice(0, 10),
      Temperature: filteredList[i][0].main.temp,
    })
  }
  return chartData
}
