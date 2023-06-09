import React from "react";
import image from "../../../images/aaa.jpeg"
import './styles.scss';

const Benifits =[
  {
      "title": 'Property Valuation',
      "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Legal Title Check',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Rates & Trends',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'EMI Calcualtor',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Easy Investment',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  },
  {
    "title": 'Research Insights',
    "description": 'Lorem isum is simly dumy text lease please update this texct and try check hello this is city to comprty'
  }
]

function BenifitsCard() {

  return (
    <>
    {Benifits.map ((data, i) => {
        return (
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="cardBenifits">
                <div class="image">
                  <img
                    className=""
                    src={image}
                    alt="rentImage"
                  />
                  <div class="cardBenifitsCaption">
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
          </div>
        );
      })} 
    </>
  );
}

export default BenifitsCard;

