import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navigation/NavBar";
import "./style.scss";

function AboutPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios(`https://baha19.pythonanywhere.com/api/site/about-us/`)
      .then(function (response) {
        setCards(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function cutTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/gi, "").replace(/&nbsp;/gi, " ");
  }

  return (
    <div>
      <div className="container about">
        <div className="about__img">
          <div className="db">
            {cards?.about_us_images?.map((image, index) => {
              return (
                <img
                  key={index}
                  className="aboutImg"
                  src={image.image}
                  alt=""
                />
              );
            })}

            {/* <img src="/images/about/1.png" />
            
            <img className="mt-24" src="/images/about/2.png" /> */}
          </div>
          <img className="ml-20" src="/images/about/3.png" alt="" />
        </div>
        <div className="about__title">
          <h2>{cards.about_us_title}</h2>
          <p>{cutTags(cards ? cards.about_us_text || "" : "")}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutPage;
