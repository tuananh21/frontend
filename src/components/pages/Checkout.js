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

function Checkout() {
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
              <h4 className="breadcrumb-title">Shop Checkout</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Shop Checkout</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* shop checkout */}
        <div className="shop-checkout py-90">
          <div className="container">
            <div className="shop-checkout-wrap">
              <div className="row">
                <div className="col-lg-8">
                  <div className="shop-checkout-step">
                    <div className="accordion" id="shopCheckout">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#checkoutStep1"
                            aria-expanded="true"
                            aria-controls="checkoutStep1"
                          >
                            Your Billing Address
                          </button>
                        </h2>
                        <div
                          id="checkoutStep1"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#shopCheckout"
                        >
                          <div className="accordion-body">
                            <div className="shop-checkout-form">
                              <form action="#">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Phone</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <label>Address Line 1</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address Line 1"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <label>Address Line 2</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address Line 2"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Country</label>
                                      <select className="select">
                                        <option value="">Choose Country</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">
                                          Åland Islands
                                        </option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">
                                          American Samoa
                                        </option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">
                                          Antigua and Barbuda
                                        </option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BA">
                                          Bosnia and Herzegovina
                                        </option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">
                                          Bouvet Island
                                        </option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">
                                          British Indian Ocean Territory
                                        </option>
                                        <option value="VG">
                                          British Virgin Islands
                                        </option>
                                        <option value="BN">Brunei</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">
                                          Cayman Islands
                                        </option>
                                        <option value="CF">
                                          Central African Republic
                                        </option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">
                                          Christmas Island
                                        </option>
                                        <option value="CC">
                                          Cocos [Keeling] Islands
                                        </option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">
                                          Congo - Brazzaville
                                        </option>
                                        <option value="CD">
                                          Congo - Kinshasa
                                        </option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">
                                          Côte d’Ivoire
                                        </option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">
                                          Czech Republic
                                        </option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">
                                          Dominican Republic
                                        </option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">
                                          Equatorial Guinea
                                        </option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">
                                          Falkland Islands
                                        </option>
                                        <option value="FO">
                                          Faroe Islands
                                        </option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">
                                          French Guiana
                                        </option>
                                        <option value="PF">
                                          French Polynesia
                                        </option>
                                        <option value="TF">
                                          French Southern Territories
                                        </option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">
                                          Guinea-Bissau
                                        </option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">
                                          Heard Island and McDonald Islands
                                        </option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">
                                          Hong Kong SAR China
                                        </option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Laos</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">
                                          Liechtenstein
                                        </option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">
                                          Macau SAR China
                                        </option>
                                        <option value="MK">Macedonia</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">
                                          Marshall Islands
                                        </option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia</option>
                                        <option value="MD">Moldova</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">
                                          Myanmar [Burma]
                                        </option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="AN">
                                          Netherlands Antilles
                                        </option>
                                        <option value="NC">
                                          New Caledonia
                                        </option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">
                                          Norfolk Island
                                        </option>
                                        <option value="MP">
                                          Northern Mariana Islands
                                        </option>
                                        <option value="KP">North Korea</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">
                                          Palestinian Territories
                                        </option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">
                                          Papua New Guinea
                                        </option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">
                                          Pitcairn Islands
                                        </option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russia</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">
                                          Saint Barthélemy
                                        </option>
                                        <option value="SH">Saint Helena</option>
                                        <option value="KN">
                                          Saint Kitts and Nevis
                                        </option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin</option>
                                        <option value="PM">
                                          Saint Pierre and Miquelon
                                        </option>
                                        <option value="VC">
                                          Saint Vincent and the Grenadines
                                        </option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">
                                          São Tomé and Príncipe
                                        </option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">
                                          Solomon Islands
                                        </option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">
                                          South Georgia
                                        </option>
                                        <option value="KR">South Korea</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">
                                          Svalbard and Jan Mayen
                                        </option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syria</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">
                                          Trinidad and Tobago
                                        </option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">
                                          Turks and Caicos Islands
                                        </option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">
                                          United Arab Emirates
                                        </option>
                                        <option value="US">
                                          United Kingdom
                                        </option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UM">
                                          U.S. Minor Outlying Islands
                                        </option>
                                        <option value="VI">
                                          U.S. Virgin Islands
                                        </option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VA">Vatican City</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="WF">
                                          Wallis and Futuna
                                        </option>
                                        <option value="EH">
                                          Western Sahara
                                        </option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>City</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Post Code</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Post Code"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>State</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="State"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <label>Your Message For Order</label>
                                      <textarea
                                        cols={30}
                                        rows={4}
                                        className="form-control"
                                        placeholder="Your Message"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <button
                                      type="button"
                                      className="theme-btn theme-btn2"
                                    >
                                      <span className="fas fa-arrow-left" />
                                      Back To Cart
                                    </button>
                                    <button type="submit" className="theme-btn">
                                      Next Step
                                      <i className="fas fa-arrow-right" />
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#checkoutStep2"
                            aria-expanded="false"
                            aria-controls="checkoutStep2"
                          >
                            Your Shipping Address
                          </button>
                        </h2>
                        <div
                          id="checkoutStep2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#shopCheckout"
                        >
                          <div className="accordion-body">
                            <div className="shop-checkout-form">
                              <form action="#">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-check mb-20">
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
                                        My shipping and mailing addresses are
                                        the same.
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Phone</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <label>Address Line 1</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address Line 1"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <label>Address Line 2</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address Line 2"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Country</label>
                                      <select className="select">
                                        <option value="">Choose Country</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">
                                          Åland Islands
                                        </option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">
                                          American Samoa
                                        </option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">
                                          Antigua and Barbuda
                                        </option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BA">
                                          Bosnia and Herzegovina
                                        </option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">
                                          Bouvet Island
                                        </option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">
                                          British Indian Ocean Territory
                                        </option>
                                        <option value="VG">
                                          British Virgin Islands
                                        </option>
                                        <option value="BN">Brunei</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">
                                          Cayman Islands
                                        </option>
                                        <option value="CF">
                                          Central African Republic
                                        </option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">
                                          Christmas Island
                                        </option>
                                        <option value="CC">
                                          Cocos [Keeling] Islands
                                        </option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">
                                          Congo - Brazzaville
                                        </option>
                                        <option value="CD">
                                          Congo - Kinshasa
                                        </option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">
                                          Côte d’Ivoire
                                        </option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">
                                          Czech Republic
                                        </option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">
                                          Dominican Republic
                                        </option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">
                                          Equatorial Guinea
                                        </option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">
                                          Falkland Islands
                                        </option>
                                        <option value="FO">
                                          Faroe Islands
                                        </option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">
                                          French Guiana
                                        </option>
                                        <option value="PF">
                                          French Polynesia
                                        </option>
                                        <option value="TF">
                                          French Southern Territories
                                        </option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">
                                          Guinea-Bissau
                                        </option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">
                                          Heard Island and McDonald Islands
                                        </option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">
                                          Hong Kong SAR China
                                        </option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Laos</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">
                                          Liechtenstein
                                        </option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">
                                          Macau SAR China
                                        </option>
                                        <option value="MK">Macedonia</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">
                                          Marshall Islands
                                        </option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia</option>
                                        <option value="MD">Moldova</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">
                                          Myanmar [Burma]
                                        </option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="AN">
                                          Netherlands Antilles
                                        </option>
                                        <option value="NC">
                                          New Caledonia
                                        </option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">
                                          Norfolk Island
                                        </option>
                                        <option value="MP">
                                          Northern Mariana Islands
                                        </option>
                                        <option value="KP">North Korea</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">
                                          Palestinian Territories
                                        </option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">
                                          Papua New Guinea
                                        </option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">
                                          Pitcairn Islands
                                        </option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russia</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">
                                          Saint Barthélemy
                                        </option>
                                        <option value="SH">Saint Helena</option>
                                        <option value="KN">
                                          Saint Kitts and Nevis
                                        </option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin</option>
                                        <option value="PM">
                                          Saint Pierre and Miquelon
                                        </option>
                                        <option value="VC">
                                          Saint Vincent and the Grenadines
                                        </option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">
                                          São Tomé and Príncipe
                                        </option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">
                                          Solomon Islands
                                        </option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">
                                          South Georgia
                                        </option>
                                        <option value="KR">South Korea</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">
                                          Svalbard and Jan Mayen
                                        </option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syria</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">
                                          Trinidad and Tobago
                                        </option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">
                                          Turks and Caicos Islands
                                        </option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">
                                          United Arab Emirates
                                        </option>
                                        <option value="US">
                                          United Kingdom
                                        </option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UM">
                                          U.S. Minor Outlying Islands
                                        </option>
                                        <option value="VI">
                                          U.S. Virgin Islands
                                        </option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VA">Vatican City</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="WF">
                                          Wallis and Futuna
                                        </option>
                                        <option value="EH">
                                          Western Sahara
                                        </option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>City</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>Post Code</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Post Code"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label>State</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="State"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="shop-shipping-method">
                                      <h6>Choose Shipping Method</h6>
                                      <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xxl-3">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              defaultChecked=""
                                              name="method"
                                              id="ssm-1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="ssm-1"
                                            >
                                              Standard
                                              <span>Shipping Cost - Free</span>
                                              <span>6-7 Days</span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-3">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="method"
                                              id="ssm-2"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="ssm-2"
                                            >
                                              Express
                                              <span>Shipping Cost - $20</span>
                                              <span>1-2 Days</span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-3">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="method"
                                              id="ssm-3"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="ssm-3"
                                            >
                                              Courier
                                              <span>Shipping Cost - $30</span>
                                              <span>2-3 Days</span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-3">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="method"
                                              id="ssm-4"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="ssm-4"
                                            >
                                              Fastgo
                                              <span>Shipping Cost - $15</span>
                                              <span>1-3 Days</span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <button
                                      type="button"
                                      className="theme-btn theme-btn2"
                                    >
                                      <span className="fas fa-arrow-left" />
                                      Previous
                                    </button>
                                    <button type="submit" className="theme-btn">
                                      Next Step
                                      <i className="fas fa-arrow-right" />
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#checkoutStep3"
                            aria-expanded="false"
                            aria-controls="checkoutStep3"
                          >
                            Your Payment Info
                          </button>
                        </h2>
                        <div
                          id="checkoutStep3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#shopCheckout"
                        >
                          <div className="accordion-body">
                            <div className="shop-checkout-payment">
                              <ul
                                className="nav nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <Link
                                    className="nav-link active"
                                    id="pills-tab-1"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-1"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-1"
                                    aria-selected="true"
                                  >
                                    <div className="checkout-card-img">
                                      <img
                                        src="assets/img/payment/mastercard.svg"
                                        alt=""
                                      />
                                      <img
                                        src="assets/img/payment/visa.svg"
                                        alt=""
                                      />
                                      <img
                                        src="assets/img/payment/amex.svg"
                                        alt=""
                                      />
                                      <img
                                        src="assets/img/payment/discover.svg"
                                        alt=""
                                      />
                                    </div>
                                    <span>Pay With Credit Card</span>
                                  </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <Link
                                    className="nav-link"
                                    id="pills-tab-2"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-2"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-2"
                                    aria-selected="false"
                                  >
                                    <div className="checkout-payment-img">
                                      <img
                                        src="assets/img/payment/paypal-2.svg"
                                        alt=""
                                      />
                                    </div>
                                    <span>Pay With PayPal</span>
                                  </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <Link
                                    className="nav-link"
                                    id="pills-tab-3"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-3"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-3"
                                    aria-selected="false"
                                  >
                                    <div className="checkout-payment-img">
                                      <img
                                        src="assets/img/payment/payoneer.svg"
                                        alt=""
                                      />
                                    </div>
                                    <span>Pay With Payoneer</span>
                                  </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <Link
                                    className="nav-link"
                                    id="pills-tab-4"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-4"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-4"
                                    aria-selected="false"
                                  >
                                    <div className="checkout-payment-img cod">
                                      <img
                                        src="assets/img/payment/cod-3.svg"
                                        alt=""
                                      />
                                    </div>
                                    <span>Cash On Delivery</span>
                                  </Link>
                                </li>
                              </ul>
                              <div
                                className="tab-content"
                                id="pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="pills-1"
                                  role="tabpanel"
                                  aria-labelledby="pills-tab-1"
                                  tabIndex={0}
                                >
                                  <div className="shop-checkout-form">
                                    <form action="#">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Card Holder Name</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Name On Card"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Card Number</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Your Card Number"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Expire Date</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Expire"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>CCV</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="CVV"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <button
                                            type="button"
                                            className="theme-btn theme-btn2"
                                          >
                                            <span className="fas fa-arrow-left" />
                                            Previous
                                          </button>
                                          <button
                                            type="submit"
                                            className="theme-btn"
                                          >
                                            Pay Now
                                            <i className="fas fa-arrow-right" />
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-2"
                                  role="tabpanel"
                                  aria-labelledby="pills-tab-2"
                                  tabIndex={0}
                                >
                                  <div className="shop-checkout-form">
                                    <form action="#">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Email Address</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Email"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Password</label>
                                            <input
                                              type="password"
                                              className="form-control"
                                              placeholder="Password"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <button
                                            type="submit"
                                            className="theme-btn"
                                          >
                                            Login Account
                                            <i className="fas fa-arrow-right" />
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-3"
                                  role="tabpanel"
                                  aria-labelledby="pills-tab-3"
                                  tabIndex={0}
                                >
                                  <div className="shop-checkout-form">
                                    <form action="#">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Email Address</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Email"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Password</label>
                                            <input
                                              type="password"
                                              className="form-control"
                                              placeholder="Password"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <button
                                            type="submit"
                                            className="theme-btn"
                                          >
                                            Login Account
                                            <i className="fas fa-arrow-right" />
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-4"
                                  role="tabpanel"
                                  aria-labelledby="pills-tab-4"
                                  tabIndex={0}
                                >
                                  <div className="shop-checkout-form cod">
                                    <form action="#">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <div className="form-check mb-20">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              defaultValue=""
                                              id="cod"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="cod"
                                            >
                                              Cash On Delivery
                                              <span>
                                                Please read our{" "}
                                                <Link href="#">
                                                  Terms And Conditions
                                                </Link>{" "}
                                                for cash on delivery.
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="shop-cart-summary mt-0">
                    <h5>Cart Summary</h5>
                    <ul>
                      <li>
                        <strong>Sub Total:</strong> <span>$4,500.00</span>
                      </li>
                      <li>
                        <strong>Discount:</strong> <span>$5.00</span>
                      </li>
                      <li>
                        <strong>Shipping:</strong> <span>Free</span>
                      </li>
                      <li>
                        <strong>Taxes:</strong> <span>$25.00</span>
                      </li>
                      <li className="shop-cart-total">
                        <strong>Total:</strong> <span>$4,520.00</span>
                      </li>
                    </ul>
                    <div className="text-end mt-40">
                      <Link href="#" className="theme-btn">
                        Checkout Now
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop checkout end */}
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

export default Checkout;
