import React from 'react';
import { CardBody, Card } from 'reactstrap';
import { CarouselsData } from '../../../Data/Bonus-ui/Data';
import Image from '../../../CommonElements/Media';
import Slider from 'react-slick';
import HeaderCard from '../../Common/Component/HeaderCard';

const SlickSlider = ({ slides,scroll, rtl, title, lazyLoad, autoplay, focusOnSelect, center}) => {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: autoplay,
    speed: 1000,
    arrows: false,
    slidesToShow: slides,
    slidesToScroll: scroll,
    adaptiveHeight: true,
    centerPadding: '10px',
    centerMode: center? true:false,
    rtl: rtl,
    focusOnSelect: focusOnSelect ? true : false,
    lazyLoad: lazyLoad ? true : false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <Card>
      <HeaderCard title={title} />
      <CardBody>
        <Slider {...settings} >
          {
            CarouselsData.map((item,i) =>
              <div className="item" key={i}>
                <Image attrImage={{ src: `${item.img}`, alt: '', className: 'img-fluid' }} />
              </div>
            )
          }
        </Slider>
      </CardBody>
    </Card>
  );
};

export default SlickSlider;

