import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";

function NavItems() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed" : ""}`}>
      {/* Header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      {/* Header bottom */}
      <div className="header-button">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              {/* Menu area */}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>

                {/* Sign in and log in */}
                <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                <Link to="/login" className="d-none d-md-block">Log In</Link>

                {/* Menu toggler */}
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {/* Social toggle */}
                <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                  <i className="icofont-info-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavItems;
