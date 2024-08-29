import Link from "next/link";
import { PiFacebookLogoFill } from "react-icons/pi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      {/* Start Footer */}
      <footer
        className="main-footer  footer-dark background-image"
        data-image-src="assets/img/wall-sketch.png"
      >
        <div className="container pt-4">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">
              <div className="footer-about">
                <div className=" mb-3 d-inline-block">
                  {/* Start Qr Code Image */}
                  <img
                    src="assets/img/logo/logo_white.svg"
                    className="figure-img img-fluid mb-0"
                    height="246"
                    width="246"
                    alt="..."
                  />
                  {/* /End Qr Code Image */}
                </div>
                <p>Room Angel is a premium Hotel Application.</p>
                <Link className="email-link d-block fw-medium mb-1" href="#">
                  <i className="fa-solid fa-phone me-2"></i>
                  <span>(971) 456-7890</span>
                </Link>
                <Link className="email-link d-block fw-medium" href="#">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <span>support@roomangle.com</span>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-auto col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                Main Hotels
              </h3>
              {/* /Start Footer Link  */}
              <ul className="footer-link list-unstyled menu mb-0">
                <li className="mb-2">
                  <Link href="/" className="link d-block">
                    Hotel One
                  </Link>
                </li>

                <li className="mb-2">
                  <Link href="#" className="link d-block">
                    Hotel Two
                  </Link>
                </li>

                <li className="mb-2">
                  <Link href="#" className="link d-block">
                    Hotel Three
                  </Link>
                </li>
              </ul>
              {/* /.End Footer Link  */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-auto col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                Main Links
              </h3>
              {/* /Start Footer Link  */}
              <ul className="footer-link list-unstyled menu mb-0">
                <li className="mb-2">
                  <Link href="#" className="link d-block">
                    Link One
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="link d-block">
                    Link Two
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="link d-block">
                    Link Three
                  </Link>
                </li>
              </ul>
              {/* /.End Footer Link  */}
            </div>

            <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                Connect with us
              </h3>
              {/* /Start Social Icon */}
              <ul className="list-unstyled social-icon">
                <li>
                  <Link target="_blank" href="https://www.facebook.com/">
                    <PiFacebookLogoFill className="w-[4vh] h-[4vh] ms-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <BiLogoInstagramAlt className="w-[4vh] h-[4vh] ms-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/"
                  >
                    <FaLinkedin className="w-[4vh] h-[4vh] ms-4" />
                  </Link>
                </li>
            
              </ul>
              {/* /.End Social Icon */}
            </div>
          </div>
          <hr className="mb-0 mt-4" />
          <div className="py-4">
            {/* Start Sub Footer Nav */}
            <ul className="list-unstyled list-separator mb-2 footer-nav">
              <li className="list-inline-item">
                <Link href="#">Privacy</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">Sitemap</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">Cookies</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">Terms &amp; Conditions</Link>
              </li>
            </ul>
            {/*  /. End Sub Footer Nav */}
            <div className="align-items-center row mb-2">
              {/* Start Footer Logo */}
              <div className="col-sm-auto footer-logo mb-3 mb-sm-0">
                <img
                  className="footer-logo__dark"
                  src="assets/img/logo/logo_white.svg"
                  alt=""
                />
              </div>
              {/* /.End Footer Logo  */}
              {/* Start Copy Rights Text */}
              <div className="col-sm-auto copy">
                © 2024 Room Angle - All Rights Reserved
              </div>
              {/* /.End Copy Rights Text */}
            </div>
          </div>
        </div>
      </footer>
      {/* /.End Footer */}
    </>
  );
}
