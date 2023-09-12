export default function Home() {

    const [userName, setUserName] = useState(null)
    const [followers, setFollowers] = useState([])
    const [data, setData] = useState(null)
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
                    <form className="d-flex form-floating" >

                        <input onChange={onChangeHandler} className="form-control me-2 fr" id="floatingInput" placeholder="Enter Github username" />
                        <label htmlFor="floatingInput">Enter Github UserName</label>
                        <button onClick={onClickHandler} className="btn btn-outline-info" >Fetch User</button>
                    </form>
                </div>
            </div>

            {/* Fetched USer Card */}
            <div className="container mar">
                {data &&
                    <>
                        <div className="card mb-3 cd" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image src={data.avatar_url} className="img-fluid rounded-circle rounded-start" width={50} alt="..."></Image>
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body cdc">
                                        <h2 className=" cdc">naveed{data.login} </h2>
                                        < hr />
                                        <h6 className=" cdc"> hhdg{data.bio} </h6>
                                        <p className="card-text cdc"><small className=" cdc">gfh</small></p>
                                        <p className="card-text cdc"><small className=" cdc">hjhe</small></p>
                                    </div>
                                </div>
                            </div>
                        </div></>
                }

            </div>

            <Footer />
        </div>
    )
}