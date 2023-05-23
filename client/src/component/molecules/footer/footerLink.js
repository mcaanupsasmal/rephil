import React from "react";
import homeImage from '../../../images/room-house.jpeg'
import homeImage2 from '../../../images/room-house2.jpeg'
import pinIcon from '../../../images/pin.png'
import phoneIcon from '../../../images/email.png'
import emailIcon from '../../../images/phone.png'
import logo from'../../../images/logo.png';
import "./styles.scss";

function FooterLink() {

  return (
    <div className="FooterBootm">
        <div className="container">
            <div className="row">
                <div className="col-md-3 footerFsc-widgt footerLeftInfo infoBoxFooter">
                    <img src={logo} alt='logoFooter' />
                    <p>DreamCity brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.</p>
                    <p>CitiLights brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.</p>
                </div>
                <div className="col-md-6 footerFsc-widgt footerUseLink">
                    <div className="footerFsc-widgt floatLeft midLink">
                        <h5>Featured Property</h5>
                        <ul className="featureProp_wrap">
                            <li>
                                <img src={homeImage} alt="lessor"/>
                                <p>For Rent<br/><span>Makati City, Barangay</span></p>
                            </li>
                            <li>
                                <img src={homeImage2} alt="lessor"/>
                                <p>For Sell<br/><span>Makati City, Barangay2</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className="footerFsc-widgt floatLeft midLink">
                        <h5>Useful Link</h5>
                        <ul className="quicklink">
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Contact Support</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 footerFsc-widgt fooerIframeinfo">
                    <h5>Contact Info</h5>
                    <div className="contactINfo">
                        <div class="input-group mb-3 col-6">
                            <span class="input-group-text">
                            <img src={pinIcon} alt="lessor"/>
                            </span>
                            <p>376 Camac Street, Philipines</p>
                        </div>
                        <div class="input-group mb-3 col-6">
                            <span class="input-group-text">
                            <img src={emailIcon} alt="lessor"/>
                            </span>
                            <p><a href="mailto:info.mai@gmail.com"></a>info.mai@gmail.com</p>
                        </div>
                        <div class="input-group mb-3 col-6">
                            <span class="input-group-text">
                            <img src={phoneIcon} alt="lessor"/>
                            </span>
                            <p><a href="tel: 6221234345510">622 1234 3455 10</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FooterLink;

