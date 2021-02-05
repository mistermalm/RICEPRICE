import Link from 'next/link'

const index = () => {
  return (
    <div className='menu'>
      <ul>
        <li>
          <Link href='#'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Rice</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Price</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default index
