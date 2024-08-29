"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PiFacebookLogoFill } from "react-icons/pi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
const links = [
  { href: "/", text: "Home 1" },
  { href: "/home-2", text: "Home 2" },
  { href: "/home-3", text: "Home 3" },
  { href: "/home-3-header-dark", text: "Home 3 (Header dark)" },
  { href: "/properties-list", text: "Properties List" },
  { href: "/properties-grid", text: "Properties Grid" },
  { href: "/property-details", text: "Property Details 1" },
  { href: "/property-details-2", text: "Property Details 2" },
  { href: "/about", text: "About Us" },
  { href: "/agent-list", text: "Agents List" },
  { href: "/agent-grid", text: "Agents Grid" },
  { href: "/agent-details", text: "Agent Details" },
  { href: "/post-property", text: "Post Property" },
  { href: "/locations", text: "Locations" },
  { href: "/contact", text: "Contact Us" },
  { href: "/blog-1", text: "Blog 1" },
  { href: "/blog-2", text: "Blog 2" },
  { href: "/blog-details", text: "Blog Details" },
  { href: "/signin", text: "Sign In" },
  { href: "/signup", text: "Sign Up" },
  { href: "/forgot-password", text: "Forgot Password" },
  { href: "/two-factor-auth", text: "Two factor authentication" },
  { href: "/terms-conditions", text: "Terms & Conditions" },
  { href: "/not_found", text: "404 Page" },
  { href: "/505", text: "505 Page" },
  { href: "/style-guide", text: "Style Guide" },
];

export default function Header() {
  const [hasLogo, setHasLogo] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 81) {
        setHasLogo(true);
      } else {
        setHasLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Start Topbar */}
      <div className="d-none d-lg-block topbar-bg bg-[#1f5453] text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-3 col-xl-4">
              <Link href="/" className="headerLogo">
                <Image
                  width={200}
                  height={150}
                  src="/assets/img/logo/logo_white.svg"
                  alt=""
                />
                <p className="">!</p>
              </Link>
            </div>
            <div className="col-md-8 col-lg-9 col-xl-8 d-flex justify-content-end align-items-center">
              <Link target="_blank" href="https://www.facebook.com/">
                <PiFacebookLogoFill className="w-[4vh] h-[4vh] ms-4" />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/">
                <BiLogoInstagramAlt className="w-[4vh] h-[4vh] ms-4" />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/">
                <FaLinkedin className="w-[4vh] h-[4vh] ms-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Topbar */}
      {/* Start Navbar */}
      <div
        className={
          hasLogo
            ? "has-logo navbar-wrap sticky-top"
            : "no-logo navbar-wrap sticky-top"
        }
      >
        <div className="container-lg nav-container position-relative">
          <nav className="custom-navbar navbar navbar-expand-lg">
            {/* Start Navbar Brand */}
            <Link
              className=" border-end navbar-brand pe-3 pe-sm-4 py-0"
              href="/"
            >
              <img className="logo-dark" src="assets/img/us1.png" alt="" />
              <img className="logo-white" src="assets/img/us1.png" alt="" />
            </Link>
            {/* End Navbar Brand */}
            {/* Start Navbar Collapse */}
            <div className="navbar-collapse" id="navbarSupportedContent">
              {/* Start Navbar Collapse Header */}
              <div className="align-items-center border-bottom d-flex d-lg-none justify-content-between mb-3 navbar-collapse__header pb-3">
                {/* Start Brand Logo For Mobile */}
                <div className="collapse-brand flex-shrink-0">
                  <Link href="/">
                    <img src="assets/img/us.png" alt="" />
                  </Link>
                </div>
                {/* End Brand Logo For Mobile */}
                {/* Start Collapse Close Button */}
                <div className="flex-grow-1 ms-3 text-end">
                  <button
                    type="button"
                    className="bg-transparent border-0 collapse-close p-0 position-relative"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span> <span></span>
                  </button>
                </div>
                {/* End Collapse Close Button */}
              </div>
              {/* End Navbar Collapse Header */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/signup"
                    className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
                  >
                    <span className="ms-2 text-[#1f5453] text-md">
                      Register
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/signin"
                    className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
                  >
                    <span className="ms-2 text-[#1f5453] text-md">
                      Sign In
                    </span>
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                    <Link className="nav-link" href="#" role="button">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Contact
                    </Link>
                  </li> */}
              </ul>
            </div>
            {/*  /. End Navbar Collapse */}
            <div className="d-flex gap-1 ms-lg-5">
              {/* Start Cart Button */}
              {/* <Link
                href="/signup"
                className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
              >
                <span className="ms-2 text-black text-md">Register</span>
              </Link> */}
              {/* For Mobile */}
              <Link
                href="/"
                className="btn btn-primary d-none d-sm-inline-block d-xl-none"
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              {/*  /. End Cart Button */}
              {/* Start Login & Signup Button */}

              {/* /. End Login & Signup Button */}
              {/*  Start Navbar Toggler Buton */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/*  /. End Navbar Toggler Buton */}
            </div>
          </nav>
        </div>
        {/* /.End of navbar */}
      </div>
      {/* /.End of navbar */}
      {/* Start Cart Empty Modal */}
      <div
        className="modal fade"
        id="cartEmpty"
        tabIndex={-1}
        aria-labelledby="cartEmptyLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="cartEmptyLabel">
                Your Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /.End Cart Empty Modal */}
    </>
  );
}
