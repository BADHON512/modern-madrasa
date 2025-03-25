import React from 'react'
import MoreDetails from './_page'
import { GetLoginUser } from '@/@backend/getLoginUser'

type Props = {}

const page = async(props: Props) => {
        const { User } = await GetLoginUser()
  return (
    <div>
        <MoreDetails LoginUser={User}/>
    </div>
  )
}

export default page