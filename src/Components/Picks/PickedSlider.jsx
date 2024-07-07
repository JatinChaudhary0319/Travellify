import Slider from "react-slick";
import Left from '../Arrows/Left';
import Right from '../Arrows/Right';
import ExperienceCard from "./ExperienceCard";

const PickedSlider = ({ pickedData }) => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <Right />,
      prevArrow: <Left />
    };

    return (
      <Slider {...settings}>
        {pickedData &&
          pickedData.map(
            ({
              id,
              city,
              url,
              description,
              currency,
              currentPrice,
              ratings,
              stars,
              discount,
              cashback,
              lastPrice,
              about
            }) => (
              <ExperienceCard
                key={id}
                city={city}
                about={about}
                url={url}
                description={description}
                currency={currency}
                price={currentPrice}
                ratings={ratings}
                stars={stars}
                discount={discount}
                cashback={cashback}
                lastPrice={lastPrice}
              />
            )
          )}
      </Slider>
    );
  };

  export default PickedSlider;