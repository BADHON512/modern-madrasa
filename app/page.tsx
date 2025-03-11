import Hero from '@/components/Hero/Hero'
import Introduction from '@/components/Home/Introduction'
import Header from '@/components/Layouts/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header/>
      <Hero/>
       <Introduction/>
    </div>
  )
}

export default page