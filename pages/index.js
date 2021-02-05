import Head from 'next/head'
import { Fragment } from 'react'
import Showcase from '../components/Showcase'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rice Price</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Showcase />
      <Menu />
    </Fragment>
  )
}
