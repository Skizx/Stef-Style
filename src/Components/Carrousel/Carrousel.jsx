import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carrousel.scss';

const Carrousel = () => {

    const carouselPics = [
        {
            id: 1,
            image:'https://fotomelia.com/wp-content/uploads/edd/2015/08/photo-libre-de-droit60-1560x1040.jpg',
        },
        {
            id: 2,
            image: 'https://www.lalibre.be/resizer/DGE8W72XCAJS12BewACaZXZ_LZQ=/768x512/filters:format(jpeg):focal(465x240:475x230)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/FYCKR7NSP5FABLPDY4RRWTVSRA.jpg'
        },
    ]

    return (
        <div>
            <Carousel>
                {carouselPics.map((slides) => (
                    <div className='carousel-container' key={slides.id}>
                        <img className='carousel-container_img' src={slides.image} alt="" />
                        <div className='carousel-container_contact'>
                            <Link to='/Contact' className='carousel-container_contact--link'>Contactez-nous pour un rendez-vous</Link>
                        </div>
                    </div>

                ))}
            </Carousel>
        </div>
    );
};

export default Carrousel;