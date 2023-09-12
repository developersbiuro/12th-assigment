'use client'
import { useState } from "react"
import axios from "axios"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import Navbar from './src/components/navbar/Navbar'
import Footer from './src/components/footer/Footer'
import Image from "next/image"

export default function Home() {

  const [userName, setUserName] = useState(null)
  const [followers, setFollowers] = useState([])
  const [data, setData] = useState("")
  const onChangeHandler = (e) => {
      setUserName(e.target.value)
  }
  const onClickHandler = async () => {
      setFollowers([])

      let response = await fetch(`https://api.github.com/users/${userName}`)
      response = await response.json()
      setData(response)
      console.log(response);

  }
  const onFollowerHandler = async () => {
      let response = await axios.get(data.followers_url)
      console.log("response", response.data);
      setFollowers(response.data)

  }
  const onFollowingHandler = async () => {
      let response = await axios.get(data.following_url)
      console.log("response", response.data);
      setFollowers(response.data)

  }

  return (
    < div className="bd">
      <Navbar />
      <div className="container ">
        <h1 className="mar ul"><b><b>"GITHUB Api Program"</b></b></h1>
        <div>
          <form className="d-flex form-floating" role="search">
            <input onChange={onChangeHandler} className="form-control me-2 fr" id="floatingInput" type="search" placeholder="Enter" aria-label="Search" />
            <label htmlFor="floatingInput">Enter Github UserName</label>
            <button onClick={onClickHandler} className="btn btn-outline-info" >Fetch User</button>
          </form>
        </div>
      </div>

      {/* Fetched USer Card */}
      <div className="container mar">
        <div className="card mb-3 cd" >
          <div className="row g-0">
            <div className="col-md-4">
              <Image  className="img-fluid rounded-circle rounded-start" width={50} alt="..."></Image>
            </div>
            <div className="col-md-8 ">
              <div className="card-body cdc">
                <h5 className=" cdc">gdh {data.login} </h5>
                <p className=" cdc"> cbv{data.bio} </p>
                <p className="card-text cdc"><small className=" cdc">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
