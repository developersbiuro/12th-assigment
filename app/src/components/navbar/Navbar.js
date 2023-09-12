'use client'
import Link from "next/link"
import Image from 'next/image'
import logoimg from "../../../favicon.ico"
import whimg from "../../asset/image/pngwing.com.png"
import gtimg from "../../asset/image/pngwing.com (12).png"



export default function Navbar() {
    return (

        <nav className="navbar bg-dark border-bottom border-body navcl" data-bs-theme="dark">
            <div className="container ul">
                <Link className="navbar-brand" href="/"> <Image alt=" " width={100} className="rounded-circle" src={logoimg}></Image> <span> <b className="logof"> Developers-Biuro</b></span>  </Link>

                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}


                <Link className="nav-link ul active" href="http://wa.me/+923036253428" target="blank"><Image alt=" " width={20} src={whimg}></Image> WhatsApp</Link>


                <Link className="nav-link ul active  " href="https://github.com/developersbiuro" target="blank"><Image alt=" " width={25} src={gtimg}></Image> Github</Link>

                <span className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Assigments
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="https://editorspot.surge.sh/">1st-Assigment</a></li>

                        <li><a className="dropdown-item" target="blank" href="https://editorspot.surge.sh/">2nd-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://editorsspot.surge.sh/">3rd-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://developer4.surge.sh/">4th-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://developer5.surge.sh/">5th-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://developer6.surge.sh/">6th-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://developer7.surge.sh/">7th-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://developer8.surge.sh/">8th-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://9thg-assignment.vercel.app">9th-Assigment</a></li>
                        <li><a className="dropdown-item" target="blank" href="https://developer11.vercel.app">10th-Assigment</a></li>


                    </ul>
                </span>






                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
                {/* </div> */}
            </div>
        </nav>

    )
}
