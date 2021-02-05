import ImageLink from './ImageLink'

const index = () => {
  return (
    <ul className='social'>
      <li>
        <ImageLink href='#' src='./logo/facebook.png' alt='facebook' />
      </li>
      <li>
        <ImageLink href='#' src='./logo/instagram.png' alt='instagram' />
      </li>
      <li>
        <ImageLink href='#' src='/logo/twitter.png' alt='twitter' />
      </li>
    </ul>
  )
}

export default index
