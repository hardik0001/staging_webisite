import React from 'react';
// import Programfaculty from '../assets/css/faculty.css';
import TopTier from '../assets/css/toptier.css';
import harvardbusinessscholl from '../assets/img/harvardbussinessschool.jpeg';
import iitKharagpur from '../assets/img/iitkharagpur.png';
import iitcalcutta from '../assets/img/iitcalcutta.png';
import unswlogo from '../assets/img/unsw.png';
import iitbombay from '../assets/img/iitbombay.png';
function Toptier() {

    return (
        <>
            {/* <div class="faculty" style= {{width: '1296px',height:'915px'}}>
        <div class="home-learners-path-div heading">
            <h5 style={{color: 'gray'}} class="text-center">FACULTY</h5>
            <h3 class="learners-path-heading text-center">
                <b>Top tier professionals</b>
            </h3>

            <div class="text-aline">
                <p class="text-center" style={{color: 'gray', width:'822px',height:'48px',fontSize:'16px',
                lineHeight: '150%'}} 
                >The faculty
                    at
                    Hero Vired
                    are
                    industry
                    practitioners from leading organizations and institutions who
                    inspire
                    and
                    challenge our
                    learners by providing
                    an industry-relevant hands-on experience</p>
            </div>
        </div>
        <div class="aline">
            <div id="new_columns-256-126" class="ct-new-columns in" style={{height:'200px'}}>
                <div id="div_block-1859-126" class="ct-div-block rounded float-left">
                    <img 
                        src={"https://staging.herovired.com/wp-content/uploads/2022/12/HBS-styleguide-primary-logo-1-2-300x125.jpg"}
                        style={{ width:'288.5px',height:'120px'}}/>
                    <img src={"https://staging.herovired.com/wp-content/uploads/2022/12/download-e1672045020509.png"}
                        style={{ width:'115px', height:'115px'}}/>

                    <img src={"https://staging.herovired.com/wp-content/uploads/2022/12/iimcal-logo-1-300x113.png"}
                        style={{ width:'288.5px',height:'108px'}}/>
                    <img 
                        src={"https://staging.herovired.com/wp-content/uploads/2022/12/the-university-of-south-wales-logo-6642E297DF-seeklogo.com-1-e1672045746770.png"}
                        class="ct-image" style={{ width:'105.79px', height:'105.79px'}}/>

                    <img 
                        src={"https://staging.herovired.com/wp-content/uploads/2022/12/802-8025099_advertisement-iit-bombay-logo-2-e1672045738574.png"}
                        class="ct-image" style={{width:'105.79px',height:'105.79px'}}/>
                </div>
            </div>
        </div>
        </div> */}
            <div id="top-tier">
                <div id="inner-top-tier">
                    <div id="first-text-top-tier">
                        <p>Faculty</p>
                    </div>
                    <div id="second-text-top-tier">
                        <p>Top tier professionals</p>
                    </div>
                    <div id="third-text-top-tier">
                        <p>The faculty at Hero Vired are industry practitioners from leading organizations and institutions who inspire and challenge our learners by providing an industry-relevant hands-on experience</p>
                    </div>
                    <div id="top-tier-institutions">
                        <ul id="top-tier-institutions-images">
                            <li><img src={harvardbusinessscholl} /></li>
                            <li><img src={iitKharagpur} /></li>
                            <li><img src={iitcalcutta} /></li>
                            <li><img src={unswlogo} /></li>
                            <li><img src={iitbombay} /></li>
                        </ul>
                    </div>
                    <div class="you-tube-video">
                        <iframe src="https://www.youtube.com/embed/zMz4uyCw-8c"
                            title="How can hands-on, industry-specific learning help you #GetVired?" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Toptier;
