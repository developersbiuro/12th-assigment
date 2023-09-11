import Link from "next/link"
import Image from "next/image"
import img from "../../../favicon.ico"
import logoimg1 from "../../asset/image/-1.png"
import logoimg2 from "../../asset/image/-2.png"
import logoimg3 from "../../asset/image/-3.png"


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

                    </div>
                    <div className='col-lg-2'><h2><b>Our Links</b></h2>


                        <Link className="nav-link ul active  " aria-current="page" href="/">Home</Link>
                        <br />
                        <Link href="about/" className="ft" >About Us</Link><br /><br />
                        <Link href="services/" className="ft" >Services</Link><br /><br />
                        <Link href="/" className="ft" >Team</Link><br /><br />
                        <Link href="blogs/" className="ft" >Blogs</Link><br /><br />
                        

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
                    <Link href=""><Image className="logomar" src={logoimg1}></Image></Link>
                    <Link href=""><Image className="logomar" src={logoimg2}></Image></Link>
                    <Link href=""><Image className="logomar" src={logoimg3}></Image></Link>

                       
                    </div>
                </div>

            </div>
        </div>
    )
}
