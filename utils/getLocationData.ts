const appId = '762385c71cb82e47ad4fdd68f06f6271'

export const getLocationData = async (location: string | undefined) => {
  try {
    const geoData = (await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${appId}`,
    ).then((res) => res.json())) as any

    const { lon, lat } = geoData[0]

    return { lon, lat }
  } catch (e) {
    const location = { lon: '', lat: '' }
    console.log(e)
    return location
  }
}
