import { useState, useEffect } from 'react'

const index = ({ color }) => {
  // need useEffect or document will be undefined
  useEffect(() => {
    let overlay = document.querySelector('.overlay')
    if (color) {
      overlay.style = `background: ${color}`
    }
  }, [color])

  return <div className='overlay' />
}

export default index
