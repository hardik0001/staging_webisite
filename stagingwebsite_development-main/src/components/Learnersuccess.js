import React from 'react';
import Learneruccess from '../assets/css/learnersuccess.css';
import trendingup from '../assets/img/trending-up.svg';
import usercheck from '../assets/img/user-check.svg';
import placementrecord from '../assets/img/placement-record.svg';
import industrypartners from '../assets/img/industry-partners.svg';
import Textls from './learnersuccess/Textls';
import Imagels from './learnersuccess/Imagels';
import Lssuccessstories from './learnersuccess/Lssucessstories';
function Learnersuccess() {

    const learnersucessdata = [
        {
            lsimg: trendingup,
            lsvalue: '69.35%',
            lstext: 'Avg. Salary'
        },
        {
            lsimg: usercheck,
            lsvalue: '1.5Cr',
            lstext: 'Highest Package'
        },
        {
            lsimg: placementrecord,
            lsvalue: '100%',
            lstext: 'Placement Record'
        },
        {
            lsimg: industrypartners,
            lsvalue: '55+',
            lstext: 'Industry Partners'
        },
    ]
    return (
        <div id="learner-success">
            <div id="inner-learner-success">
                <p id="first-text-learner-success">Learner Success</p>
                <p id="second-text-learner-success">Measurable transformation</p>
                <p id="third-text-learner-success">We offer programs with placement assistance to help our learners find
                    success</p>
                <div class="container" id="container-learner-success">
                    <div class="row" id="container-row">
                        {
                            learnersucessdata.map(i => <Lssuccessstories  textcolor='#333333'lsimg={i.lsimg} lsvalue={i.lsvalue} lstext={i.lstext}></Lssuccessstories>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Learnersuccess;