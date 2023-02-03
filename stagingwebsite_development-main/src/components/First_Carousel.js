import React from "react";
import FirstCarousel from "../assets/css/first_carousel.css";
import firstimage from "../assets/img/first.webp";
import secondimage from "../assets/img/second.webp";
import thirdimage from "../assets/img/third.webp";
import Container from "react-bootstrap/Container";
import Carouselfirst from "./carouselfirst/Carouselfirst";

function First_Carousel() {
  const textimgdata = [
    {
      text1: "Expand",
      text2: "Your Horizon",
      text3:
        "Master the skills and accelerate your career as we remove the challenges and roadblocks slowing you down",
      image:
        "https://herovired.com/wp-content/uploads/2023/01/webp-old-11-copy.webp",
    },
    {
      text1: "Cutting edge",
      text2: "Domains",
      text3:
        "Scale up your ambitions with programs across innovative domains & sectors",
      image:
        "https://herovired.com/wp-content/uploads/2023/01/Website-Banner_domain-atom-1.webp",
    },
    {
      text1: "Our",
      text2: "Partners",
      text3: "Premium collaborations with industry leaders and global brands",
      image:
        "https://herovired.com/wp-content/uploads/2023/01/OPf1_without-text-1.webp",
    },
  ];
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></li>
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></li>
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></li>
        </ol>
        <div class="carousel-inner">
          {textimgdata.map((i) => (
            <Carouselfirst
              text1={i.text1}
              text2={i.text2}
              text3={i.text3}
              img={i.image}
            ></Carouselfirst>
          ))}
          {/* <div class="carousel-item active" data-bs-interval="5000">
                <img src={firstimage} class="d-block w-100"></img>
                <div class="carousel-content">
                    <p id="first-text">Be made for</p>
                    <p id="second-text">Big Things</p>
                    <div id="third-text">Accelerate your career with programs across innovative domains & sectors</div>
                </div>
            </div> */}
          {/* <div class="carousel-item" data-bs-interval="5000">
                <img src={secondimage} class="d-block w-100"></img>
                <div class="carousel-content">
                    <p id="first-text">Learn Live</p>
                    <p id="second-text">With Hero Vired</p>
                    <div id="third-text">70-90% live classes with industry experts fostering a personalized and highly
                        engaging learning experience</div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src={thirdimage} class="d-block w-100"></img>
                <div class="carousel-content">
                    <p id="first-text">Our</p>
                    <p id="second-text">Partners</p>
                    <div id="third-text">Premium collaborations with industry leaders and global brands</div>
                </div>
            </div> */}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </>
  );
}
export default First_Carousel;
