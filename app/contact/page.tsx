import React from 'react'
import Contact from './_page'
import { GetLoginUser } from '@/@backend/getLoginUser'

type Props = {}

const page = async(props: Props) => {
  const {User}=await GetLoginUser()
  return (
    <div><Contact User={User}/></div>
  )
}

export default page