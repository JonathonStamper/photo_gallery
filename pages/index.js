import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageHolder from '../Components/Image'

export default function Home() {
  return (<>
    <h2 className=''>Hello world!</h2>
    <ImageHolder></ImageHolder>
    </>
  )
}
