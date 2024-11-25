import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-100 pb-40">
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box about-us">
                <Link href="index.html" className="footer-logo">
                  <img src="assets/img/logo/logo-light.png" alt="" />
                </Link>
                <p className="mb-3">
                  We are many variations of the passages available but the
                  majoro have suffered alteration injected.
                </p>
                <ul className="footer-contact">
                  <li>
                    <Link href="tel:+21236547898">
                      <i className="far fa-phone" />
                      +2 123 654 7898
                    </Link>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt" />
                    25/B Milford Road, New York
                  </li>
                  <li>
                    <Link href="https://live.themewild.com/cdn-cgi/l/email-protection#9cf5f2faf3dcf9e4fdf1ecf0f9b2fff3f1">
                      <i className="far fa-envelope" />
                      <span
                        className="__cf_email__"
                        data-cfemail="e58c8b838aa5809d8488958980cb868a88"
                      >
                        [email&nbsp;protected]
                      </span>
                    </Link>
                  </li>
                  <li>
                    <i className="far fa-clock" />
                    Mon-Fri (9.00AM - 8.00PM)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="help.html">Delivery Info</Link>
                  </li>
                  <li>
                    <Link href="contact.html">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="blog.html">Update News</Link>
                  </li>
                  <li>
                    <Link href="testimonial.html">Our Testimonials</Link>
                  </li>
                  <li>
                    <Link href="terms.html">Terms Of Service</Link>
                  </li>
                  <li>
                    <Link href="privacy.html">Privacy policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Browse Category</h4>
                <ul className="footer-list">
                  <li>
                    <Link href="shop-grid.html">Bedroom</Link>
                  </li>
                  <li>
                    <Link href="shop-grid.html">Office</Link>
                  </li>
                  <li>
                    <Link href="shop-grid.html">Living Room</Link>
                  </li>
                  <li>
                    <Link href="shop-grid.html">Bathroom</Link>
                  </li>
                  <li>
                    <Link href="shop-grid.html">Decoration</Link>
                  </li>
                  <li>
                    <Link href="shop-grid.html">Kitchen</Link>
                  </li>
                  <li>
                    <Link href="shop-grid.html">Armchair</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Support Center</h4>
                <ul className="footer-list">
                  <li>
                    <Link href="faq.html">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="help.html">How To Buy</Link>
                  </li>
                  <li>
                    <Link href="help.html">Support Center</Link>
                  </li>
                  <li>
                    <Link href="track-order.html">Track Your Order</Link>
                  </li>
                  <li>
                    <Link href="return.html">Returns Policy</Link>
                  </li>
                  <li>
                    <Link href="affiliate.html">Our Affiliates</Link>
                  </li>
                  <li>
                    <Link href="contact.html">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Get Mobile App</h4>
                <p>
                  Fameo App is now available on App Store &amp; Google Play.
                </p>
                <div className="footer-download">
                  <h5>Download Our Mobile App</h5>
                  <div className="footer-download-btn">
                    <Link href="#">
                      <i className="fab fa-google-play" />
                      <div className="download-btn-info">
                        <span>Get It On</span>
                        <h6>Google Play</h6>
                      </div>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-app-store" />
                      <div className="download-btn-info">
                        <span>Get It On</span>
                        <h6>App Store</h6>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="footer-payment mt-20">
                  <span>We Accept:</span>
                  <img src="assets/img/payment/visa.svg" alt="" />
                  <img src="assets/img/payment/mastercard.svg" alt="" />
                  <img src="assets/img/payment/amex.svg" alt="" />
                  <img src="assets/img/payment/discover.svg" alt="" />
                  <img src="assets/img/payment/paypal.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright-wrap">
            <div className="row">
              <div className="col-12 col-lg-6 align-self-center">
                <p className="copyright-text">
                  © Copyright <span id="date" />{" "}
                  <Link href="index.html"> Fameo </Link> All Rights Reserved.
                </p>
              </div>
              <div className="col-12 col-lg-6 align-self-center">
                <div className="footer-social">
                  <span>Follow Us:</span>
                  <Link href="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="#">
                    <i className="fab fa-x-twitter" />
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link href="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
