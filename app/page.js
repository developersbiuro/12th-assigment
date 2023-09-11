'use client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Link from 'next/link'
import Navbar from './src/components/navbar/Navbar'
import Footer from './src/components/footer/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}
