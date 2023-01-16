const appId = '762385c71cb82e47ad4fdd68f06f6271'
import { List } from '../types'

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
