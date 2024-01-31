'use client'

import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Profile from './Profile'

const Header = () => {
  return (
    <div className='flex flex-1 items-center  py-2 justify-between  w-full'>
        <SearchBar />
        <Profile />
    </div>
  )
}

export default Header;