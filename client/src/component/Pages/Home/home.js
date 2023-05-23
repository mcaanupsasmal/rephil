import Carousel from 'react-bootstrap/Carousel';
import banner from'../../../images/banner-image.jpeg';
import HomeTabs from './tabs';
import AssetsCard from '../../molecules/card/card'
import BenifitsCard from '../../molecules/benifitsCard/benifitsCard'
import InqueryCard from './inqueryForm'
import TestimonialsCard from '../../molecules/testimonialsCard/testimonials'
import Partner from './partner'
import './styles.scss';
import NavbarComp from '../../Header/NavBarComp';
import Footer from '../../molecules/footer';

function Home() {
  return (
    <>
    <NavbarComp /> 
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <HomeTabs/>
      <div className="container mt-5 mb-5">
        <div className="row gy-1">
          <div className='featureTitle'>
            <h2>Our Featured Exclusive</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          {[...Array(3).keys()].map((item) => (
              <AssetsCard />
          ))}
        </div>
      </div>
      <InqueryCard />
      <div className="container mt-5 mb-5">
        <div className="row gy-1 flexCenter">
          <div className='featureTitle mt-5'>
            <h2>Our Featured Exclusive</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row flexCenter'>
              <BenifitsCard />
          </div>
        </div>
      </div>
      <div className="container-fluid testimonialsBg mt-5">
        <div className="row gy-1 flexCenter">
          <div className='featureTitle mt-5'>
            <h2>Testimonials</h2>
            <p className='mb-5'>Being a metropolitan city, Kolkata has seen a dramatic positive change in real estate development.</p>
          </div>
          <div className='row flexCenter'>
              <TestimonialsCard />
          </div>
        </div>
      </div>
      <div className="container partnerRealcity">
        <Partner />
      </div>
      <Footer />
    </>
  );
}
export default Home;