import React from "react";
import partnerImg from '../../../images/partner.jpeg';
import partnerImg2 from '../../../images/partner-2.jpeg';
import partnerImg3 from '../../../images/partner-3.jpeg';
import partnerImg4 from '../../../images/partner-4.jpeg';
import partnerImg5 from '../../../images/partner-5.jpeg';
import './styles.scss';

const partners =[
  {
    "image": partnerImg,
  },
  {
    "image": partnerImg2,
  },
  {
    "image": partnerImg3,
  },
  {
    "image": partnerImg4,
  },
  {
    "image": partnerImg5,
  },
]

function Partner() {

  return (
    <>
    {partners.map ((data, i) => {
        return (
            <div className="partnersWrap">
                <img
                  className=""
                  src={data.image}
                  alt="partner"
                />
            </div>
        );
      })} 
    </>
  );
}

export default Partner;

