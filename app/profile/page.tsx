import React from 'react'
import ProfilePage from './_page'
import { GetLoginUser } from '@/@backend/getLoginUser'
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'

type Props = {}

const Page =async (props: Props) => {
 const LoginUser:any= await GetLoginUser()
  return (
    <div>
      <Header LoginUser={LoginUser?.User}/>
        <ProfilePage LoginUser={LoginUser?.User}/>
      <Footer/>
       
    </div>
  )
}

export default Page