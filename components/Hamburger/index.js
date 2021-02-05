import { useEffect } from 'react'

const index = () => {
  // need useEffect or document will be undefined.
  useEffect(() => {
    let hamburger = document.querySelector('.hamburger')
    let showcase = document.querySelector('.showcase')
    let header = document.querySelector('.showcase header')

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active')
      showcase.classList.toggle('is-active')
      header.classList.toggle('is-active')
    })
  }, [])

  return (
    <div className='hamburger hamburger--spin'>
      <span className='hamburger-box'>
        <span className='hamburger-inner' />
      </span>
    </div>
  )
}

export default index
