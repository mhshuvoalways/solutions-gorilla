import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider() {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/argo.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/istio.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/kubernetes.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/kyverno.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/argo.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/istio.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/kubernetes.svg" className="w-full h-full" />
      </div>
      <div className="border-2 border-black rounded-lg focus:outline-0 p-2 h-80 lg:h-auto shadow-md">
        <img src="/images/kyverno.svg" className="w-full h-full" />
      </div>
    </Slider>
  );
}
