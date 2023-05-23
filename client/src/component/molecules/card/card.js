import React from "react";
import rentIcon from'../../../images/rent.jpeg';
import pin from'../../../images/pin.png';
import fitScreen from'../../../images/fit-screen.png';
import bedIcon from'../../../images/bed.png';
import bathroomIcon from'../../../images/bathroom.png';
import './styles.scss';
function AssetsCard() {

  return (
    <div className="col-md-4 col-xs-12">
      <div className="blogCol">
        <div class="blogSnip">
          <div class="image">
            <img
              className=""
              src={rentIcon}
              alt="rentImage"
            />
          </div>
          <figcaption>
              <div class="contentCAption">
                  <span class="fp_price">
                      <span class="amount">Rs.3,410</span> /month 
                  </span>
                  <div class="fp-title">
                      <h4><a href="#">AVA High Line </a></h4>
                      <p class="fp-address">
                        <img
                          className=""
                          src={pin}
                          alt="rentImage"
                        />
                        525 W 28th St 
                        </p>
                  </div>
                  <div class="fp--excerpt">
                      <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take our DIY kits and go...</p>
                    </div>
              </div>
          </figcaption>
          <div class="property_detail width-100">
              <div class="area area_First">
                <img
                  className=""
                  src={fitScreen}
                  alt="rentImage"
                />
                <span>Sqft 1200</span>
              </div>
              <div class="area">
                <img
                  className=""
                  src={bedIcon}
                  alt="rentImage"
                />
                  <span>3</span>
              </div>
              <div class="area">
                <img
                  className=""
                  src={bathroomIcon}
                  alt="rentImage"
                />
                  <span>2</span>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default AssetsCard;

