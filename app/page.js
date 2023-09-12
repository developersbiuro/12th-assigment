'use client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Link from 'next/link'
import Navbar from './src/components/navbar/Navbar'
import Footer from './src/components/footer/Footer'

export default function Home() {
  return (
    < div className="bd">
      <Navbar />
      <div className="container ">
        <h1 className="mar ul"><b><b>"GITHUB Api Program"</b></b></h1>
        <div>
          <form className="d-flex form-floating" role="search">
            <input className="form-control me-2 fr" id="floatingInput" type="search" placeholder="Enter" aria-label="Search" />
            <label htmlFor="floatingInput">Enter Github UserName</label>
            <button className="btn btn-outline-info" >Fetch User</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
