import "../assets/css/programs.css";
import { useState } from "react";
import { useEffect } from "react";
import useScrollPosition from "../utils/useScrollPosition";
import { Link } from "react-scroll";
import Nextcohortdetails from "./Programs/Nextcohortdetails";
import Curriculum_cont_info from "./Programs/Curriculum_cont_info";
import Toolimg from "./Programs/Toolimg";
import linkedinicon from "../assets/img/linkedinicon.svg";
import Faq from "./Programs/Faq";
import Programpartner from "./Programs/Programpartner";
import Syllabuscontent from "./Programs/Syllabuscontent";

function Program() {
  const syllabusdata =[
    {
      syll_title:"Core INSEAD Modules",
      syll_content:[
        {sub_syll_title:"Customer Insights",
        sub_syll_content:"This module offers a structured view of how to be customer focused."

        },
        {sub_syll_title:"Design Thinking",
        sub_syll_content:"In this module, learners will contrast two different problem-solving approaches, which offer valid ways to address various business challenges. One approach emphasizes process efficiency, while the other (design thinking perspective) highlights customer-centricity and innovative thinking."

        },
        {sub_syll_title:"Launching Brands/Products Globally",
        sub_syll_content:"Learners will explore the concept of brand identity and positioning for start-ups, making them strong with limited resources and leveraging market trends and customer intelligence"

        },
        {sub_syll_title:"Influencing without Authority",
        sub_syll_content:"In this module, learners can test their leadership skills and influence without authority in a computer-simulated organisation. The XChange simulation provides a flexible tool to experience a changed process in a risk-free environment and helps to stimulate productive discussions on the subject."

        }]
    },
    {syll_title:"Getting into the Product Mindset",
        syll_content:"In this module, learners will understand the role of product managers within organizations and how they utilize data science, machine learning, and artificial intelligence to solve problems."

      },
      {syll_title:"Customer and Market Discovery",
        syll_content:"Identifying the customer requirement helps determine and analyze the target market, which will help learners gauge the success of the product."

      },
      {syll_title:"Product Design",
        syll_content:"This module is built to help learners materialize their game-changing ideas and transform them into a product that they can create a business around."

      },
      {syll_title:"Product Development and Business Strategy",
        syll_content:"In this module, learners will explore the different frameworks to create the business model for the product."

      },
      {syll_title:"Financial Analysis for Product Managers",
        syll_content:"In this module, learners will understand the concept of unit economics for software as a service (SaaS) products, which will help understand the impact of the different elements on the product cost."

      },
      {syll_title:"Go To Market Strategy",
        syll_content:"A GTM strategy applies whether one’s breaking into a new market or trying to reach their current customer base. In this module, learners will explore the different business strategies essential for a product market launch."

      },
      {syll_title:"Business Goals for Product Managers",
        syll_content:"Own key success metrics from the concept to the product's launch. Learners will align the product with the business goals, OKRs (Objective and Key Results) and KPIs (Key Performance Indicators)"
      },
      {syll_title:"Stakeholder Management and Collaboration",
        syll_content:"Stakeholder Management and Collaboration"
      },
  ]
  
  const accordionData = [{
    title: "What is the program eligibility?",
    content: `Bachelor's degree in engineering or management`,
  },
  {
    title:"Which job roles can you apply for after completing the program",
    content: "Once you complete the program, you can pursue a career in roles such as:"
  },
  {
    title:"What cities are our programs available in?",
    content: "Delhi | Mumbai | Kolkata | Bangalore"

  }];

  const programPartnerdata =[
    { img:"https://staging.herovired.com/wp-content/uploads/2022/09/Frame-12300.png",
      head:" In collaboration with",
      title:"INSEAD",
      content:"As one of the world's leading and largest graduate business schools, INSEAD offers participants a truly global educational experience. INSEAD offers a variety of graduate and doctoral programs. In addition to the standard curricula offered, the university also offers customized programs in collaboration with corporations seeking to grant executive education to their managers.",
    },
    { img:"https://staging.herovired.com/wp-content/uploads/2022/07/nsdc-header.jpg",
      head:" Integrated With",
      title:" National Skill Development Corporation",
      content:"National Skill Development Corporation (NSDC) is a not-for-profit public limited company which provides funding to build scalable and profitable vocational training initiatives. The NSDC facilitates initiativesthat can potentially have a multiplier effect as opposed to being an actual operator in this space. In doing so, it strives to involve the industry in all aspects of skill development.",
    }];
  
  let showhideblock = (event) => {
    let displayvalue = document.getElementById("accblock").style.display;
    if (displayvalue == "none") {
      document.getElementById("accblock-body").style.display = "block";
    } else {
      document.getElementById("accblock").style.display = "none";
    }
  };

  var flag = false;
  const scrollPosition = useScrollPosition();
  if (scrollPosition > 200) {
    flag = true;
  }
  const cohortdata = [
    {
      mainheadcohort: "18 March 2023",
      subheadcohort: "Cohort Starts",
    },
    {
      mainheadcohort: "6 Months",
      subheadcohort: "Duration",
    },
    {
      mainheadcohort: "Graduate",
      subheadcohort: "Eligibility",
    },
    {
      mainheadcohort: "Coming Soon",
      subheadcohort: "Application Deadline",
      colortext: " #ff484d",
    },
  ];

  const curriculum_info = [
    {
      cur_info: "Live Online Duration",
      cur_info_hrs: "86",
      cur_hrs: "Hours",
    },
    {
      cur_info: "Total Effort Required",
      cur_info_hrs: "150",
      cur_hrs: "Hours",
    },
    {
      cur_info: "Total Weekly Effort",
      cur_info_hrs: "10",
      cur_hrs: "Hours",
    },
  ];
  const Toolimgcont = [
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2023/01/download-2.png",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12294.webp",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12284.webp",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12283.webp",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12281.webp",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12280.webp",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12279.webp",
    },
    {
      cont_img:
        "https://staging.herovired.com/wp-content/uploads/2022/12/Frame-12243.webp",
    },
  ];

  return (
    <>
      <>
        {flag && (
          <section class="top-fav">
            <div class="top-fav-size">
              <div class="top-fav-left">
                <Link class="internal-nav-link .ct-link-text" to="about">
                  About
                </Link>
                <Link class="internal-nav-link .ct-link-text" to="Curriculum">
                  Curriculum
                </Link>
                <Link class="internal-nav-link .ct-link-text" to="faculty">
                  Faculty
                </Link>
                <Link
                  class="internal-nav-link .ct-link-text"
                  to="programPartners"
                >
                  Program Partners
                </Link>
                <Link class="internal-nav-link .ct-link-text" to="Certificate">
                  Certificate
                </Link>

                <Link class="internal-nav-link .ct-link-text" to="programPrice">
                  Program Price
                </Link>

                <Link class="internal-nav-link .ct-link-text" to="FAQs">
                  FAQs
                </Link>
              </div>
              <div class="top-fav-right ">
                <button class="btn-top-fav">
                  <a href="#">Apply NOW</a>
                </button>
              </div>
            </div>
          </section>
        )}

        <section class="apply">
          <div class="apply-box">
            <div id="apply-now-head" class="apply-head">
              <a href="" data-toggle="modal" data-target="#exampleModalCenter">
                <div class=" top-ribbon-text">
                  <span>Applications closing soon! </span>
                </div>
                <div id="text_block-5361-352" class=" text-link">
                  <span class="ct-span">Apply Now</span>
                </div>
              </a>
            </div>
          </div>

          <div
            class="modal fade modal-dialog "
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered size "
              role="document"
            >
              <div class="modal-content modal-dialog modal-backdrop-show ">
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
                <div class="modal-body">
                  <div class="apply-left">
                    <div class="text-left">Application Form</div>
                    <div class="text-block">
                      Please enter the following details to initiate your
                      application
                    </div>
                    <div>
                      <form>
                        <div class="row">
                          <div class="col">
                            First Name
                            <input
                              type="text"
                              class="form-control name"
                              placeholder="eg.Nishant"
                              required
                            />
                          </div>
                          <div class="col">
                            Last Name
                            <input
                              type="text"
                              class="form-control name"
                              placeholder="eg. Singh"
                              required
                            />
                          </div>
                        </div>
                        <br />

                        <div class="row">
                          <div class="col">
                            Email ID
                            <input
                              type="text"
                              class="form-control"
                              placeholder="eg.Nishant.Sing@gmail.com"
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col">
                            Phone Number
                            <input
                              type="text"
                              class="form-control"
                              placeholder="eg. 987654321"
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <button
                          type="button"
                          class="btn btn-dark btn-lg"
                          data-toggle="modal"
                          data-target="#exampleModalcontinue"
                        >
                          Continue
                        </button>
                      </form>

                      <span class="terms">
                        By filling this form, you agree to our &nbsp;
                        <a href="https://staging.herovired.com/privacy-policy/">
                          Terms and Conditions
                        </a>
                      </span>
                      <br />
                      <span class="font">
                        This details will be used to create your account on our
                        learning platform
                        <strong>Vlearn</strong>. Please fill these details
                        correctly.
                      </span>
                    </div>
                  </div>
                  <div class=" apply-right">
                    <div class="apply-right-box">
                      <div id="text_block-2">Applying for</div>
                      <div id="div_block-24">
                        <div id="text_block-24057-352" class="ct-text-block">
                          <span id="program-certi">Certificate Program in</span>
                        </div>
                        <div id="program-certi-name" class="ct-text-block">
                          <span>Product Management</span>
                        </div>
                        <div id="coll-with">
                          <div>
                            <span>In collaboration with</span>
                          </div>
                          <img
                            id="image-2"
                            alt=""
                            src="https://staging.herovired.com/wp-content/uploads/2022/12/INSEAD-1-300x117.png"
                            class="ct-image"
                          />
                        </div>
                        <div id="program-dis" class="ct-div-block">
                          <div class="oxy-dynamic-list">
                            <div data-id="div_block-24103-352">
                              <img
                                id="image-24519-352-1"
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/12/live_tv.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>
                                  70% to 90% Live Instructor-led Classes
                                </span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                src="
                                                https://staging.herovired.com/wp-content/uploads/2022/12/casino.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Gamified &amp; Interactive Learning</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                id="image-24519-352-3"
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/12/forum.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Discussion Forums and Community</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img src="https://staging.herovired.com/wp-content/uploads/2022/12/category.svg" />
                              <div id="text-ceri-pad">
                                <span>
                                  10+ Industry Projects &amp; Case Studies
                                </span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/07/thumb_up.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Practical Hands-on Learning Session</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/07/add_business.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Career Assistance and Workshops</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img src="https://staging.herovired.com/wp-content/uploads/2022/07/business_center.svg" />
                              <div id="text-ceri-pad">
                                <span>Lifetime Placement Assistance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="footer">
                          <div id="application">
                            Application Deadline:<span></span>
                          </div>
                          <div>Apply early to secure your seat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade modal-dialog "
            id="exampleModalcontinue"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered size "
              role="document"
            >
              <div class="modal-content modal-dialog modal-backdrop-show ">
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
                <div class="modal-body">
                  <div class="apply-left">
                    <div class="text-left">Application Form</div>
                    <div class="text-block">
                      Please enter the following details to initiate your
                      application
                    </div>
                    <div>
                      <div className="Preliminary_info">Preliminary info</div>
                      <div className="field-post-title">
                        and schlorship are determined based on personal Info
                      </div>
                      <form>
                        <div class="row">
                          <div class="col">
                            Currently Living in
                            <select
                              name="state"
                              id="state"
                              class="form-control"
                            >
                              <option value="Andhra Pradesh">
                                -Please choose an option -
                              </option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Andaman and Nicobar Islands">
                                Andaman and Nicobar Islands
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dadar and Nagar Haveli">
                                Dadar and Nagar Haveli
                              </option>
                              <option value="Daman and Diu">
                                Daman and Diu
                              </option>
                              <option value="Delhi">Delhi</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Puducherry">Puducherry</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jammu and Kashmir">
                                Jammu and Kashmir
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                          </div>
                        </div>
                        <br />
                        <div className="Preliminary_info">
                          Professional Details
                        </div>
                        <div className="field-post-title">
                          Help us understand which program would be right for
                          you
                        </div>

                        <div class="row">
                          <div class="col">
                            Highest Qualification
                            <select
                              name="state"
                              id="state"
                              class="form-control"
                            >
                              <option value="Andhra Pradesh">
                                -Please choose an option -
                              </option>
                              <option value="Andhra Pradesh">BA</option>
                              <option value="Andaman and Nicobar Islands">
                                BBA
                              </option>
                              <option value="Arunachal Pradesh">BCOM</option>
                              <option value="Assam">BCA</option>
                              <option value="Bihar">B.SC</option>
                              <option value="Chandigarh">B.TECH</option>
                              <option value="Chhattisgarh">M.TECH</option>
                              <option value="Dadar and Nagar Haveli">
                                MBA
                              </option>
                              <option value="Daman and Diu">M.COM</option>
                              <option value="Delhi">MCA</option>
                              <option value="Lakshadweep">MA</option>
                              <option value="Puducherry">M.SC</option>
                            </select>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col">
                            Total Work Experience
                            <select
                              name="state"
                              id="state"
                              class="form-control"
                            >
                              <option value="Andhra Pradesh">
                                -Please choose an option -
                              </option>
                              <option value="Andhra Pradesh">
                                NO WORK Experience
                              </option>
                              <option value="Assam">0-1</option>
                              <option value="Bihar">1-3</option>
                              <option value="Chandigarh">4-6</option>
                              <option value="Chhattisgarh">7-10</option>
                              <option value="Dadar and Nagar Haveli">
                                10+
                              </option>
                            </select>
                          </div>
                        </div>
                        <br />
                        <button type="button" class="btn btn-dark btn-lg">
                          Continue
                        </button>
                      </form>

                      <span class="terms">
                        By filling this form, you agree to our &nbsp;
                        <a href="https://staging.herovired.com/privacy-policy/">
                          Terms and Conditions
                        </a>
                      </span>
                      <br />
                      <span class="font">
                        This details will be used to create your account on our
                        learning platform
                        <strong>Vlearn</strong>. Please fill these details
                        correctly.
                      </span>
                    </div>
                  </div>
                  <div class=" apply-right">
                    <div class="apply-right-box">
                      <div id="text_block-2">Applying for</div>
                      <div id="div_block-24">
                        <div id="text_block-24057-352" class="ct-text-block">
                          <span id="program-certi">Certificate Program in</span>
                        </div>
                        <div id="program-certi-name" class="ct-text-block">
                          <span>Product Management</span>
                        </div>
                        <div id="coll-with">
                          <div>
                            <span>In collaboration with</span>
                          </div>
                          <img
                            id="image-2"
                            alt=""
                            src="https://staging.herovired.com/wp-content/uploads/2022/12/INSEAD-1-300x117.png"
                            class="ct-image"
                          />
                        </div>
                        <div id="program-dis" class="ct-div-block">
                          <div class="oxy-dynamic-list">
                            <div data-id="div_block-24103-352">
                              <img
                                id="image-24519-352-1"
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/12/live_tv.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>
                                  70% to 90% Live Instructor-led Classes
                                </span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                src="
                                                https://staging.herovired.com/wp-content/uploads/2022/12/casino.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Gamified &amp; Interactive Learning</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                id="image-24519-352-3"
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/12/forum.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Discussion Forums and Community</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img src="https://staging.herovired.com/wp-content/uploads/2022/12/category.svg" />
                              <div id="text-ceri-pad">
                                <span>
                                  10+ Industry Projects &amp; Case Studies
                                </span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/07/thumb_up.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Practical Hands-on Learning Session</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img
                                alt=""
                                src="https://staging.herovired.com/wp-content/uploads/2022/07/add_business.svg"
                                class="ct-image"
                                data-id="image-24519-352"
                              />
                              <div id="text-ceri-pad">
                                <span>Career Assistance and Workshops</span>
                              </div>
                            </div>
                            <div data-id="div_block-24103-352">
                              <img src="https://staging.herovired.com/wp-content/uploads/2022/07/business_center.svg" />
                              <div id="text-ceri-pad">
                                <span>Lifetime Placement Assistance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="footer">
                          <div id="application">
                            Application Deadline:<span></span>
                          </div>
                          <div>Apply early to secure your seat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="main-about" id="about">
          <div class="about-box">
            <div class="about-box-left">
              <div class="Placement-Assurance-tag">
                <h1>
                  <span class="placement-headline">Placement Assurance</span>
                </h1>
              </div>
              <h1 class="program-heeadline">
                <span>Certificate Program in</span>
              </h1>
              <h1 class="program-main-heading">
                <span>Product Management</span>
              </h1>
              <div class="collaboration-flex">
                <h1 class="collaboration-heading">
                  <span>In collaboration with</span>
                </h1>
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/12/INSEAD-1.png"
                  alt=""
                  class="coll-img"
                />

                {/*<div id="icon-img" class="ct-div-block tooltip">
                    <div id="fancy_icon" class="ct-fancy-icon "><svg id="svg-fancy_icon-17026-352">
                            <use xlink:href="#FeatherIconsinfo"></use>
                        </svg></div>
                    <div id="text_block-17031-352" class="ct-text-block tooltiptext">The program is offered in
                        collaboration with INSEAD, the world's no.1 B-School in 2021.</div>
        </div>*/}
              </div>
              <div class="lists-bullet">
                <div class=" bullet-list">
                  <div>
                    <span class="dot"></span>
                  </div>
                  <div class=" row-label">
                    <span>10+ workshops and practitioners masterclass</span>
                  </div>
                </div>
                <div class=" bullet-list">
                  <div>
                    <span class="dot"></span>
                  </div>
                  <div class=" row-label">
                    <span>Live sessions with INSEAD facultys</span>
                  </div>
                </div>
                <div class=" bullet-list">
                  <div>
                    <span class="dot"></span>
                  </div>
                  <div class=" row-label">
                    <span> A minimum of 8-10 job opportunities</span>
                  </div>
                </div>
              </div>
              <div class="about-block">
                <div class="block-id">
                  <div id="text_block-1">
                    <span id="span-block">67.3%</span>
                  </div>
                  <div id="block-1" class="ct-text-block">
                    Avg. Hike
                  </div>
                </div>
                <div
                  id="div_block-898-352"
                  class="div-block seperator-pipe"
                ></div>
                <div class="block-id">
                  <div id="text_block-1">
                    <span id="span-block" class="n1200">
                      1200+
                    </span>
                  </div>
                  <div id="block-1" class="ct-text-block">
                    Learners
                  </div>
                </div>
                <div
                  id="div_block-898-352"
                  class="div-block seperator-pipe"
                ></div>
                <div class="block-id">
                  <div id="text_block-1">
                    <span id="span-block " class="n100">
                      100%
                    </span>
                  </div>
                  <div id="block-1" class="ct-text-block">
                    Placement
                  </div>
                </div>
              </div>
              <div class="btn-main">
                <button
                  class="btn-left"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Apply Now
                </button>
                <button
                  class="btn-right"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <a>
                    <span>Download Brochure</span>
                  </a>
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
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
                      <div class="modal-body">
                        <div class="body-left">
                          <div class="size-of-modal">DOWNLOAD BROCHURE</div>
                          <div class="Download-product-text">
                            Download Product Management Brochure
                          </div>
                          <form class="form-phone">
                            <div class="form-group">
                              <label
                                for="recipient-name"
                                class="col-form-label"
                              >
                                Phone Number{" "}
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="recipient-name"
                                placeholder="eg. 9999999999"
                              />
                            </div>
                            <div class="form-group">
                              <button type="button" class="btn btn-dark btn-lg">
                                Continue
                              </button>
                            </div>
                          </form>
                          <br />
                          <div>
                            <span>
                              By filling this form, you agree to our{" "}
                              <a href="https://staging.herovired.com/privacy-policy/">
                                Terms and Conditions
                              </a>
                            </span>
                          </div>
                          <br />
                          <br />
                          <div
                            id="div_block-25334-352"
                            class="ct-div-block oxel_iconlist"
                          >
                            <div
                              id="div_block-25335-352"
                              class="ct-div-block oxel_iconlist__row"
                            >
                              <div
                                id="fancy_icon-25336-352"
                                class="ct-fancy-icon oxel_iconlist__row__icon"
                              >
                                <img src="./check (1).svg" alt="" />
                              </div>
                              <div class=" oxel_iconlist__row__label">
                                Get detailed curriculum and program structure
                              </div>
                            </div>
                            <div
                              id="div_block-25335-352"
                              class="ct-div-block oxel_iconlist__row"
                            >
                              <div
                                id="fancy_icon-25336-352"
                                class="ct-fancy-icon oxel_iconlist__row__icon"
                              >
                                <img src="./check (1).svg" alt="" />
                              </div>
                              <div class=" oxel_iconlist__row__label">
                                Know the full learning outcomes
                              </div>
                            </div>

                            <div
                              id="div_block-25335-352"
                              class="ct-div-block oxel_iconlist__row"
                            >
                              <div
                                id="fancy_icon-25336-352"
                                class="ct-fancy-icon oxel_iconlist__row__icon"
                              >
                                <img src="./check (1).svg" alt="" />
                              </div>
                              <div class=" oxel_iconlist__row__label">
                                {" "}
                                Learn about the pedagogy/teaching methodology
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-box-right">
              <div class="video">
                <iframe
                  width="619"
                  height="380"
                  src="https://www.youtube.com/embed/PgbQYTbUO7U"
                  title="Introduction to Product Management in Collaboration with INSEAD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </section>

        <section class="comming-soon">
          <div class="comming-soon-box">
            {cohortdata.map((i) => (
              <Nextcohortdetails
                mainheadcohort={i.mainheadcohort}
                subheadcohort={i.subheadcohort}
                colortext={i.colortext}
              ></Nextcohortdetails>
            ))}
          </div>
        </section>

        <section class="curriculum-box" id="Curriculum">
          <div class="curriculum-box-size">
            <div class="text-center Curriculum-head ">
              <span>Curriculum</span>
            </div>
            <h1 class="Curriculum-headline text-center">
              <span>Experience a holistic learning path</span>
            </h1>
            <div class="Curriculum-headline-sub">
              <span>
                The program equips executives with a 360-degree understanding of
                product management - it will help learners craft business
                strategies required to successfully launch and manage their
                product in the market.
              </span>
            </div>
            <div class="live-content">
              <div className="live-content-box">
                {curriculum_info.map((i) => (
                  <Curriculum_cont_info
                    cur_info={i.cur_info}
                    cur_info_hrs={i.cur_info_hrs}
                    cur_hrs={i.cur_hrs}
                  ></Curriculum_cont_info>
                ))}
              </div>
            </div>
            <div class="tools">
              <div class="tools-info">
                <h1>Tools Covered</h1>
              </div>
            </div>
            <div class="tools-img">
              <div class="tools-img-box">
                <div class="tools-images">
                  {Toolimgcont.map((i) => (
                    <Toolimg cont_img={i.cont_img}></Toolimg>
                  ))}
                </div>
              </div>
            </div>
            <div class="tools">
              <div class="tools-info">
                <h1>Syllabus</h1>
              </div>
            </div>
            <div class="syllabus-box">
              <div class="box-left">
                <h1 class="sylla-program">Program Brochure</h1>
                <h1 class="sylla-info">
                  For detailed curriculum and program structure, download the
                  program brochure
                </h1>
                <a
                  id="link_button-343-352"
                  class="ct-link-button large-cta brochure-trigger"
                  href="http://"
                  target="_self"
                >
                  Download Brochure
                </a>
              </div>

              <div class="box-right">
                <div class="box-bullet-list">
                  <div>
                    <div class="accordian-bullets"></div>
                    <div
                      class="accordion acc-box-1 "
                      id="accordionExample acc-ex"
                    >{
                    syllabusdata.map(i=> <Syllabuscontent syll_content={i.syll_content} syll_title={i.syll_title} sub_syll_content={i.sub_syll_content} sub_syll_title={i.sub_syll_title}></Syllabuscontent>)
                    }
                    

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>

        <section class="why-hero">
          <div class="hero-box-size">
            <div class="hero-head text-center">Why Hero Vired?</div>
            <div class="Hero-headline">Get the Hero Vired Advantage</div>
            <div class="hero-card">
              <div class="hero-card-left">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/hero-logo-parent-group.svg"
                  alt=""
                  class="hero-left-card"
                />
                <div class="hero-advantage-card-list">
                  Live Interactive
                  <br />
                  lectures
                </div>
                <div class="hero-advantage-card-list">
                  100% Program Completion Rate
                </div>
                <div class="hero-advantage-card-list">
                  Lifetime Placement Assistance
                </div>
                <div class="hero-advantage-card-list">
                  Small batch sizes for
                  <br />
                  focused teaching
                </div>
              </div>

              <div class="hero-card-right">
                <div class="others">Others</div>
                <div class="hero-advantage-card-lists">
                  Pre recorded
                  <br />
                  Lectures
                </div>
                <div class="hero-advantage-card-lists">Low completion rate</div>
                <div class="hero-advantage-card-lists">
                  No personalized <br />
                  Placement support
                </div>
                <div class="hero-advantage-card-lists">
                  No limit on batch sizes
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </section>

        <section class="faculty" id="faculty">
          <div class="faculty-box">
            <div class="faculty-heading">Faculty</div>
            <h1 class="faculty-headline">Industry Leading Faculty</h1>
            <span class="faculty-head-info">
              Learn from world-class faculty that will guide you through this
              certification program
            </span>
            <div class="blank"></div>
            <div class="faculty-swiper">
              <div class="faculty-cards  ">
                <div class="faculty-cards-box box-fac">
                  <div class="profile-block">
                    <img
                      src="https://staging.herovired.com/wp-content/uploads/2022/12/Noah-Askin.png"
                      alt=""
                      class="faculty-card-profile-img "
                    />
                    <h1 class="faculty-card-profile-name">Noah Askin</h1>
                    <h1 class="faculty-card-profile-designation ">
                      Associate Professor of Organizational Behavior
                    </h1>
                  </div>
                  <div class="main-block">
                    <span>
                      Noah is an award-winning case writer and teacher, he
                      taught the organizational design and leadership core
                      course in INSEAD's MBA program for 8 years.
                    </span>
                  </div>

                  <a
                    class=" faculty-card-profile-url"
                    href="https://www.linkedin.com/in/noahaskin/"
                  >
                    {" "}
                    <img src={linkedinicon} alt="" /> View Linkedin Profile
                  </a>
                </div>
                <div class="faculty-cards-box box-fac">
                  <div class="profile-block">
                    <img
                      src="https://staging.herovired.com/wp-content/uploads/2022/12/Joerg-Niessig.png"
                      alt=""
                      class="faculty-card-profile-img "
                    />
                    <h1 class="faculty-card-profile-name">Joerg Niessig</h1>
                    <h1 class="faculty-card-profile-designation ">
                      Senior Affiliate Professor of Marketing at INSEAD
                    </h1>
                  </div>
                  <div class="main-block">
                    <span>
                      A globally recognized expert passionate about bridging the
                      academic and the business world & known for his work on
                      customer-centric digital transformation.{" "}
                    </span>
                  </div>

                  <a
                    class=" faculty-card-profile-url"
                    href="https://www.linkedin.com/in/joergniessing/"
                  >
                    {" "}
                    <img src={linkedinicon} alt="" /> View Linkedin Profile
                  </a>
                </div>
                <div class="faculty-cards-box box-fac">
                  <div class="profile-block">
                    <img
                      src="https://staging.herovired.com/wp-content/uploads/2022/12/Aditya-Malhotra.png"
                      alt=""
                      class="faculty-card-profile-img "
                    />
                    <h1 class="faculty-card-profile-name">Aditya Malhotra</h1>
                    <h1 class="faculty-card-profile-designation mb-4">
                      Product Coach & Strategist
                    </h1>
                  </div>
                  <div class="main-block mb-5">
                    <span>
                      He has 11+ years of experience building products for
                      startups and high-growth multinational companies & has
                      been actively involved in designing GTM strategies for
                      firms.
                    </span>
                  </div>

                  <a
                    class=" faculty-card-profile-url"
                    href="https://www.linkedin.com/in/adityamalhotra6/"
                  >
                    {" "}
                    <img src={linkedinicon} alt="" /> View Linkedin Profile
                  </a>
                </div>
                <div class="faculty-cards-box box-fac">
                  <div class="profile-block">
                    <img
                      src="https://staging.herovired.com/wp-content/uploads/2022/12/Shesh-Vasudevamurthy1.png"
                      alt=""
                      class="faculty-card-profile-img "
                    />
                    <h1 class="faculty-card-profile-name">
                      Shesh Vasudevamurthy
                    </h1>
                    <h1 class="faculty-card-profile-designation ">
                      PhD / DBA Scholar
                      <br />( Biz Strategy and AI)
                    </h1>
                  </div>
                  <div class="main-block">
                    <span>
                      Shesh Vasudevamurthy brings 26 years of experience in
                      Product Management, Strategy Consulting, and Engineering
                      spanning across the US and India.
                    </span>
                  </div>

                  <a
                    class=" faculty-card-profile-url"
                    href="https://www.linkedin.com/in/sheshadriv/"
                  >
                    {" "}
                    <img src={linkedinicon} alt="" /> View Linkedin Profile
                  </a>
                </div>
                <div class="faculty-cards-box box-fac">
                  <div class="profile-block">
                    <img
                      src="https://staging.herovired.com/wp-content/uploads/2022/09/Maanuel-Sosa.png"
                      alt=""
                      class="faculty-card-profile-img "
                    />
                    <h1 class="faculty-card-profile-name">Manuel Sosa</h1>
                    <h1 class="faculty-card-profile-designation ">
                      Professor of Technology and Operations Management
                    </h1>
                  </div>
                  <div class="main-block">
                    <span>
                      He is a Professor of Technology and Operations Management
                      and the Director of the Heinrich and Esther
                      Baumann-Steiner Fund for Creativity and Business at
                      INSEAD.
                    </span>
                  </div>

                  <a
                    class=" faculty-card-profile-url"
                    href="https://www.linkedin.com/in/manuel-sosa-0a0b8a38/?originalSubdomain=sg"
                  >
                    {" "}
                    <img src={linkedinicon} alt="" /> View Linkedin Profile
                  </a>
                </div>
                <div class="faculty-cards-box box-fac">
                  <div class="profile-block">
                    <img
                      src="https://staging.herovired.com/wp-content/uploads/2022/09/Amitava-Chattopadhyay.png"
                      alt=""
                      class="faculty-card-profile-img "
                    />
                    <h1 class="faculty-card-profile-name">
                      Amitava Chattopadhyay
                    </h1>
                    <h1 class="faculty-card-profile-designation ">
                      Marketing Area Chair at INSEAD
                    </h1>
                  </div>
                  <div class="main-block">
                    <span>
                      Amitava is a branding expert and is a Professor of
                      Marketing and the Program Director of the Certificate
                      Program in Strategic Management and Business Essentials.{" "}
                    </span>
                  </div>

                  <a
                    class=" faculty-card-profile-url"
                    href="https://www.linkedin.com/in/amitava-chattopadhyay-240400/?originalSubdomain=sg"
                  >
                    {" "}
                    <img src={linkedinicon} alt="" /> View Linkedin Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="patner" id="programPartners">
          <div class="patner-box">
            <div class="patner-head">Program Partners</div>
          </div>
          <h1 id="headline-ti" class="ct-headline section-title">
            Partnered with leading universities and organizations
          </h1>
          <div class="patner-flex  ">
            
              {
                programPartnerdata.map( i=> <Programpartner img={i.img} head={i.head} title={i.title} content={i.content}></Programpartner>)
              }
          </div>
        </section>

        <section class="certificate" id="Certificate">
          <div class="certi-box">
            <div class="certificate-head">
              <div class="section-pre-title">Certificates</div>
            </div>
            <div class="certi-heading">
              <h2>Get certified after you graduate from the program</h2>
            </div>

            <div class="certi-head-info">
              <span>
                Upon successful completion of this Product Management program,
                you will receive:
              </span>
            </div>

            <div class="certi-img">
              <div class="certi-img-size">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/12/product-management-certificate.png"
                  alt=""
                  class="c-img"
                />
              </div>
              <div class="certi-img-text">
                <h4 class="ct-headline">
                  <span>Hero Vired and INSEAD Certificate</span>
                </h4>
                <p class="ct-text">
                  <span class="text-center">
                    Benefit from the Hero Group’s decades of research and
                    understanding of the Indian education and job landscape.
                    Earn a program completion certificate from INSEAD, the #1
                    B-School in the world in 2021. <br /> Eligible learners can
                    earn the Internship certificate and Google Analytics online
                    certification.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="placement">
          <div class="placement-size">
            <div class="placement-head-1">Learners Success & Placement</div>
            <div class="placement-head-2">
              <h1>
                <span>97,000+ Product jobs in India.</span>
                &nbsp;You can&nbsp; &nbsp;be one of them
              </h1>
              <img
                src="https://staging.herovired.com/wp-content/uploads/2022/08/can-will.svg"
                alt=""
                class="place-img"
              />
            </div>
            <div class="placement-head-3">
              Our Learner Success Team will ensure to get you the right skills
              you need to become a
            </div>
            <div class="placment-button">
              <div class="placement-button-box">
                <div class="p-button">
                  <div class="learner-stats-title">
                    <span>Associate Product Manager</span>
                  </div>
                  <div class="learner-stats-digits">
                    <span>7,000+ Jobs</span>
                  </div>
                </div>
                <div class="p-button">
                  <div class="learner-stats-title">
                    <span>Product Manager</span>
                  </div>
                  <div class="learner-stats-digits">
                    <span>20,000+ Jobs</span>
                  </div>
                </div>
                <div class="p-button">
                  <div class="learner-stats-title">
                    <span>Product Lead</span>
                  </div>
                  <div class="learner-stats-digits">
                    <span>13,000+ Jobs</span>
                  </div>
                </div>
                <div class="p-button">
                  <div class="learner-stats-title">
                    <span>Product Marketing Manager</span>
                  </div>
                  <div class="learner-stats-digits">
                    <span>7,000+ Jobs</span>
                  </div>
                </div>
                <div class="p-button">
                  <div class="learner-stats-title">
                    <span> Product Strategist</span>
                  </div>
                  <div class="learner-stats-digits">
                    <span>5,000+ Jobs</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="placement-footer">
              <span>Data sourced from Linkedin</span>
            </div>
          </div>
        </section>

        <section class="goal">
          <div class="goal-box">
            <div class="goal-head text-center">
              <span>
                {" "}
                Personalized placement services to help you with your career
                goals
              </span>
            </div>
            <div class="goal-items">
              <div class="items">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/1-on-1-ico.png"
                  alt=""
                />
                <div class="items-text">
                  <span>1:1 career coaching</span>
                </div>
              </div>

              <div class="items">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/in-time-ico.png"
                  alt=""
                />
                <div class="items-text">
                  <span>Just-in-time interview preparation</span>
                </div>
              </div>
              <div class="items">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/selection-ico.png"
                  alt=""
                />
                <div class="items-text">
                  <span>Guaranteed job opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="salary">
          <div class="salary-items">
            <div class="items-salary-flex">
              <div class="item-name">Average salary range</div>
            </div>
            <div class="items-button">
              <img
                src="https://staging.herovired.com/wp-content/uploads/2022/07/briefcase-ico.svg"
                alt=""
              />
              <span class="lac">5 Lacs - 25 Lacs</span>
            </div>
          </div>
        </section>

        <section class="enrollment">
          <div class="enroll-items">
            <div class="enroll-items-1">Enrollment</div>
            <div class="enroll-items-2">Application Process</div>
            <div class="enroll-items-3">
              A simple yet thorough application process that will help you learn
              key skills to supercharge your career
            </div>
            <div class="enroll-items-4">
              <div class="enroll-col">
                <div>
                  {" "}
                  <img src="./briefcase (2).svg" alt="" />
                </div>
                <div class="step">Step 1</div>
                <div class="submit">Submit application</div>
                <div class="enroll-text">
                  Fill the form, review it, and submit your application. A fully
                  completed application helps us assess your learning goals and
                  enrol you into the program.
                </div>
              </div>
              <div class="enroll-col">
                <div>
                  {" "}
                  <img src="./file-text.svg" alt="" />
                </div>
                <div class="step">Step 2</div>
                <div class="submit">Receive the offer letter</div>
                <div class="enroll-text">
                  You will receive an offer letter to enrol, along with the
                  complete details of the program, fee and payment schedule,
                  etc.
                </div>
              </div>
              <div class="enroll-col">
                <div>
                  {" "}
                  <img src="./check-square.svg" alt="" />
                </div>
                <div class="step">Step 3</div>
                <div class="submit">Block your seat</div>
                <div class="enroll-text">
                  Pay a nominal amount to confirm your acceptance and block your
                  seat.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="price">
          <div class="price-box">
            <div class="price-left">
              <div class="price-head">Program Pricing</div>
              <h1 class="price-head-1">Upskill yourself with Hero Vired</h1>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/live_tv.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">
                  70% to 90% Live Instructor-led Classes
                </span>
              </div>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/casino.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">Gamified & Interactive Learning</span>
              </div>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/forum.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">Discussion Forums and Community</span>
              </div>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/category.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">Industry Projects & Case Studies</span>
              </div>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/thumb_up.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">
                  Practical Hands-on Learning Session
                </span>
              </div>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/add_business.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">Career Assistance and Workshops</span>
              </div>
              <div class="pricing-iconlist">
                <img
                  src="https://staging.herovired.com/wp-content/uploads/2022/07/business_center.svg"
                  alt=""
                  class="price-img"
                />
                <span class="price-text">Lifetime Placement Assistance</span>
              </div>
            </div>

            <div class="price-right">
              <div class="right-head">Apply Now</div>
              <div class="right-head-1">
                Data Science, Machine Learning, & Artificial Intelligence
              </div>
              <div class="right-head-3">Part-time</div>
              <div class="right-head-4">Starting at</div>
              <div class="right-head-5">
                ₹<span class="amt">12,116</span>
                <span class="time">/month</span>
              </div>
              <div class="right-head-6">
                Price: ₹<span class="gst">4,25,000 + GST</span>
              </div>

              <a
                class=" .ct-link-button large-cta apply-now-btn text-center"
                href="http://"
                target="_self"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <span class="text-center-1">Start Application</span>{" "}
              </a>

              <div class="text-block">
                Application Deadline:
                <span>6 January 2023</span>
              </div>
              <div class="seat">Apply early to secure your seat</div>
            </div>
          </div>
        </section>

        <section class="accod">
          <div class="acc-box">
            <div class="faq">FAQS</div>
            <h1 class="freq">Frequently Asked Questions</h1>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
              {
                    accordionData.map(i=> <Faq title={i.title} content={i.content}></Faq>)
              }
              </div>
            </div>
           
          </div>
        </section>
      </>
    </>
  );
}
export default Program;
