'use client'
import Link from "next/link"
import Image from 'next/image'
import logoimg from "../../../favicon.ico"
import whimg from "../../asset/image/pngwing.com.png"
import gtimg from "../../asset/image/pngwing.com (12).png"


export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body navcl" data-bs-theme="dark">
                <div className="container ul">
                    <Link className="navbar-brand" href="/"> <Image width={100} className="rounded-circle" src={logoimg}></Image>  </Link>
                    <b className="logof">Developers-Biuro</b>



                    <Link className="nav-link ul active" href="http://wa.me/+923036253428" target="blank"><Image width={20} src={whimg}></Image> WhatsApp</Link>


                    <Link className="nav-link ul active  " href="https://github.com/developersbiuro" target="blank"><Image width={25} src={gtimg}></Image> Github</Link>


                    <Link className="nav-link ul active  " href="services/">Services</Link>





                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
