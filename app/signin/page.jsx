"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(""); // Ensure this is defined here

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = isPasswordVisible ? "text" : "password";

  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  return (
    <div>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-10">
                <div className="align-items-center g-4 row">
                  <div className="col-lg-6 col-xl-5 text-center">
                    {/* Start Header Text */}
                    <div className="text-center mb-4">
                      <h3 className="fw-semibold">
                        Sign into your account
                      </h3>
                      <p className="text-muted text-center mb-0">
                        Nice to see you! Please log in with your account.
                      </p>
                    </div>
                    {/* /.End Header Text */}
                    {/* Start Social Button Wrapper */}
                    <div className="d-grid gap-3 mb-3">
                      {/* Start Social login Button */}
                      <Link
                        className="align-items-center bg-grey btn btn-lg d-flex linkedin-btn position-relative text-start"
                        href="#"
                      >
                        <img src="assets/img/linkdin.svg" alt="" />
                        <span className="ms-3">Sign up with LinkedIn</span>
                      </Link>
                      {/* /.End Social login Button */}
                      {/* Start Social login Button */}
                      <Link
                        className="bg-grey btn btn-lg google-btn d-flex align-items-center position-relative text-start"
                        href="#"
                      >
                        <img src="assets/img/google.svg" alt="" />
                        <span className="ms-3">Sign up with Google</span>
                      </Link>
                      {/* Start Social login Button */}
                    </div>
                    {/* /.End Social Button Wrapper */}
                    {/* Start Text */}
                    <p>
                      We won't post anything without your permission and your
                      personal details are kept private
                    </p>
                    {/* /.End Text */}
                    {/* Start Divider */}
                    <div className="align-items-center d-flex my-4">
                      <hr className="flex-grow-1 m-0" />
                      <span className="fs-16 fw-bold px-3 text-dark">Or</span>
                      <hr className="flex-grow-1 m-0" />
                    </div>
                    {/* /.End Divider */}
                    <form className="register-form">
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Enter Email</label>
                        <input
                          type="email"
                          className="form-control is-invalid"
                          required
                        />
                        <div className="invalid-feedback text-start">
                          Enter your valid email
                        </div>
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Password</label>
                        <input
                          id="password"
                          type={inputType}
                          className="form-control password"
                          autoComplete="off"
                        />
                        <i
                          className={`toggle-password ${
                            isPasswordVisible
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
                          }`}
                          onClick={togglePasswordVisibility}
                        ></i>
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Checkbox */}
                      <div className="form-check mb-4 text-start">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me next time
                        </label>
                      </div>
                      {/* /.End Checkbox */}
                      {/* Start of options */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          left: "10px",
                          //   border: "2px solid black",
                        }}
                        className="gap-x-5 mb-4"
                      >
                        <label
                          //   style={{ border: "2px solid black" }}
                          className="block required mb-1 font-medium text-gray-700"
                        >
                          Choose Your Hotel
                        </label>
                        <select
                          // value={selectedHotel} // Use the selectedHotel state value directly
                          // onChange={handleHotelChange}
                          value={selectedHotel} // ...force the select's value to match the state variable...
                          onChange={(e) => setSelectedHotel(e.target.value)} // ... and update the state variable on any change!
                          className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        >
                          <option value="">Select Hotel</option>
                          <option value="Hotel A">Hotel A</option>
                          <option value="Hotel B">Hotel B</option>
                          <option value="Hotel C">Hotel C</option>
                        </select>
                      </div>
                      {/* End of options */}
                      {/* Start Button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        Sign in
                      </button>
                      {/* /.End Button */}
                    </form>
                    {/* Start Bottom Text */}
                    <div className="bottom-text text-center my-3">
                      {" "}
                      Don't have an account?{" "}
                      <Link
                        href="signup"
                        className="fw-medium text-decoration-underline"
                      >
                        Sign Up
                      </Link>
                      <br /> Remind{" "}
                      <Link
                        href="#"
                        className="fw-medium text-decoration-underline"
                      >
                        Password
                      </Link>
                    </div>
                    {/* /.End Bottom Text */}
                  </div>
                  <div className="col-lg-6 col-xl-7 order-lg-first pe-xl-5">
                    {/* Start Image */}
                    <img
                      src="assets/img/mark_black.png"
                      alt=""
                      className="img-fluid"
                    />
                    {/* /.End Image */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </div>
  );
}
