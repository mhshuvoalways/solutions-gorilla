import Slider from "react-slick";

const SliderComponent = ({ selectItem }) => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="bg-black mt-2">
      {selectItem.sliderImages.map((i, index) => (
        <img src={`/images/${i}`} className="min-w-20 h-24" key={index} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
