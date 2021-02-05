import Link from 'next/link'

const index = () => {
  return (
    <div className='text'>
      <h2>
        Best <span>Rice</span>
      </h2>
      <h3>
        For the best <span>price</span>!
      </h3>
      <p>Ricy or spicy, don't have to be pricy!</p>
      <Link href='#'>
        <a>Get Ric(h)y Now!</a>
      </Link>
    </div>
  )
}

export default index
