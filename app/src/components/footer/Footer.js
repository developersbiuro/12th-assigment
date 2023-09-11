'use client'
import Link from "next/link"
import Image from "next/image"
import img from "../../../favicon.ico"
import logoimg1 from "../../asset/image/-1.png"
import logoimg2 from "../../asset/image/-2.png"
import logoimg3 from "../../asset/image/-3.png"
import whimg from "../../asset/image/pngwing.com.png"


export default function Footer() {
    return (
        <div className='container-fluid ft mar'>
            <div className='container mar'>
                <div className='row ftmar'>
                    <div className='col-lg-4'> <h1><b className='logo '>Developers-Biuro</b></h1> <h6 className="mar ftmar">Lorem ipsum dolor sit amet, consectetur adipiscing
                        sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ea commodo consequat.</h6>

                        <Link className="ul" href="https://wa.me/+923036253428"><h3>contact us on<br/><Image src={whimg} width={25}></Image> WhatsApp</h3> </Link>

                    </div>
                    <div className='col-lg-2'><h2><b>Our Links</b></h2>


                        <Link className="nav-link ul active  " aria-current="page" href="/">Home</Link>
                        <br />
                        <Link href="about/" className="ul" >About Us</Link><br /><br />
                        <Link href="services/" className="ul" >Services</Link><br /><br />
                        <Link href="/" className="ul" >Team</Link><br /><br />
                        <Link href="blogs/" className="ul" >Blogs</Link><br /><br />
                        

                    </div>
                    <div className='col-lg-3'>
                        <h2><b>Our Company</b></h2>
                        About Company<br /><br />
                        Our Testimonial<br /><br />
                        Latest News<br /><br />
                        Our Mission<br /><br />
                        Get a Free Qout<br /><br />
                    </div>
                    <div className='col-lg-3'>
                    <h2><b>Follow Us On</b></h2>
                    <Image src={img} width={150} ></Image> <br/>
                    <Link href="https://www.instagram.com/theeditorsspot/" target="blank"><Image className="logomar" src={logoimg1}></Image></Link>
                    <Link href="https://www.facebook.com/profile.php?id=100074305142347" target="blank"><Image className="logomar" src={logoimg2}></Image></Link>
                    <Link href=""><Image className="logomar" src={logoimg3}></Image></Link>

                       
                    </div>
                </div>

            </div>
        </div>
    )
}
