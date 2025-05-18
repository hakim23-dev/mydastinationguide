import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ReviewCard from '../components/ReviewCard'

export default function Review() {
  return (
    <div className="font-sans">
      <Navbar />

      <section className="py-16 px-6 md:px-20 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          User Reviews & Ratings
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-10">
          Read what others are saying about the best places in Beni Mellal–Khénifra
        </p>

        <div className="space-y-8">
          {/* Review Card */}
          <ReviewCard
            user="Fatima Zohra"
            rating={4.8}
            comment="Un séjour incroyable au Borj Des Cascades! Le personnel était accueillant et la vue magnifique."
            location="Borj Des Cascades & Spa"
          />
          <ReviewCard
            user="Mohammed T."
            rating={4.6}
            comment="J’ai adoré l’ambiance du café Sprig. Parfait pour un petit-déjeuner tranquille."
            location="Sprig Of Coffee"
          />
          <ReviewCard
            user="Yassir M."
            rating={5}
            comment="La visite du lac était inoubliable. Je recommande vivement cette activité en famille."
            location="Bin El Ouidane Lake"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
