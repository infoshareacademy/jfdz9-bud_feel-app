import React from 'react';
import Carousel from 'nuka-carousel';
import {withStyles} from '@material-ui/core/styles';
import './Carousel.css';

import slide_1 from '../../../assets/intoduction.jpg';
import slide_2 from '../../../assets/intoduction2.jpg';
import slide_3 from '../../../assets/intoduction3.jpg';


/*
const styles = theme => ({
    defaultButtonStyles: {
        background: "blue"

 }
});

*/


const SectionCarousel = () => {

    const carouselParameters = {


        width: "90%",
        autoplay: true,
        wrapAround: true,
        initialSlideHeight: 400,

    };

    return (
        <div class="carousel-border">
            <Carousel
                width={carouselParameters.width}
                autoplay={carouselParameters.autoplay}
                wrapAround={carouselParameters.wrapAround}
                initialSlideHeight={carouselParameters.initialSlideHeight}
            >
                <img src={slide_1}/>
                <img src={slide_2}/>
                <img src={slide_3}/>

            </Carousel>
        </div>
    );
};
export default SectionCarousel;
