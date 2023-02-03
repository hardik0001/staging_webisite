import React from "react";
import NewsCss from "../assets/css/news.css";

export default function News() {
    return (
        <div>
            <br />
            <div className="home-learners-path-div heading">
                <h5 className="text-center pres-head"> IN THE NEWS </h5>

                <h3 className="learners-path-heading text-center media">
                    Our media presence
                </h3>
                <p className="font-one-rem text-center spotlight in">
                    Find Hero Vired in the media spotlight
                </p>
            </div>
            <br />
            <br />

            <div className="mw-100">
                <div className="rows">
                    <div>
                        <div className="new-card ">
                            <div className="cards-image">
                                <img
                                    src="https://staging.herovired.com/wp-content/uploads/2022/12/Frame-1228.png"
                                    className="media-img"
                                    alt="hero vired"
                                />
                            </div>

                            <div className="cards-body">
                                <p>
                                    In an interaction with Business Today, our Founder &amp; CEO
                                    decodes his passion for sculpting and how it has helped evolve
                                    his personality..
                                </p>
                            </div>
                            <div className="cards-footerr ">
                                <a
                                    href="https://www.businesstoday.in/magazine/back-of-the-book/story/why-hero-vireds-akshay-munjal-is-passionate-about-clay-sculptures-343663-2022-08-04"
                                    target="_blank"
                                    data-id=""
                                    className=""
                                >Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className=" card-one ">
                        <div className="new-card ">
                            <div className="cards-image">
                                <img
                                    src="https://herovired.com/wp-content/uploads/2022/09/Frame-3466053-1.png"
                                    className="media-img"
                                    alt="hero vired"
                                />
                            </div>

                            <div className="cards-body">
                                <p>
                                    In an interview with YourStory, our Founder & CEO, Akshay
                                    Munjal, explains why he is bullish about the growth of EdTech
                                    in the post-COVID world.
                                </p>
                            </div>
                            <div className="cards-footerr ">
                                <a
                                    href="https://yourstory.com/2022/04/hero-vired-betting-upskilling-wave-post-pandemic"
                                    target="_ blank"
                                    data-id=""
                                >
                  Read more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card-one ">
                        <div className="new-card ">
                            <div className="cards-image">
                                <img
                                    src="https://herovired.com/wp-content/uploads/2022/09/Frame-3466051@3x.png"
                                    className="media-img"
                                    alt="hero vired"
                                />
                            </div>

                            <div className="cards-body">
                                <p>
                                    In a tete-a-tete with Outlook Business, our Founder & CEO,
                                    Akshay Munjal, shares his passion for sculpting and lessons
                                    learned from this craft.
                                </p>
                            </div>
                            <div className="cards-footerr ">
                                <a
                                    href="https://www.outlookbusiness.com/cest-la-vie-6/pursuit-of-happiness-23/made-of-clay-6545"
                                    target="_blank"
                                    data-id=""
                                >
                  Read more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" card-one">
                        <div className="new-card ">
                            <div className="cards-image">
                                <img
                                    src="https://herovired.com/wp-content/uploads/2022/09/Frame-3466057-1.png"
                                    className="media-img"
                                    alt="hero vired"
                                />
                            </div>

                            <div className="cards-body">
                                <p>
                                    In an interaction with Forbes, our Founder&CEO Akshay Munjal
                                    explains his objective and vision of foraying into the Indian
                                    EdTech space.
                                </p>
                            </div>
                            <div className="cards-footerr ">
                                <a
                                    href="https://www.forbesindia.com/article/take-one-big-story-of-the-day/why-the-5-billion-hero-group-wants-a-pie-of-indias-booming-edtech-space/67575/1"
                                    target="_blank"
                                    data-id=""
                                >
                  Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <a
                    href="https://staging.herovired.com/news-room/"
                    className="download "
                >
                    View all
                </a>
            </div>
            <br />
        </div>
    );
}
