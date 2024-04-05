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
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #000, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, #000)",
      }}
    >
      <Slider {...settings} className="mt-2">
        {selectItem.sliderImages.map((i, index) => (
          <img src={`/images/${i}`} className="min-w-20 h-24" key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
