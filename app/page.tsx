import Hero from '@/components/Hero/Hero'
import Gallery from '@/components/Home/Gallary'
import GoogleMap from '@/components/Home/GoogleMap'
import Introduction from '@/components/Home/Introduction'
import VideoPlayer from '@/components/Home/VideoPlayer'
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <Hero />
      <Introduction />
      <Gallery />
      <VideoPlayer />
      <GoogleMap />
      <Footer />
    </div>
  )
}

export default page