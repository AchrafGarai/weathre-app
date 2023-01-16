import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Forecast from '@/components/Forecast'
import { getLocationData } from '@/utils/getLocationData'
import './page.module.css'
type Props = {
  params?: {
    num?: string
  }
  searchParams?: {
    location?: string
  }
}



export default async function Home({ searchParams }: Props) {
  const location = searchParams?.location || 'Tunis'

  const locationData = await getLocationData(location)

  return (
    <main className={styles.main}>
      <div className="my-4 text-gray-600">
        Weather data for :
        <p className="font-medium text-gray-300">{location}</p>
      </div>
      <Forecast location={locationData} />
    </main>
  )
}
