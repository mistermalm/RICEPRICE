import Header from '../Header'
import Video from '../Video'
import Overlay from '../Overlay'
import Text from '../Text'
import Social from '../Social'

const index = () => {
  return (
    <section className='showcase'>
      <Header />
      <Video src='./video/video.mp4' />
      <Overlay color='#f6e486;' />
      <Text />
      <Social />
    </section>
  )
}

export default index
