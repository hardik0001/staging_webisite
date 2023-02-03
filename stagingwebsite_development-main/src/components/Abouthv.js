import "../assets/css/about.css";
import linkedinimg from "../assets/img/linkedinicon.svg";
import downicon from "../assets/img/chevron-down.svg";
import clone from "../assets/img/clone.png";
import upicon from "../assets/img/chevron-up.svg";
import Advisory from "./About/Advisory";
import Gallery from "./About/Gallery";
import Leadership from "./About/Leadership";
import People from "./About/People";
import University from "./About/University";
import Abnews from "./About/Abnews";
import Socialmedia from "./About/Socialmedia";
import twitter_icon from "../assets/img/twitter.png";
import youtube_icon from "../assets/img/youtube_icon.png";
import linkedin_icon from "../assets/img/linkedin_icon.png";
import instagram_icon from "../assets/img/instagram_icon.png";
import facebook_icon from "../assets/img/facebook_icon.png";

import { cloneElement } from "react";
import Socialmediaicon from "./About/Socialmediaicon";
function Abouthv() {
  let showhideawardimage = (event) => {
    let displayvalue = document.getElementById("lastimage-awardblock-1").style
      .display;
    if (displayvalue == "none") {
      document.getElementById("lastimage-awardblock-1").style.display = "block";
      document.getElementById("lastimage-awardblock-2").style.display = "block";
      document.getElementById("lastimage-awardblock-3").style.display = "block";
      document.getElementById("lastimage-awardblock-4").style.display = "block";
      document.getElementById("show-click").innerHTML =
        "Show less" + "<img src=" + upicon + "></img>";
    } else {
      document.getElementById("lastimage-awardblock-1").style.display = "none";
      document.getElementById("lastimage-awardblock-2").style.display = "none";
      document.getElementById("lastimage-awardblock-3").style.display = "none";
      document.getElementById("lastimage-awardblock-4").style.display = "none";
      document.getElementById("show-click").innerHTML =
        "Show More" + "<img src=" + downicon + "></img>";
    }
  };
  const galleryimg = [
    {
      galleryimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/Frame-1213.png",
    },
    {
      galleryimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/Frame-1219.png",
    },
    {
      galleryimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/Frame-1219.png",
    },
    {
      galleryimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/Frame-1219.png",
    },
  ];
  const unviimg = [
    {
      uniimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/BML-MUNJAL-2048x912.png",
    },
    {
      uniimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/Bahadur-Chand-2048x912.png",
    },
    {
      uniimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/DAYANAND-MEDICAL-2048x912.png",
    },
    {
      uniimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/ISB_-2048x912.png",
    },
    {
      uniimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/RAMAN-MUNJAL-2048x912.png",
    },
  ];
  const advidata = [
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
    {
      advimg:
        "https://herovired.com/wp-content/uploads/2022/09/founder-profile-image.jpg",
      advname: "Pawan Munjal",
      advdesig: "Chairman & CEO",
      advcomp: "Hero Motocorp Ltd.",
    },
  ];
  const leadershipdata = [
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
    {
      leadershipimg:
        "https://herovired.com/wp-content/uploads/2022/09/Akshay-munjal.jpg",
      leadershipname: "Akshay Munjal",
      leadershipdept: "Founder & CEO",
    },
  ];
  const peopletestidata = [
    {
      peopimg:
        "https://herovired.com/wp-content/uploads/2022/12/Mask-group-1.png",
      peopname: "Vasu Sharma",
      peopdesig: "Director - Growth & Partnerships",
      testi1:
        "If you no longer go for a gap that exists, you’re no longer a racing driver.",
      testi2:
        "Drawing an analogy from the famous quote, Hero Vired surely clocks in some flying laps.",
      linkedinlink: "https://www.linkedin.com/in/vasu-sharma-99874a45/",
    },
    {
      peopimg:
        "https://herovired.com/wp-content/uploads/2022/12/Mask-group-1.png",
      peopname: "Vasu Sharma",
      peopdesig: "Director - Growth & Partnerships",
      testi1:
        "If you no longer go for a gap that exists, you’re no longer a racing driver.",
      testi2:
        "Drawing an analogy from the famous quote, Hero Vired surely clocks in some flying laps.",
      linkedinlink: "https://www.linkedin.com/in/vasu-sharma-99874a45/",
    },
    {
      peopimg:
        "https://herovired.com/wp-content/uploads/2022/12/Mask-group-1.png",
      peopname: "Vasu Sharma",
      peopdesig: "Director - Growth & Partnerships",
      testi1:
        "If you no longer go for a gap that exists, you’re no longer a racing driver.",
      testi2:
        "Drawing an analogy from the famous quote, Hero Vired surely clocks in some flying laps.",
      linkedinlink: "https://www.linkedin.com/in/vasu-sharma-99874a45/",
    },
    {
      peopimg:
        "https://herovired.com/wp-content/uploads/2022/12/Mask-group-1.png",
      peopname: "Vasu Sharma",
      peopdesig: "Director - Growth & Partnerships",
      testi1:
        "If you no longer go for a gap that exists, you’re no longer a racing driver.",
      testi2:
        "Drawing an analogy from the famous quote, Hero Vired surely clocks in some flying laps.",
      linkedinlink: "https://www.linkedin.com/in/vasu-sharma-99874a45/",
    },
    {
      peopimg:
        "https://herovired.com/wp-content/uploads/2022/12/Mask-group-1.png",
      peopname: "Vasu Sharma",
      peopdesig: "Director - Growth & Partnerships",
      testi1:
        "If you no longer go for a gap that exists, you’re no longer a racing driver.",
      testi2:
        "Drawing an analogy from the famous quote, Hero Vired surely clocks in some flying laps.",
      linkedinlink: "https://www.linkedin.com/in/vasu-sharma-99874a45/",
    },
  ];
  const abnewsdata = [
    {
      newsimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/business.webp",
      newstext:
        "In an interaction with Business Today, our Founder & CEO decodes his passion for sculpting and how it has helped evolve his personality.",
      newsreadmoreurl:
        "https://www.businesstoday.in/magazine/back-of-the-book/story/why-hero-vireds-akshay-munjal-is-passionate-about-clay-sculptures-343663-2022-08-04",
    },
    {
      newsimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/business.webp",
      newstext:
        "In an interaction with Business Today, our Founder & CEO decodes his passion for sculpting and how it has helped evolve his personality.",
      newsreadmoreurl:
        "https://www.businesstoday.in/magazine/back-of-the-book/story/why-hero-vireds-akshay-munjal-is-passionate-about-clay-sculptures-343663-2022-08-04",
    },
    {
      newsimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/business.webp",
      newstext:
        "In an interaction with Business Today, our Founder & CEO decodes his passion for sculpting and how it has helped evolve his personality.",
      newsreadmoreurl:
        "https://www.businesstoday.in/magazine/back-of-the-book/story/why-hero-vireds-akshay-munjal-is-passionate-about-clay-sculptures-343663-2022-08-04",
    },
    {
      newsimgurl:
        "https://herovired.com/wp-content/uploads/2022/12/business.webp",
      newstext:
        "In an interaction with Business Today, our Founder & CEO decodes his passion for sculpting and how it has helped evolve his personality.",
      newsreadmoreurl:
        "https://www.businesstoday.in/magazine/back-of-the-book/story/why-hero-vireds-akshay-munjal-is-passionate-about-clay-sculptures-343663-2022-08-04",
    },
  ];
  const socialmediadata = [
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/325528932_896203314746974_6600108360903176704_n.webplow.jpg",
      mutipleimg: "0",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/324553523_1864357490584597_3341112388251911256_n.webplow.jpg",
      mutipleimg: "1",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/325528932_896203314746974_6600108360903176704_n.webplow.jpg",
      mutipleimg: "0",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/325528932_896203314746974_6600108360903176704_n.webplow.jpg",
      mutipleimg: "1",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/324553523_1864357490584597_3341112388251911256_n.webplow.jpg",
      mutipleimg: "0",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/325528932_896203314746974_6600108360903176704_n.webplow.jpg",
      mutipleimg: "1",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/324553523_1864357490584597_3341112388251911256_n.webplow.jpg",
      mutipleimg: "0",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/325528932_896203314746974_6600108360903176704_n.webplow.jpg",
      mutipleimg: "1",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/324553523_1864357490584597_3341112388251911256_n.webplow.jpg",
      mutipleimg: "0",
    },
    {
      socialmediaimg:
        "https://herovired.com/wp-content/uploads/sb-instagram-feed-images/325528932_896203314746974_6600108360903176704_n.webplow.jpg",
      mutipleimg: "1",
    },
  ];
  const socialmediaicon = [
    {
      socialmediaiconurl: facebook_icon,
      socialmediaiconlink: "https://www.facebook.com/herovired/",
    },
    {
      socialmediaiconurl: instagram_icon,
      socialmediaiconlink:
        "https://www.instagram.com/accounts/login/?next=%2Fherovired%2F",
    },
    {
      socialmediaiconurl: twitter_icon,
      socialmediaiconlink: "https://twitter.com/herovired",
    },
    {
      socialmediaiconurl: linkedin_icon,
      socialmediaiconlink:
        "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhero-vired%2Fabout%2F",
    },
    {
      socialmediaiconurl: youtube_icon,
      socialmediaiconlink:
        "https://www.youtube.com/channel/UC81ztf6ahAKbQWTh53NqJCw",
    },
  ];
  return (
    <>
      <div class="ab-outermost-first-section">
        <div class="ab-inner-first-section">
          <div class="inner-col1">
            <h1 class="inner-col1-text1">
              We create those who create the future
            </h1>
            <p class="inner-col1-text2">
              Part of the rich legacy of the Hero Group, we aim to transform
              education by creating programs delivered by leading industry
              practitioners that help professionals and students enhance their
              skills
            </p>
            <button
              class="inner-col1-text3"
              data-toggle="modal"
              data-target="#exampleModalwatch"
            >
              Watch Video
            </button>
            <div
              class="modal fade modal-dialog "
              id="exampleModalwatch"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal-dialog-centered size watch-video"
                role="document"
              >
                <div class="modal-content modal-dialog1 modal-backdrop-show watch-size">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body-watch">
                    <iframe
                      width="858"
                      height="482"
                      src="https://www.youtube.com/embed/Cbw39BHOmbI"
                      title="Be Made For Big Things | Hero Vired"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inner-col2">
            <img src="https://herovired.com/wp-content/uploads/2022/12/About_us_animation.gif"></img>
          </div>
        </div>
      </div>
      <div class="ab-outermost-second-section">
        <div class="ab-inner-second-section">
          <p id="first-text-second-section">HERO IN EDUCATION</p>
          <p id="second-text-second-section">
            Leading presence in the Indian education space
          </p>
          <p id="third-text-second-section">
            The Hero Group has a distinguished record in the field of primary,
            secondary and medical education since 1965
          </p>
          <div class="second-section-row4">
            {unviimg.map((i) => (
              <University uniimgurl={i.uniimgurl}></University>
            ))}
          </div>
        </div>
      </div>
      <div class="ab-outermost-third-section">
        <div class="ab-inner-third-section">
          <div class="ab-inner-section-row1">
            <div class="ab-inner-section-row1-col1">
              <p class="ab-inner-section-row1-col1-text1">MISSION</p>
              <p class="ab-inner-section-row1-col1-text2">
                ''Not only re-imagine the way we learn but also, build a better
                and brighter future.''
              </p>
              <p class="ab-inner-section-row1-col1-text3">
                We're here to equip our learners with the knowledge, skills, and
                expertise they need to find success. We do this through a deeply
                engaged and holistic learning experience, empowering them to
                transform careers
              </p>
            </div>
            <div class="ab-inner-section-row1-col2"></div>
          </div>
          <div class="ab-inner-section-row1">
            <div class="ab-inner-section-row1-col1"></div>
            <div class="ab-inner-section-row1-col2">
              <p class="ab-inner-section-row1-col1-text1">MISSION</p>
              <p class="ab-inner-section-row1-col1-text2">
                “Not only re-imagine the way we learn but also, build a better
                and brighter future.”
              </p>
              <p class="ab-inner-section-row1-col1-text3">
                We're here to equip our learners with the knowledge, skills, and
                expertise they need to find success. We do this through a deeply
                engaged and holistic learning experience, empowering them to
                transform careers
              </p>
            </div>
          </div>
          <div class="ab-inner-section-row1">
            <div class="ab-inner-section-row1-col1">
              <p class="ab-inner-section-row1-col1-text1">IMPACT</p>
              <p class="ab-inner-section-row1-col1-text2">
                3,600 learning hours,
                <br />
                1,572 learners,
                <br />
                250+ learners placed..
              </p>
              <p class="ab-inner-section-row1-col1-text3">
                Hero Vired is a learning company on a mission to not only
                re-imagine the way we learn, but also build a better and
                brighter future
              </p>
            </div>
            <div class="ab-inner-section-row1-col2"></div>
          </div>
        </div>
      </div>

      <section class="ab-hv-story-outermost-fourth-section">
        <div class="ab-hv-story-inner-fourth-section">
          <p id="first-text-second-section">HERO'S JOURNEY</p>
          <p id="second-text-second-section">An impactful legacy, since 1948</p>
          <p id="third-text-second-section">
            The US$5 billion diversified Hero Group with interests in automotive
            manufacturing, finance, renewable energy, electronics & education
          </p>
          <div className="image-swiper">
            <div class="ab-hv-story-images-fourth-section">
              <img src="https://herovired.com/wp-content/uploads/2023/01/1.png"></img>
              <img src="https://herovired.com/wp-content/uploads/2023/01/2.png"></img>
              <img src="https://herovired.com/wp-content/uploads/2023/01/3.png"></img>
              <img src="https://herovired.com/wp-content/uploads/2023/01/4.png"></img>
              <img src="https://herovired.com/wp-content/uploads/2023/01/5.png"></img>
            </div>
          </div>
        </div>
      </section>

      <div class="ab-advisory-outermost">
        <div class="ab-hv-story-inner-fourth-section">
          <p id="first-text-second-section">VIRED’S NORTHSTAR</p>
          <p id="second-text-second-section">Advisory Council</p>
          <p id="third-text-second-section">
            Meet the industry giants who trust in our passion and vision
          </p>
          <div class="ab-advisory-images-row">
            {advidata.map((i) => (
              <Advisory
                advimg={i.advimg}
                advname={i.advname}
                advdesig={i.advdesig}
                advcomp={i.advcomp}
              ></Advisory>
            ))}
          </div>
        </div>
      </div>
      <div class="ab-outermost-leadership">
        <div class="ab-inner-leadership">
          <p id="first-text-second-section">VIRED’S LIGHT-BEARERS</p>
          <p id="second-text-second-section">Leadership Team</p>
          <p id="third-text-second-section"></p>
          <div class="ab-advisory-images-row">
            {leadershipdata.map((i) => (
              <Leadership
                leadershipimg={i.leadershipimg}
                leadershipname={i.leadershipname}
                leadershipdept={i.leadershipdept}
              ></Leadership>
            ))}
          </div>
        </div>
      </div>
      <div class="ab-outermost-lifeatvired">
        <div class="ab-inner-lifeatvired">
          <p id="first-text-second-section">PEOPLE OF VIRED</p>
          <p id="second-text-second-section">What is life at Vired like?</p>
          <p id="third-text-second-section">
            Hear from the people who have had the chance to experience our
            culture first-hand, in their own words
          </p>
          <div class="ab-lifeatvired-people-img ">
            <img src="https://herovired.com/wp-content/uploads/2022/12/Option-1_Final.png"></img>
          </div>
          <p class="ab-lifeatvired-row5">Here is what Team Vired has to say</p>
        </div>

        <div className=" herovired-size ">
          <div className="faculty-swiper1">
            {peopletestidata.map((i) => (
              <People
                peopimg={i.peopimg}
                peopname={i.peopname}
                peopdesig={i.peopdesig}
                testi1={i.testi1}
                testi2={i.testi2}
                linkedinlink={i.linkedinlink}
              ></People>
            ))}
          </div>
        </div>
      </div>

      <div class="ab-outermost-gallery">
        <div class="ab-inner-gallery">
          <h1 class="ab-firsttext-gallery">Gallery</h1>
          <div class="faculty-swiper">
            <div class="ab-images-gallery">
              {galleryimg.map((i) => (
                <Gallery galleryimgurl={i.galleryimgurl}></Gallery>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="ab-join">
        <div className="ab-join-box">
          <div className="new-column">
            <div className="join-img">
              <img src="https://herovired.com/wp-content/uploads/2022/09/join-us-blurb.svg" />
            </div>
            <div className="join-right">
              <h3 className="join-head">Join us </h3>
              <h2 className="join-main-head">
                Work with us and be at the forefront of the edtech revolution
              </h2>
              <a
                id="link_button-502-622"
                class="ct-link-button "
                href="https://www.linkedin.com/company/hero-vired/jobs/"
                target="_self"
              >
                <span id="span-1601-674" class="ct-span">
                  Explore Jobs at Vired{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="awards-block">
        <p class="text1-awards-block">AWARDS & ACCOLADES</p>
        <p class="text2-awards-block">
          Humbled by recognition from the industry
        </p>
        <p class="text3-awards-block">
          We are proud to be recognized by some of the most important and
          influential media publications and organizations
        </p>
        <div class="awards-image-block">
          {/* {
                awardimagedata.map(i => <Awardblockimage awardimgurl={i.awardimgurl} awardtext1={i.awardtext1} awardtext2={i.awardtext2}></Awardblockimage>)
            } */}
          <div class="individual-awards-image-block">
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png"></img>
            <p class="individual-awards-image-block-text1">
              Indian Education Award
            </p>
            <p class="individual-awards-image-block-text2">
              Edtech Startup of the Year
            </p>
          </div>
          <div class="individual-awards-image-block">
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png"></img>
            <p class="individual-awards-image-block-text1">
              Education Innovation Award
            </p>
            <p class="individual-awards-image-block-text2">
              Best Personalised Learning Programs
            </p>
          </div>
          <div class="individual-awards-image-block">
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/award-image.png"></img>
            <p class="individual-awards-image-block-text1">
              Brand Bharat Awards- Gold
            </p>
            <p class="individual-awards-image-block-text2">Best Use of PR</p>
          </div>
          <div class="individual-awards-image-block">
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
            <p class="individual-awards-image-block-text1">Mark Asia Award</p>
            <p class="individual-awards-image-block-text2">
              Brand Launch Campaign of the Year
            </p>
          </div>
          <div
            class="individual-awards-image-block"
            id="lastimage-awardblock-1"
            style={{ display: "none" }}
          >
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
            <p class="individual-awards-image-block-text1">Mark Asia Award</p>
            <p class="individual-awards-image-block-text2">
              Brand Launch Campaign of the Year
            </p>
          </div>
          <div
            class="individual-awards-image-block"
            id="lastimage-awardblock-2"
            style={{ display: "none" }}
          >
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
            <p class="individual-awards-image-block-text1">Mark Asia Award</p>
            <p class="individual-awards-image-block-text2">
              Brand Launch Campaign of the Year
            </p>
          </div>
          <div
            class="individual-awards-image-block"
            id="lastimage-awardblock-3"
            style={{ display: "none" }}
          >
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
            <p class="individual-awards-image-block-text1">Mark Asia Award</p>
            <p class="individual-awards-image-block-text2">
              Brand Launch Campaign of the Year
            </p>
          </div>
          <div
            class="individual-awards-image-block"
            id="lastimage-awardblock-4"
            style={{ display: "none" }}
          >
            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
            <p class="individual-awards-image-block-text1">Mark Asia Award</p>
            <p class="individual-awards-image-block-text2">
              Brand Launch Campaign of the Year
            </p>
          </div>
        </div>
        <button
          class="awards-image-block-lasttext"
          id="show-click"
          onClick={showhideawardimage}
        >
          Show More<img src={downicon}></img>
        </button>
      </section>

      <div class="ab-outermost-media-presence">
        <div class="ab-inner-media-presence">
          <p id="first-text-second-section">IN THE NEWS</p>
          <p id="second-text-second-section">Our media presence</p>
          <p id="third-text-second-section">
            Find Hero Vired in the media spotlight
          </p>
          <div class="ab-media-cards-row">
            {abnewsdata.map((i) => (
              <Abnews
                newsimgurl={i.newsimgurl}
                newstext={i.newstext}
                newsreadmoreurl={i.newsreadmoreurl}
              ></Abnews>
            ))}
          </div>
        </div>
      </div>
      <div class="ab-socialmediapresence-firstblock">
        <div class="ab-socialmediapresence-secondblock">
          <p id="first-text-second-section">IN THE NEWS</p>
          <p id="second-text-second-section">Our media presence</p>
          <p id="third-text-second-section">
            Find Hero Vired in the media spotlight
          </p>
          <div class="ab-outermost-socialmedia-presence">
            <div class="ab-inner1-socialmedia-presence">
              <div class="ab-inner2-socialmedia-presence">
                {/* <img src={clone}></img> */}
                {socialmediadata.map((i) => (
                  <Socialmedia socialmediaimg={i.socialmediaimg}></Socialmedia>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ab-socialmedia-showmore">
        <button>Show More</button>
      </div>
      <div class="ab-followus-icon-block">
        <p class="ab-followus-block">FOLLOW US ON</p>
        <div class="ab-icon-block">
          {socialmediaicon.map((i) => (
            <Socialmediaicon
              socialmediaiconurl={i.socialmediaiconurl}
              socialmediaiconlink={i.socialmediaiconlink}
            ></Socialmediaicon>
          ))}
        </div>
      </div>
    </>
  );
}
export default Abouthv;
