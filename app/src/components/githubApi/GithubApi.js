'use client'
import { useState } from "react"
import axios from "axios"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"






export default function GithubApi() {

    const [userName, setUserName] = useState(null)
    const [followers, setFollowers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [data, setData] = useState("")
    const [followerFollowers, setFollowerFollowers] = useState({});
    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }
    const onClickHandler = async () => {
        setFollowers([])


        let response = await fetch(`https://api.github.com/users/${userName}`)
        response = await response.json()
        setData(response)
        console.log(response);

        setSelectedUser({ login: userName });

    }
    const onFollowerHandler = async () => {
        let response2 = await axios.get(data.followers_url)
        console.log("response", response2.data);
        setFollowers(response2.data)

    }
    const onFollowingHandler = async () => {
        let response2 = await axios.get(`https://api.github.com/users/${userName}/following`)
        console.log("response", response2.data);
        setFollowers(response2.data)

    }
    const selectedUserFollower = async (userName) => {
        let response = await axios.get(`https://api.github.com/users/${setSelectedUser}/followers`)
        setSelectedUser()
    }
    const handleFetchFollowerFollowers = async (follower) => {
        try {
            const response = await fetch(`https://api.github.com/users/${follower}/followers`);
            const followerFollowersData = await response.json();
            setFollowerFollowers(followerFollowersData);
            setSelectedUser({ login: follower })
            console.log(followerFollowersData);
        } catch (error) {
            console.error(`Error fetching ${follower.login}'s followers:`, error);
        }
    };
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
                                    <p className="card-text cdc"><span className=" cdc">{data.followers} - Followers <button onClick={onFollowerHandler} className="btn btn-outline-light btnc" > Get Followers</button></span></p>
                                    <p className="card-text cdc"><span className=" cdc">{data.following} - Following <button onClick={onFollowingHandler} className="btn btn-outline-light btnc" > Get Following</button></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {followers.length >= 1 &&
                    <div className="over">

                        <table className="mar">

                            <tbody className="mar">

                                <tr >
                                    <th>Sr#</th>
                                    <th>id</th>
                                    <th>avator</th>
                                    <th>name</th>
                                    <th>type</th>
                                    <th>Get Followers</th>

                                </tr>

                                {followers.map((element, i) => {
                                    return (
                                        <>
                                            <tr className=" trr" key={element.login}  >
                                                <td className="padl">{i + 1})</td>
                                                <td className="tdd padl">{element.id}</td>
                                                <td className="tdd"> <img className="rounded-circle" src={element.avatar_url} width={100} alt="" /></td>
                                                <td className="tid"><h4>@{element.login}</h4></td>
                                                <td className="tdd">{element.type}</td>
                                                <td className="tdd"><button onClick={() => handleFetchFollowerFollowers(element.login)} className="btn btn-outline-light btnc" > Get Followers</button></td>

                                            </tr>
                                            
                                                {selectedUser.login === element.login && (
                                                    <>

                                                        {followerFollowers.length > 0 &&

                                                            <>
                                                                <tr >
                                                                    <th>Sr#</th>
                                                                    <th>id</th>
                                                                    <th>avator</th>
                                                                    <th>name</th>
                                                                    <th className="padl">type</th>
                                                                </tr>

                                                                {followerFollowers.map((elemeent, i) => {
                                                                    return (

                                                                        <tr className="trrr" >
                                                                            <td >{i + 1})</td>
                                                                            <td >{elemeent.id}</td>
                                                                            <td > <img className="rounded-circle" src={elemeent.avatar_url} width={50} alt="" /></td>
                                                                            <td ><h4>@{elemeent.login}</h4></td>
                                                                            <td className="padl">{elemeent.type}</td>
                                                                        </tr>



                                                                    )
                                                                })}
                                                            </>
                                                        }

                                                    </>
                                                )

                                                }
                                        



                                        </>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                }

                <small>

                </small>


            </div>

            <Footer />
        </div>
    )
}
