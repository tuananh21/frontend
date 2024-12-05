import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/all-fontawesome.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/jquery-ui.min.css";
import "../../assets/css/magnific-popup.min.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/nice-select.min.css";
import "../../assets/css/style.css";
import Header from "../Header";
import Footer from "../Footer";

function Contact() {
  return (
    <>
      {/* header area */}
      <Header />
      {/* header area end */}
      {/* popup search */}
      <div className="search-popup">
        <button className="close-search">
          <span className="far fa-times" />
        </button>
        <form action="#">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              className="form-control"
              placeholder="Search Here..."
              required=""
            />
            <button type="submit">
              <i className="far fa-search" />
            </button>
          </div>
        </form>
      </div>
      {/* popup search end */}
      <main className="main">
        {/* breadcrumb */}
        <div className="site-breadcrumb">
          <div
            className="site-breadcrumb-bg"
            style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">Contact Us</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* contact area */}
        <div className="contact-area pt-100 pb-80">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-lg-5">
                  <div className="contact-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-info">
                          <div className="contact-info-icon">
                            <i className="fal fa-map-location-dot" />
                          </div>
                          <div className="contact-info-content">
                            <h5>Office Address</h5>
                            <p>25/B Milford Elm Drive Road, New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info">
                          <div className="contact-info-icon">
                            <i className="fal fa-headset" />
                          </div>
                          <div className="contact-info-content">
                            <h5>Call Us</h5>
                            <p>+2 123 4565 788</p>
                            <p>+2 123 4565 789</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info">
                          <div className="contact-info-icon">
                            <i className="fal fa-envelopes" />
                          </div>
                          <div className="contact-info-content">
                            <h5>Email Us</h5>
                            <p>
                              <Link
                                href="https://live.themewild.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="96fff8f0f9d6f3eef7fbe6faf3b8f5f9fb"
                              >
                                [email&nbsp;protected]
                              </Link>
                            </p>
                            <p>
                              <Link
                                href="https://live.themewild.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="2e5d5b5e5e415c5a6e4b564f435e424b004d4143"
                              >
                                [email&nbsp;protected]
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info">
                          <div className="contact-info-icon">
                            <i className="fal fa-alarm-clock" />
                          </div>
                          <div className="contact-info-content">
                            <h5>Open Time</h5>
                            <p>Mon - Sat (10AM - 05PM)</p>
                            <p>
                              Sunday -{" "}
                              <span className="text-danger">Closed</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h2>Get In Touch</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page words which
                        even slightly when looking at its layout.{" "}
                      </p>
                    </div>
                    <form
                      method="post"
                      action="https://live.themewild.com/fameo/assets/php/contact.php"
                      id="contact-form"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Your Subject"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={4}
                          className="form-control"
                          placeholder="Write Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="theme-btn">
                        Send Message <i className="far fa-paper-plane" />
                      </button>
                      <div className="col-md-12 my-3">
                        <div className="form-messege text-success" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end contact area */}
        {/* newsletter area */}
        <div className="newsletter-area pb-100">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="newsletter-wrap">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="newsletter-content">
                    <h3>
                      Get <span>20%</span> Off Discount Coupon
                    </h3>
                    <p>By Subscribe Our Newsletter</p>
                    <div className="subscribe-form">
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                        <button className="theme-btn" type="submit">
                          Subscribe <i className="far fa-paper-plane" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter area end */}
        {/* map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        {/* end map */}
      </main>
      {/* footer area */}
      <Footer />
      {/* footer area end */}
      {/* scroll-top */}
      <Link href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </Link>
      {/* scroll-top end */}
      {/* js */}
    </>
  );
}

export default Contact;
