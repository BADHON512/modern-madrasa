import { GetLoginUser } from '@/@backend/getLoginUser'
import BranchSection from '@/components/Branch'
import Hero from '@/components/Hero/Hero'
import Gallery from '@/components/Home/Gallary'
import GoogleMap from '@/components/Home/GoogleMap'
import Introduction from '@/components/Home/Introduction'
import VideoPlayer from '@/components/Home/VideoPlayer'
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'



const page = async () => {
const LoginUser:any= await GetLoginUser()

  return (
    <div>
      <Header LoginUser={LoginUser.User} />
      <Hero />
      <Introduction />
       <WhyChooseUs/>
       <BranchSection/>
      <Gallery />
      <VideoPlayer />
      <GoogleMap />
      <Footer />
    </div>
  )
}

export default page