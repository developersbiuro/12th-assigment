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
        <h1 className="mar ul"><b><b>"GITHUB Api Setup"</b></b></h1>
        <div class="form-floating mb-2">
          <input type="text" class="form-control fr" id="floatingInput" placeholder="enter github UserName" />
          <label for="floatingInput">Enter Github UserName</label>
        </div>
      </div>

      <Footer />
    </div>
  )
}
