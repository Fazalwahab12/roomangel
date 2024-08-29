"use client";

import Link from "next/link";

export default function StripeNotification() {
  return (
    <div>
      {/* Start Main Content */}
      <div className="main-content ">
        {/* Start Notification Content */}
        <div className="py-5 ">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-9 col-lg-7 text-center">
                {/* Start Image */}

                {/* /.End Image */}
                <div className=" items-center flex justify-between flex-col space-y-5">
                  <img
                    src="assets/img/mark_black.png"
                    alt="Stripe Notification"
                    className="w-[30vh]"
                  />
                  <h2 className="fw-semibold mb-3 text-capitalize">
                    Make The Payment
                  </h2>
                  <p className="fs-16">
                    Go to stripe and make the payment of your desired item. After poayment you will be contacted shortly regarding your query and guided accordingly.
                  </p>
                  {/* Start Buttons */}
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <Link
                      href="/"
                      className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                    >
                      <span>Go To Stripe</span>
                      <span className="vr" />
                      <i className="fa-arrow-right fa-solid fs-14" />
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-secondary btn-lg d-inline-flex hstack gap-2"
                    >
                      <span>View Order Details</span>
                      <span className="vr" />
                      <i className="fa-arrow-right fa-solid fs-14" />
                    </Link>
                  </div>
                  {/* /.End Buttons */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Notification Content */}
      </div>
      {/* /. End Main Content */}
    </div>
  );
}
