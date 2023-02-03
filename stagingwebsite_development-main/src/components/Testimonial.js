import React from "react";
import "../assets/css/testimonial.css";
import up from "../assets/img/up.svg";

function Testimonial() {
  return (
    <div>
      <div>
        <div className="home-learners-path-div heading">
          <h5 className="text-center test-head-1"> TESTIMONIALS </h5>

          <h3 className="learners-path-heading text-center">
            <b>Hear straight from our learners</b>
          </h3>
          <div className="test-heading">
            <p className="font-one-rem text-center in test-head">
              Hear our learners talk about their learning experience and share
              the impact of our programs on their professional lives
            </p>
          </div>
        </div>

        <br />

        <div
          className="swiper-container carousel slide"
          id="hscroll carouselExample"
        >
          <div className="dynamic">
            <div className=" swiper-wrapper swiper">
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 40% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/12/Learner-1.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name  ">Hritwij Shrivastava</h5>
                        <h5 className=" sepcialist">ML Developer</h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      From live projects to coaching sessions, Hero Vired helped
                      me at every stage. I became extremely confident in ML
                      after successfully completing the MIT assignments.
                    </span>
                  </div>

                  <div className="text-center img-thumnail last cards2 test-footer   ">
                    <h3>
                      <img
                        id="testimonial-img2"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/12/Infinite-Computer-Solutions.png"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 36% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name">Raj sekhar</h5>
                        <h5 className=" sepcialist">
                          Investigation Sepcialist
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      I really appreciate the way how the team is proactive with
                      their follow-ups. While there are many EdTech platforms in
                      India, they all are missing the personal touch that the
                      team at Hero Vired team provides.
                    </span>
                  </div>
                  <div className="text-center img-thumnail last cards2  text-footer  ">
                    <h3>
                      <img
                        id="testimonial-img"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/07/Group-670@3x.webp"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 50% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/07/Shashwat-1.webp"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name  ">Shashwat Pal</h5>
                        <h5 className=" sepcialist">Risk Analyst</h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      Hero Vired has played a pivotal part in the development of
                      my career trajectory. I come from an engineering
                      background so making a move to the Finance field was not
                      the easiest. The faculty made sure that this transition
                      was smooth.
                    </span>
                  </div>

                  <div className="text-center img-thumnail last cards2 test-footer   ">
                    <h3>
                      <img
                        id="testimonial-img"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/07/Group-674@3x.webp"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 60% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/07/rakesh.jpg"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name  ">Rakesh Kumar</h5>
                        <h5 className=" sepcialist">Desgine Engineer</h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      I was impressed by the concepts, presentation skills, &
                      case analysis approach. During face-to-face lectures &
                      conversations, meetings, & assignments, I understood
                      everything in a much broader way.
                    </span>
                  </div>

                  <div className="text-center img-thumnail last cards2 test-footer   ">
                    <h3>
                      <img
                        id="testimonial-img3"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/12/Arcadis-1-removebg-preview-e1672047518826.png"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 40% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/07/mrinal.jpg"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name  ">Mrinal Waghel</h5>
                        <h5 className="sepcialist">Credit Data Analyst</h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      I had taken up the program hoping to be enriched & what I
                      got out of it beat my expectations. I can vehemently vouch
                      for the fact that it has honed my practical understanding
                      of all the concepts.
                    </span>
                  </div>

                  <div className="text-center img-thumnail last cards2 test-footer   ">
                    <h3>
                      <img
                        id="testimonial-img4"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/10/Debtwire.png"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 54% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/06/Divya.webp"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name  ">Divya Bettampadi</h5>
                        <h5 className=" sepcialist">Technical Specialist</h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      The dedication shown by the entire team in ensuring that
                      the learning process is smooth & fruitful is amazing. The
                      faculty is highly qualified & the curriculum is aptly
                      designed keeping the industry standards & requirements in
                      mind.
                    </span>
                  </div>

                  <div className="text-center img-thumnail last cards2 test-footer   ">
                    <h3>
                      <img
                        id="testimonial-img5"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/10/Continental-1.png"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="test-card">
                <div className="testimonial-card">
                  <div className="p-2 test-back">
                    <h3 id="learners-testimonial" className="text-center P-5 ">
                      <span className="test-hike">
                        <img src={up} alt="" /> 42% hike{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="container text-center">
                    <div className="row pad">
                      <div className="test-img">
                        <img
                          id="testimonial-img1"
                          src="https://staging.herovired.com/wp-content/uploads/2022/06/Balraj.webp"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="NAME">
                        <h5 className=" test-name  ">Balraj Singh Bhullar</h5>
                        <h5 className=" sepcialist">Web Developer</h5>
                      </div>
                    </div>
                  </div>
                  <div className="" id="testimonial-text">
                    <span className="">
                      I am glad I joined a Hero Vired program. The team support
                      is second to none. With the help of Hero Vired, I was able
                      to start learning online and build up the knowledge and
                      skills that would help me in building up my career.
                    </span>
                  </div>

                  <div className="text-center img-thumnail last cards2 test-footer   ">
                    <h3>
                      <img
                        id="testimonial-img4"
                        className=""
                        src="https://staging.herovired.com/wp-content/uploads/2022/07/Group-667@3x-1.webp"
                        alt="hero vired"
                      />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
