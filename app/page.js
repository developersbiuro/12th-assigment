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
      <div className="container mar">
        <h1 className="mar ul"><b><b className="mar">"GITHUB Api Program"</b></b></h1>
        <div>
          <div className="d-flex form-floating" >

            <input onChange={onChangeHandler} className="form-control me-2 fr" id="floatingInput" placeholder="Enter Github username" />
            <label htmlFor="floatingInput">Enter Github UserName</label>
            <button onClick={onClickHandler} className="btn btn-outline-info" >Fetch User</button>

          </div>
          
        </div>
      </div>

      {/* Fetched USer Card */}
      <div className="container mar">
        {data &&
          <>
            <div className="card mb-3 cd" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.avatar_url} className="titl img-fluid rounded-circle cardimg" alt=" " />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body cdc cardmar">
                    <h1 className="titl cdc"> {" "} {data.name} </h1>
                    <h5 className="cdc"> <small> @ {data.login} </small></h5>
                    < hr />
                    <h6 className=" cdc"> <b>{data.bio}</b>  </h6>
                    <p className="card-text cdc"><span className=" cdc">{data.followers} - Followers <button onClick={onClickHandler} className="btn btn-outline-light btnc" > Get Followers</button></span></p>
                    <p className="card-text cdc"><span className=" cdc">{data.following} - Following <button onClick={onClickHandler} className="btn btn-outline-light btnc" > Get Following</button></span></p>
                  </div>
                </div>
              </div>
            </div></>
        }

        {followers.length >= 1 &&

          <table>
            <tr>
              <th>id</th>
              <th>avator</th>
              <th>name</th>
              <th>type</th>
            </tr>
            {followers.map((element) => {
              return (
                <tr>
                  <td>{element.id}</td>
                  <td> <img src={element.avatar_url} width={50} alt="" /></td>
                  <td>{element.login}</td>
                  <td>{element.type}</td>
                </tr>
              )
            })}

          </table>
        }

      </div>

      <Footer />
    </div>
  )
}
