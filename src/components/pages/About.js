import { Link } from "react-router-dom";
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

import breadcrumb1 from "../../assets/img/breadcrumb/01.jpg";

import about1 from "../../assets/img/about/01.jpg";
import about2 from "../../assets/img/about/02.jpg";
import about3 from "../../assets/img/about/03.jpg";

import sale from "../../assets/img/icon/sale.svg";
import rate from "../../assets/img/icon/rate.svg";
import employee from "../../assets/img/icon/employee.svg";
import award from "../../assets/img/icon/award.svg";

import testimonial1 from "../../assets/img/testimonial/01.jpg";

import team1 from "../../assets/img/team/01.jpg";
import team2 from "../../assets/img/team/02.jpg";
import team3 from "../../assets/img/team/03.jpg";
import team4 from "../../assets/img/team/04.jpg";


function About() {
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
            style={{ background: `url(${breadcrumb1})` }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">About Us</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* about area */}
        <div className="about-area py-120 mt-30 mb-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="about-left wow fadeInLeft"
                  data-wow-delay=".25s"
                >
                  <div className="about-img">
                    <img
                      className="img-1"
                      src={about1}
                      alt=""
                    />
                    <img
                      className="img-2"
                      src={about2}
                      alt=""
                    />
                    <img
                      className="img-3"
                      src={about3}
                      alt=""
                    />
                  </div>
                  <div className="about-experience">
                    <div className="about-experience-icon">
                      <img src="assets/img/icon/experience.svg" alt="" />
                    </div>
                    <b>
                      30 Years Of <br /> Experience
                    </b>
                  </div>
                  <div className="about-shape">
                    <img src="assets/img/shape/01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about-right wow fadeInRight"
                  data-wow-delay=".25s"
                >
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline justify-content-start">
                      <i className="flaticon-drive" /> About Us
                    </span>
                    <h2 className="site-title">
                      We Provide Best And Quality <span>Furniture</span> Product
                      For You
                    </h2>
                  </div>
                  <p>
                    We are standard text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five but also the
                    leap into electronic remaining essentially by injected
                    humour unchanged.
                  </p>
                  <div className="about-list">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" /> Streamlined
                        Shipping Experience
                      </li>
                      <li>
                        <i className="fas fa-check-double" /> Affordable Modern
                        Design
                      </li>
                      <li>
                        <i className="fas fa-check-double" /> Competitive Price
                        &amp; Easy To Shop
                      </li>
                      <li>
                        <i className="fas fa-check-double" /> We Made Awesome
                        Products
                      </li>
                    </ul>
                  </div>
                  <Link href="contact.html" className="theme-btn mt-4">
                    Discover More
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about area end */}
        {/* counter area */}
        <div className="counter-area pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={sale} alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={50}
                        data-speed={3000}
                      >
                        50
                      </span>
                      <span className="counter-sign">k</span>
                    </div>
                    <h6 className="title">Total Sales </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={rate} alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={90}
                        data-speed={3000}
                      >
                        90
                      </span>
                      <span className="counter-sign">k</span>
                    </div>
                    <h6 className="title">Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={employee} alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={150}
                        data-speed={3000}
                      >
                        150
                      </span>
                      <span className="counter-sign">+</span>
                    </div>
                    <h6 className="title">Team Workers</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={award} alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={30}
                        data-speed={3000}
                      >
                        30
                      </span>
                      <span className="counter-sign">+</span>
                    </div>
                    <h6 className="title">Win Awards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter area end */}
        {/* team-area */}
        <div className="team-area pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Our Team</span>
                  <h2 className="site-title">
                    Meet Our Expert <span>Team</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="team-img">
                    <img src={team1} alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Chad Smith</Link>
                      </h5>
                      <span>Senior Manager</span>
                    </div>
                  </div>
                  <div className="team-social">
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
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                  <div className="team-img">
                    <img src={team2} alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Malissa Fie</Link>
                      </h5>
                      <span>SEO Expert</span>
                    </div>
                  </div>
                  <div className="team-social">
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
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                  <div className="team-img">
                    <img src={team3} alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Arron Rodri</Link>
                      </h5>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="team-social">
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
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay="1s">
                  <div className="team-img">
                    <img src={team4} alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Tony Pinako</Link>
                      </h5>
                      <span>Digital Marketer</span>
                    </div>
                  </div>
                  <div className="team-social">
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
        {/* team-area end */}
        {/* feature area */}
        <div className="feature-area2 pb-100">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="feature-wrap">
              <div className="row g-0">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-truck" />
                    </div>
                    <div className="feature-content">
                      <h4>Free Delivery</h4>
                      <p>Orders Over $120</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-sync" />
                    </div>
                    <div className="feature-content">
                      <h4>Get Refund</h4>
                      <p>Within 30 Days Returns</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-wallet" />
                    </div>
                    <div className="feature-content">
                      <h4>Safe Payment</h4>
                      <p>100% Secure Payment</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-headset" />
                    </div>
                    <div className="feature-content">
                      <h4>24/7 Support</h4>
                      <p>Feel Free To Call Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature area end */}
        {/* instagram-area */}
        <div className="instagram-area pb-100">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title">
                    Instagram <span>@Fameo</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="instagram-slider owl-carousel owl-theme">
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/01.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/02.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/03.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/04.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/05.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/06.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/07.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* instagram-area end */}
        {/* brand area */}
        <div className="brand-area bg pt-50 pb-50">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h2 className="site-title">
                    Trusted by over <span>3.2k+</span> companies
                  </h2>
                </div>
              </div>
            </div>
            <div className="brand-slider owl-carousel owl-theme">
              <div className="brand-item">
                <img src="assets/img/brand/01.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/02.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/03.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/04.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/05.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/06.png" alt="" />
              </div>
            </div>
            <div className="text-center">
              <Link href="#" className="theme-btn">
                View All Brands <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        {/* brand area end */}
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

export default About;
