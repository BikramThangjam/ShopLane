import { Link } from "react-router-dom";
import "./Header.css";
import { cartSelector } from "../../../reducers/cartReducer";
import { useSelector } from "react-redux";

const Header = () => {

    const cartsCount = useSelector(cartSelector).carts.length;

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 bg-body-tertiary rounded nav-bg pt-4 pb-4 ">
                <div className="container-fluid">
                    <Link className="text-decoration-none brand" to="/"><h5><span>SHOPLANE</span></h5></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start menu-btn" data-bs-scroll="true" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span>SHOPLANE</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active no-underline" aria-current="page" to="/signin">Sign in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active no-underline" aria-current="page" to="/signup">Sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active no-underline" aria-current="page" to="/cart">Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active no-underline" aria-current="page" to="/favourites">Favourites</Link>
                                </li>
                                
                                <li className="nav-item dropdown"> 
                                    <span className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                    </span>
                                    <ul className="dropdown-menu cat-menu">
                                        <li><span className="dropdown-item">All</span></li>
                                        <li><span className="dropdown-item">Men's Clothing</span></li>
                                        <li><span className="dropdown-item">Women's Clothing</span></li>
                                        <li><span className="dropdown-item">Jewelery</span></li>
                                        <li><span className="dropdown-item">Electronics</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="login-signup-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
                                <li className="nav-item dropdown active me-4 ">
                                    <div className="nav-link dropdown-toggle login-signup-nav2 fs-7 pt-4 pb-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle me-0" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        <p className="d-flex flex-column m-0 ">
                                            <span> <b>Login</b> </span>
                                            <span>or Sign Up</span>
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-chevron-double-down ms-1" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                    <ul className="dropdown-menu  ls-dropdown">
                                        <li>
                                            <Link className="dropdown-item no-underline" to="/signin">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                </svg>
                                                Sign in
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item no-underline" to="/signup">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item no-underline" to="/cart">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg>
                                                Cart
                                            </Link>
                                        </li>
                                        <li><Link className="dropdown-item no-underline" to="/favourites">Favourites</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item me-4 position-relative pt-2 pe-1">
                                    <Link to="/cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-cart3" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartsCount>0 && cartsCount}
                                        </span>
                                    </Link>                                   
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;