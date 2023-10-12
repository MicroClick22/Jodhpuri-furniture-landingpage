import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <>
            <header>
                <div className="container-fluid container2">
                    <div className="container">
                    <div  className="d-flex justify-content-between py-2">
                    <Link to='/'>
                        <img src="../images/logo.svg" alt="" className="img-fluid" />
                    </Link>
                {/* <div  className="search">
                    <input  type="text" placeholder="Search Products, Colors & More.."/>
                    <button type="submit">
                      <img src="../images/search.svg" alt="" className="img-fluid" />
                    </button>
                </div>
                <div  className="store d-flex">
                <a href="https://jodhpurifurniture.com/stores" >
                    <img src="../images/store.svg" className="img-fluid"/>
                    <span  className="font-13">Stores</span>
                    </a>
                </div>
                <div  className="account">
                    <img src="../images/user.svg" className="img-fluid" />
                    <img src="../images/heart.svg" className="img-fluid" />
                    <img src="../images/cart.svg" className="me-0 img-fluid" />
                </div> */}
                <div className="contact d-flex">
                    <div className="me-3">
                        <img src="../images/phoneIcon.svg" alt="" className="img-fluid" /> <a href="tel:9929946846" className="font-13 inter">+91 99299 46846</a>
                    </div>
                    |
                    <div className="ms-3">
                        <img src="../images/help-circle.svg" alt="" className="img-fluid" /> <a href="mailto:info@jodhpurifurniture.com" className="font-13 inter">Help Center</a>
                    </div>
                </div>

            </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;