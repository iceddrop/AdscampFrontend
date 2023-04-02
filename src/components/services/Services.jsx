import './Services.css';
import photo2 from '../../assets/portfolio2.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc }) => {
return (
<div className="card my-5">
  <img className="card-image" src={imageSrc} alt={title} />
  <div className="card-content">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    <div className="card-link-container">
      <Link className="card-link" href="#">
      See more
      </Link>
      <FontAwesomeIcon icon={faArrowRight} size="1x" className="card-arrow" />
    </div>
  </div>
</div>
);
};

const services = [{
    title: 'Branding & Strategy',
    description: 'Making Business plans that outLines how the company will build rapport and favourability...',
    getImageSrc: () => photo2,
  },
  {
    title: 'Product Design',
    description: 'Making Business plans that outLines how the company will build rapport and favourability...',
    getImageSrc: () => photo2,
  },
  {
    title: 'Product Management',
    description: 'Making Business plans that outLines how the company will build rapport and favourability...',
    getImageSrc: () => photo2,
  },
  {
    title: 'Web Development',
    description: 'Making Business plans that outLines how the company will build rapport and favourability...',
    getImageSrc: () => photo2,
  },
];

const Services = () => {
return (
<div className="services-container">
  <h1 className="services-title text-center my-2">Our services</h1>
  <p className="services-subtitle text-center mb-5">save time managing your business with our proficient services</p>
  <div className="cards-container">
      {services.map((service) => (

      <Card key={service.title} title={service.title} description={service.description} url=""
        imageSrc={service.getImageSrc()} />
      ))}

  </div>
</div>
);
};

export default Services;