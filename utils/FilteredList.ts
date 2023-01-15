import { List, Result } from '@/types'

export const FilterResults = (weatherData: Result) => {
  const date = new Date(weatherData.list[0].dt_txt)

  let filteredList: List[][] = new Array()

  for (let i = 0; i <= 5; i++) {
    const data = weatherData.list.filter(function (item) {
      return item.dt_txt.slice(0, 10) == date.toJSON().slice(0, 10)
    })

    filteredList.push(data)
    date.setDate(date.getDate() + 1)
  }

  return filteredList
}
