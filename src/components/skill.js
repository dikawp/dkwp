import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import {bootstrap, css, firebase, html, js, laravel, node, php, py, tw, react, sql} from '../images/tech/index'

export const Skills = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    centerMode: true,
    arrows: false,
    cssEase:'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" mt-40 bg-transparent border-y dark:bg-slate-800">
      <h1 className="text-center text-xl pt-14">Skills</h1>
      <h1 className="text-center text-3xl text-red-600 font-bold">
        Tech{" & "}
        <span className="text-gray-500 dark:text-white">Stack</span>
      </h1>
      <div className="flex justify-center">
        <div className="w-full my-8 flex flex-col justify-center h-48">
          <Slider {...settings}>
            <img src={html} alt="html" className="img-tech"/>
            <img src={css} alt="css" className="img-tech"/>
            <img src={js} alt="js" className="img-tech"/>
            <img src={php} alt="php" className="img-tech"/>
            <img src={py} alt="py" className="img-tech"/>
            <img src={bootstrap} alt="bs" className="img-tech"/>
            <img src={tw} alt="tw" className="img-tech"/>
            <img src={react} alt="react" className="img-tech"/>
            <img src={laravel} alt="laravel" className="img-tech"/>
            <img src={node} alt="node" className="img-tech"/>
            <img src={sql} alt="sql" className="img-tech"/>
            <img src={firebase} alt="fb" className="img-tech"/>
          </Slider>
        </div>
      </div>
    </div>
  );
};
