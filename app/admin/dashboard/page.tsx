import React from 'react'
import Dashboard from './_page'
import { GetLoginUser } from '@/@backend/getLoginUser'



const Page =async () => {
  const LoginUser:any= await GetLoginUser()
  return (
  <Dashboard LoginUser={LoginUser?.User}/>
  )
}

export default Page