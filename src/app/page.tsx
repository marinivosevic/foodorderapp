import Image from 'next/image'
import Header from '../Components/Header'
import FoodCard from '@/Components/FoodCard'
export default function Home() {
  return (
    <main>
      <div>
      <Header/>
      <FoodCard/>
      </div>
    </main>
  )
}
