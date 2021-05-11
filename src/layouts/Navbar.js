import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../components/auth'


const Navbar = ({ history }) => {
    return (
        <>
            <div className="agile-main-top">
                <div className="container-fluid">
                    <div className="row main-top-w3l py-2">
                        <div className="col-lg-4 header-most-top">
                            <p className="text-white text-lg-left text-center">
                                Offer Zone Top Deals & Discounts
                            </p>
                        </div>
                        <div className="col-lg-8 header-right mt-lg-0 mt-2">

                            <ul>
                                <li className="text-center border-right text-white">
                                    <i className="fas fa-phone mr-2"></i> 9844363201
						        </li>

                                {!isAuthenticated() && (
                                    <Fragment>
                                        <li className="text-center border-right text-white">
                                            <Link to="/signin" className="text-white">
                                                <i className="fas fa-sign-in-alt mr-2"></i> Log In </Link>
                                        </li>
                                        <li className="text-center text-white">
                                            <Link to="/signup" className="text-white">
                                                <i className="fas fa-sign-out-alt mr-2"></i>Register </Link>
                                        </li>

                                    </Fragment>
                                )}

                                {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                                    <li className="text-center text-white">
                                        <Link to="/user/dashboard" className="text-white">
                                            My Profile
                                        </Link>
                                    </li>
                                )}

                                {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                                    <li className="text-center text-white">
                                        <Link to="/admin/dashboard" className="text-white">
                                            Admin Dashboard
                                        </Link>
                                    </li>
                                )}

                                {isAuthenticated() && (
                                    <button className="btn btn-danger" onClick={() => signout(() => {
                                        history.push('/')
                                    })} style={{ cursor: 'pointer' }}>
                                        Signout
                                    </button>
                                )}

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bot">
                <div className="container">
                    <div className="row header-bot_inner_wthreeinfo_header_mid">

                        <div className="col-md-3 logo_agile">
                            <h1 className="text-center">
                                <Link to="index.html" className="font-weight-bold font-italic">
                                    <img src="images/logo2.png" alt=" " className="img-fluid" />Electro Store
						</Link>
                            </h1>
                        </div>

                        <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                            <div className="row">

                                <div className="col-10 agileits_search">
                                    <form className="form-inline" action="#" method="post">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>

                                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                        <form action="#" method="post" className="last">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <button className="btn w3view-cart" type="submit" name="submit" value="">
                                                <i className="fas fa-cart-arrow-down"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-inner">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="agileits-navi_search">
                            <form action="#" method="post">
                                <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required="">
                                    <option value="">All Categories</option>
                                    <option value="Televisions">Televisions</option>
                                    <option value="Headphones">Headphones</option>
                                    <option value="Computers">Computers</option>
                                    <option value="Appliances">Appliances</option>
                                    <option value="Mobiles">Mobiles</option>
                                    <option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
                                    <option value="iPad & Tablets">iPad & Tablets</option>
                                    <option value="Cameras & Camcorders">Cameras & Camcorders</option>
                                    <option value="Home Audio & Theater">Home Audio & Theater</option>
                                </select>
                            </form>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto text-center mr-xl-5">
                                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                                    <Link className="nav-link" to="index.html">Home
								<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Electronics
							</Link>
                                    <div className="dropdown-menu">
                                        <div className="agile_inner_drop_nav_info p-4">
                                            <h5 className="mb-3">Mobiles, Computers</h5>
                                            <div className="row">
                                                <div className="col-sm-6 multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <li>
                                                            <Link to="product.html">All Mobile Phones</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">All Mobile Accessories</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Cases & Covers</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Screen Protectors</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Power Banks</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">All Certified Refurbished</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Tablets</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Wearable Devices</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Smart Home</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <li>
                                                            <Link to="product.html">Laptops</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Drives & Storage</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Printers & Ink</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Networking Devices</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Computer Accessories</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Game Zone</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product.html">Software</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Appliances
							</Link>
                                    <div className="dropdown-menu">
                                        <div className="agile_inner_drop_nav_info p-4">
                                            <h5 className="mb-3">TV, Appliances, Electronics</h5>
                                            <div className="row">
                                                <div className="col-sm-6 multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <li>
                                                            <Link to="product2.html">Televisions</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Home Entertainment Systems</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Headphones</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Speakers</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">MP3, Media Players & Accessories</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Audio & Video Accessories</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Cameras</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">DSLR Cameras</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Camera Accessories</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 multi-gd-img">
                                                    <ul className="multi-column-dropdown">
                                                        <li>
                                                            <Link to="product2.html">Musical Instruments</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Gaming Consoles</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">All Electronics</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Air Conditioners</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Refrigerators</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Washing Machines</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Kitchen & Home Appliances</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">Heating & Cooling Appliances</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="product2.html">All Appliances</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                    <Link className="nav-link" to="about.html">About Us</Link>
                                </li>
                                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                    <Link className="nav-link" to="product.html">New Arrivals</Link>
                                </li>
                                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
							</Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="product.html">Product 1</Link>
                                        <Link className="dropdown-item" to="product2.html">Product 2</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="single.html">Single Product 1</Link>
                                        <Link className="dropdown-item" to="single2.html">Single Product 2</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="checkout.html">Checkout Page</Link>
                                        <Link className="dropdown-item" to="payment.html">Payment Page</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact.html">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default withRouter(Navbar)
