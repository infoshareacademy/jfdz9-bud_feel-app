import React from 'react';
import Carousel from 'nuka-carousel';

import slide_1 from '../../assets/carousel_slide_1.jpg';
import slide_2 from '../../assets/carousel_slide_2.jpg';
import slide_3 from '../../assets/carousel_slide_3.jpg';
import slide_4 from '../../assets/carousel_slide_4.jpg';


class SectionCarousel extends React.Component {

    state = {
        width: "60%",
        autoplay: true,
        wrapAround: true
        };

    render() {
        return (

            <Carousel
                width={this.state.width}
                autoplay={this.state.autoplay}
                wrapAround={this.state.wrapAround}
            >
                <img src={ slide_1 } />
                <img src={ slide_2 } />
                <img src={ slide_3 } />
                <img src={ slide_4 } />
            </Carousel>
        );
    }
}
export default SectionCarousel;