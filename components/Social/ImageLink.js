import Link from 'next/link'

const ImageLink = ({ href, src, alt }) => {
  return (
    <Link href={href}>
      <a>
        <img src={src} alt={alt} />
      </a>
    </Link>
  )
}

export default ImageLink
