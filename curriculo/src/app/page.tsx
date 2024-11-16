'use client'

import React from 'react'
import ResponsiveAppBar from './header/page'
import Jogo from './game/page'


const page = () => {
  return (
    <div>
    <ResponsiveAppBar/> <br />
    <Jogo/> 
    </div>

  )
}

export default page