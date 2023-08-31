import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Navbar from './navbar.js';
import Hero from "./hero.js"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>

    </>
  )
}
