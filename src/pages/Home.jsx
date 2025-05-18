import Footer from '../components/Footer'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import TabFilter from '../components/TabFilter'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import { recommendedPlaces, mostViewedPlaces } from "../data/HomeData.jsx";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Explore the Best of <span className="text-red-600">Beni Mellal–Khénifra!</span>
        </h2>
        <SearchBar />
      </div>

      <TabFilter />

      <div className="px-4 md:px-16 mt-8">
        <SectionHeader title="Most Recommended" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          {/* Reuse Card component */}
            {recommendedPlaces.map(place => (
                <Card key={place.id} data={place} />
            ))}
          {/* Add more Card components... */}
        </div>

        <SectionHeader title="Most Viewed" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            {mostViewedPlaces.map(place => (
                <Card key={place.id} data={place} />
            ))}
          {/* Add more Card components... */}
        </div>
      </div>

      <Footer />
    </div>
  )
}
