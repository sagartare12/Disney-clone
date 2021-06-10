import React from 'react'
import Styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 const ImgSlidder = () => {
     let settings = {
         dots: true,
         infinite: true,
         speed : 500,
         slideToShow: 1,
         autoplay: true
     }

     const SLIDER_IMAGES =[
         "/images/slider-badging.jpg",
         "/images/slider-badag.jpg",
          "/images/slider-scale.jpg",
           "/images/slider-scales.jpg"

     ]
    return (
        <Carousel {...settings}>
            
            {
                SLIDER_IMAGES.map((item) => (
                <Wrap>
                <img src={item} alt="" />
            </Wrap>
                ))}
        </Carousel>
    )
}
export default ImgSlidder

const Carousel = Styled(Slider)`
    margin-top: 20px;

ul li button{
    &:before{
        font-size: 10px;
        color: white;
    }
}

li.slick-active button:before{
    color: white;
}

    .slick-list{
        overflow:  visible;
    }

    button{
        z-index: 1;
    }
`;


const Wrap = Styled.div`
cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        
        


        &:hover{
            border: 4px solid rgba(249 , 249 , 249 , 0.0);
        }
    }
`;