import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function Home() {
  // const settings = {
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="The Intelligent Investor: The Classic Text on Value Investing Hardcover – Deckle Edge, May 3 2005"
            price={36.43}
            image="https://images-na.ssl-images-amazon.com/images/I/410p7Yf1iYL._SX332_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="321568"
            title="iRobot Roomba i7+ (7550) Robot Vacuum with Automatic Dirt Disposal- Wi-Fi Connected, Smart Mapping, Works with Alexa, Ideal for Pet Hair, Carpets, Hard Floors"
            price={899.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71jDdf8kqVL._AC_SY355_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2113131"
            title="Source Naturals Life Force Multiple, No Iron, 180 Capsules"
            price={135.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71tstFNwkgL._AC_SY450_.jpg"
          />
          <Product
            id="323231155"
            title="Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard, Backlit RGB LED, Cherry MX Speed RGB Silver, Black"
            price={99.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71fooT29rsL._AC_SX522_.jpg"
          />
          <Product
            id="986432"
            title="Black + Decker 2 Slice Extra Wide Toaster"
            price={46.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81xNim-d6GL._AC_SX522_.jpg"
          />
        </div>
        {/* <div className="home__carousel">
          <Slider {...settings}>
            <Product
              id="986432"
              title="Black + Decker 2 Slice Extra Wide Toaster"
              price={46.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81xNim-d6GL._AC_SX522_.jpg"
            />
            <Product
              id="986432"
              title="Black + Decker 2 Slice Extra Wide Toaster"
              price={46.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81xNim-d6GL._AC_SX522_.jpg"
            />
            <Product
              id="986432"
              title="Black + Decker 2 Slice Extra Wide Toaster"
              price={46.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81xNim-d6GL._AC_SX522_.jpg"
            />
            <Product
              id="986432"
              title="Black + Decker 2 Slice Extra Wide Toaster"
              price={46.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81xNim-d6GL._AC_SX522_.jpg"
            />
            <Product
              id="986432"
              title="Black + Decker 2 Slice Extra Wide Toaster"
              price={46.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81xNim-d6GL._AC_SX522_.jpg"
            />
          </Slider>
        </div> */}

        <div className="home__row">
          <Product
            id="2398812"
            title="Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) (Renewed)"
            price={449.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61mXrcMU6LL._AC_SY679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
