import React from "react";
import homecardImage from '../../../images/minimalist-home.jpeg'
import fitScreen from'../../../images/fit-screen.png';
import bedIcon from'../../../images/bed.png';
import bathroomIcon from'../../../images/bathroom.png';
import './styles.scss';


function CategoryCard() {
   
  return (
    <>
    <div className="propertyList">
        <div className="property-featured">
            <a className="content-thumb" href="#">
                <img
                    className="aproperty"
                    src={homecardImage}
                    alt="rentImage"
                />
            </a>
            <span className="property-label">Sale</span>
            <span className="property-category">Single Family Home</span>
        </div>
        <div className="property-wrap">
            <h2 className="property-title">
                <a href="#">House for sale on Makati City Road</a>
            </h2>
            <div className="propertyDescription">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            </div>
            <div className="propertySummary">
                <div className="summaryDetails">
                    <div className="area">
                        <span className="propertyIcon">
                            <img
                                className=""
                                src={fitScreen}
                                alt="rentImage"
                            />
                        </span>
                        <span className="property-meta">217 sqft</span>
                    </div>
                    <div className="bedroom">
                        <span className="propertyIcon">
                            <img
                                className=""
                                src={bedIcon}
                                alt="rentImage"
                            />  
                        </span>
                        <span className="property-meta">2</span>
                    </div>
                    <div className="bathroom">
                        <span className="propertyIcon">
                            <img
                                className=""
                                src={bathroomIcon}
                                alt="rentImage"
                            />
                        </span>
                        <span className="property-meta">2</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default CategoryCard;
