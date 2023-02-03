import '../assets/css/viredforbusiness.css';
import Companies from './Companycarousel/Companies';
import Academicpartner from './CollabCarousel/Academicpartner';
import databaseimg from '../assets/img/database.svg'
import clockimg from '../assets/img/clock.svg'
import codeimg from '../assets/img/code.svg'
import downicon from '../assets/img/chevron-down.svg'
import upicon from '../assets/img/chevron-up.svg'
import { data } from 'jquery';
import Vbprogram from './Viredbusiness/Vbprogram';
import Awardblockimage from './Viredbusiness/Awardblockimage';
import Awardproject from './Viredbusiness/Awardproject';
import Solutionframework from './Viredbusiness/Solutionframework';
import Mentorship from './Viredbusiness/Mentorship';
import up from "../assets/img/up.svg";
import Cardtestimonial from './Viredbusiness/Cardtestimonial';
import arrowright from "../assets/img/arrow-right.svg";
import arrowleft from "../assets/img/arrow-left.svg";
function Vbussiness() {
    let showhideawardimage = (event) => {
        let displayvalue = document.getElementById("lastimage-awardblock").style.display
        if (displayvalue == 'none') {
            document.getElementById("lastimage-awardblock").style.display = 'block'
            document.getElementById("show-click").innerHTML = "Show less" + "<img src=" + upicon + "></img>"
        }
        else {
            document.getElementById("lastimage-awardblock").style.display = 'none'
            document.getElementById("show-click").innerHTML = "Show More" + "<img src=" + downicon + "></img>"
        }
    }
    const vbcardsdata = [
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Raj Sekhar',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        },
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Shashwat Pal',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        },
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Rakesh Kumar',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        },
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Mrinal Waghela',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        },
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Divya Bettampadi',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        },
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Balraj Singh Bhullar',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        },
        {
            learnerimg: "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
            learnername: 'Raj Sekhar',
            learnertitle: 'Investigation Specialist',
            learnermsg: 'I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.'
        }
    ]
    const mentorshipdata =
        [
            {
                mentorimg: "https://staging.herovired.com/wp-content/uploads/2022/12/photo-1588702547954-4800ead296ef.webp",
                mentortext1: "Customised learning based on business goals",
                mentortext2: "Our custom-built course created in collaboration with the world's leading universities are focused on addressing your company's Core requirements.",
            },
            {
                mentorimg: "https://staging.herovired.com/wp-content/uploads/2022/12/photo-1513258496099-48168024aec0.webp",
                mentortext1: "Industry relevant conent and training",
                mentortext2: "Our training programs provide hands-on domain relevant learning so your team is deployment-ready from day 0",
            },
            {
                mentorimg: "https://staging.herovired.com/wp-content/uploads/2022/12/photo-1488190211105-8b0e65b80b4e.webp",
                mentortext1: "Outcome oriented teaching method",
                mentortext2: "Our focused 360 degree training programs enhances your organisational skill sets to drive business growth",
            },
            {
                mentorimg: "https://staging.herovired.com/wp-content/uploads/2022/12/photo-1522202176988-66273c2fd55f-1.webp",
                mentortext1: "Engagement focused delivery",
                mentortext2: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            }
        ]

    const solutionframeworkdata =
        [
            {
                solimg: "https://staging.herovired.com/wp-content/uploads/2022/12/SF1.svg",
                soltext1: "Discovery",
                soltext2: "In depth gap analysis to understand the learning needs of your employees. We co-create learning methodology to identify and improve the relevant skill gap."
            },
            {
                solimg: "https://staging.herovired.com/wp-content/uploads/2022/12/SF2.svg",
                soltext1: "Solution",
                soltext2: "Scoping the accurate solution based on the gap analysis and using a data-driven approach to design a learning experience or a solution based on the enterprise and learner requirements"
            },
            {
                solimg: "https://staging.herovired.com/wp-content/uploads/2022/12/SF3.svg",
                soltext1: "Learning",
                soltext2: "Guided and mentorship-based learning approach that uses peer and collaborative tools with hands-on application of skills learnt and continuous personalised support"
            },
            {
                solimg: "https://staging.herovired.com/wp-content/uploads/2022/12/SF4.svg",
                soltext1: "Assessment",
                soltext2: "Check the application of learned skills and use learning tools to assess and review learning impact and efficiency testing throughout the training and development schedule."
            }
        ]
    const awardprojectdata = [
        {
            projectimg: "https://staging.herovired.com/wp-content/uploads/2022/10/Group-620.png",
            projecttext: "Project Based Learning for application-oriented skills"
        },
        {
            projectimg: "https://staging.herovired.com/wp-content/uploads/2022/10/Group-620.png",
            projecttext: "Technology-based interactive pedagogy"
        },
        {
            projectimg: "https://staging.herovired.com/wp-content/uploads/2022/10/Group-620.png",
            projecttext: "Industry focused skills for enhancing employability"
        },
        {
            projectimg: "https://staging.herovired.com/wp-content/uploads/2022/10/Group-620.png",
            projecttext: "Academic resources from Global Academic Partners"
        },
        {
            projectimg: "https://staging.herovired.com/wp-content/uploads/2022/10/Group-620.png",
            projecttext: "Measurable transformation through Skill-mapped assessments"
        }]
    const awardimagedata = [
        {
            awardimgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png',
            awardtext1: 'Indian Education Award',
            awardtext2: 'Edtech Startup of the Year'
        },
        {
            awardimgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png',
            awardtext1: 'Education Innovation Award',
            awardtext2: 'Best Personalised Learning Programs'
        },
        {
            awardimgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/award-image.png',
            awardtext1: 'Brand Bharat Awards- Gold',
            awardtext2: 'Best Use of PR'
        },
        {
            awardimgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png',
            awardtext1: 'Mark Asia Award',
            awardtext2: 'Brand Launch Campaign of the Year'
        },
        {
            awardimggurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png',
            awardtext1: 'Mark Asia Award',
            awardtext2: 'Brand Launch Campaign of the Year'
        },
    ]
    const Vbprogramdata =
        [
            {
                bgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/cat-05.jpg',
                prgname: 'Data Science',
                icon: databaseimg
            },
            {
                bgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/cat-04.jpg',
                prgname: 'Technology',
                icon: codeimg
            },
            {
                bgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/cat-03.jpg',
                prgname: 'Finance & Fintech',
                icon: databaseimg
            },
            {
                bgurl: 'https://staging.herovired.com/wp-content/uploads/2022/09/cat-02.jpg',
                prgname: 'Management',
                icon: clockimg
            }
        ]
    return (
        <>
            <div class="business-header-outermost">
                <div class="business-header-outermost-1">
                    <div class="business-header-outermost-col1">
                        <h1 class="business-header-outermost-col1-text1">Custom learning solutions at scale
                        </h1>
                        <p class="business-header-outermost-col1-text2">Part of the rich legacy of the Hero Group, we aim to
                            transform education by creating programs delivered by leading industry practitioners</p>
                        <div class="business-header-outermost-col1-text3">
                            <a class="business-header-outermost-col1-text3-enquire" href="/contactus">Enquire Now</a>
                            <div class="business-header-outermost-col1-text3-watchvideo">
                                <a class="business-header-outermost-col1-text3-videoicon" href="/contactus"><img
                                    src="data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.0003 18.9882C14.6027 18.9882 18.3337 15.2572 18.3337 10.6549C18.3337 6.05249 14.6027 2.32153 10.0003 2.32153C5.39795 2.32153 1.66699 6.05249 1.66699 10.6549C1.66699 15.2572 5.39795 18.9882 10.0003 18.9882Z' stroke='%23287CD3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.33301 7.32153L13.333 10.6549L8.33301 13.9882V7.32153Z' stroke='%23287CD3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" /></a>
                                <a class="business-header-outermost-col1-text3-videolink" href="https://youtu.be/Cbw39BHOmbI"
                                    target="_blank">
                                    Watch Video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="business-header-outermost-col2">
                        <img id="business-header-outermost-col2-img" alt="" src="https://staging.herovired.com/wp-content/uploads/2022/09/be-made-for-big-things.png" srcset="https://staging.herovired.com/wp-content/uploads/2022/09/be-made-for-big-things.png 457w, https://staging.herovired.com/wp-content/uploads/2022/09/be-made-for-big-things-300x283.png 300w" sizes="(max-width: 457px) 100vw, 457px" />

                    </div>
                </div>
            </div>
            <Companies bgrndcolor="white" text1="LEARNER SUCCESS" text2="Success Stories at" text3="Our learners work at some of the leading organizations in the world"></Companies>
            <Academicpartner text1="OUR PARTNERSHIPS" text2="Our academic partners" text3="We design and deliver industry-relevant programs with access to top global universities, to create the change makers of tomorrow"></Academicpartner>
            <div class="vb-program-images">
                {
                    Vbprogramdata.map(i => <Vbprogram bgurl={i.bgurl} prgname={i.prgname} icon={i.icon}></Vbprogram>)
                }
            </div>
            <div class="awards-block">
                <p class="text1-awards-block">AWARDS AND ACCOLADES</p>
                <p class="text2-awards-block">Collecting trophies already</p>
                <p class="text3-awards-block">Proud to be recognized by some of the most important and influential publications and organizations around the world</p>
                <div class="awards-image-block">
                    {/* {
                awardimagedata.map(i => <Awardblockimage awardimgurl={i.awardimgurl} awardtext1={i.awardtext1} awardtext2={i.awardtext2}></Awardblockimage>)
            } */}
                    <div class="individual-awards-image-block">
                        <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png"></img>
                        <p class="individual-awards-image-block-text1">Indian Education Award</p>
                        <p class="individual-awards-image-block-text2">Edtech Startup of the Year</p>
                    </div>
                    <div class="individual-awards-image-block">
                        <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png"></img>
                        <p class="individual-awards-image-block-text1">Education Innovation Award</p>
                        <p class="individual-awards-image-block-text2">Best Personalised Learning Programs</p>
                    </div>
                    <div class="individual-awards-image-block">
                        <img src="https://staging.herovired.com/wp-content/uploads/2022/09/award-image.png"></img>
                        <p class="individual-awards-image-block-text1">Brand Bharat Awards- Gold</p>
                        <p class="individual-awards-image-block-text2">Best Use of PR</p>
                    </div>
                    <div class="individual-awards-image-block">
                        <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                        <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                        <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                    </div>
                    <div class="individual-awards-image-block" id="lastimage-awardblock" style={{ display: 'none' }}>
                        <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                        <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                        <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                    </div>
                </div>
                <button class="awards-image-block-lasttext" id="show-click" onClick={showhideawardimage}>Show More<img src={downicon}></img></button>
            </div>
            <div class="outermost-vb-industry-report">
                <div class="vb-industry-report">
                    <p class="vb-industry-report-text1">INDUSTRY REPORT</p>
                    <p class="vb-industry-report-text2">Upskilling and reskilling are key to attracting and retaining talent in 2022 and beyond</p>
                    <p class="vb-industry-report-text3">Over 92% of CXOs echo the sentiment, stating that learning should be a priority for their Senior Managers. And 76% of them believed that the comprehensiveness of the learning program was the most important criterion for selecting a learning partner. Get more insights from leading HR & Learning Development professionals in our Upskilling and reskilling for future jobs report.</p>
                    <div class="vb-industry-report-text4-block">
                        <p class="vb-industry-report-text4">Powered by</p>
                        <img src="https://staging.herovired.com/wp-content/uploads/2022/09/hr-katha.jpg"></img>
                    </div>
                </div>
            </div>
            <div class="outermost-vb-career-journey">
                <div class="vb-industry-report">
                    <p class="vb-industry-report-text1">WHAT WE DO</p>
                    <p class="vb-industry-report-text2">Helping you build career journeys</p>
                    <p class="vb-industry-report-text3">We equip learners with the skills of tomorrow, by building custom programs with high quality instructor-led delivery and pre-defined learning outcomes</p>
                    <div class="vb-career-journey-block4">
                        <div class="vb-career-journey-block4-col1">
                            <img class="vb-career-journey-block4-col1-img" src="https://staging.herovired.com/wp-content/uploads/2022/09/career-journey-image.jpg"></img>
                        </div>
                        <div class="vb-career-journey-block4-col2">
                            {
                                awardprojectdata.map(i => <Awardproject projectimg={i.projectimg} projecttext={i.projecttext}></Awardproject>)
                            }
                        </div >
                    </div>
                </div>
            </div>
            <div class="outermost-vb-industry-report">
                <div class="vb-industry-report">
                    <p class="vb-industry-report-text1">HOW CAN WE HELP</p>
                    <p class="vb-industry-report-text2">Our solutions framework</p>
                    <p class="vb-industry-report-text3">End to end career journey for your learners</p>
                    <div class="vb-solution-framework-row4">
                        {
                            solutionframeworkdata.map(i => <Solutionframework solimg={i.solimg} soltext1={i.soltext1} soltext2={i.soltext2}></Solutionframework>)
                        }
                    </div>
                </div>
            </div>
            <div class="vb-mentorship">
                <p class="text1-awards-block">OUR APPROACH</p>
                <p class="text2-awards-block">Mentorship-based learning approach</p>
                <p class="text3-awards-block">Our custom-built courses created in collaboration with the world’s leading universities are focused on addressing your company's core requirements</p>
                <div class="vb-mentorship-row4">
                    {
                        mentorshipdata.map(i => <Mentorship mentorimg={i.mentorimg} mentortext1={i.mentortext1} mentortext2={i.mentortext2}></Mentorship>)
                    }
                </div>
            </div>
            <div class="outermost-vb-enquiry-block">
                <div class="inside-vb-enquiry-block">
                    <div class="vb-enquiry-block">
                        <div class="vb-enquiry-block-col1">
                            <img src="https://staging.herovired.com/wp-content/uploads/2022/09/career-buddies.svg"></img>
                        </div>
                        <div class="vb-enquiry-block-col2">
                            <div class="vb-enquiry-block-col2-row1">
                                <p class="vb-enquiry-block-col2-row1-text1">ENQIRY</p>
                                <p class="vb-enquiry-block-col2-row1-text2">Power up your enterprise today</p>
                            </div>
                            <div class="vb-enquiry-block-col2-row2">
                                <p class="vb-enquiry-block-col2-row2-text1">OR CONTACT</p>
                                <a href="mailto:enterprise@herovired.com" target="_blank" class="vb-enquiry-block-col2-row2-text2">enterprise@herovired.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outermost-vb-achievements">
                <div class="vb-achievements">
                    <p class="vb-achievements-text1">ACHEIVEMENTS</p>
                    <p class="vb-achievements-text2">Don't take our word for it</p>
                    <div class="vb-card-swiper">
                        <div class="vb-achievements-testimonial">
                            {
                                vbcardsdata.map(i => <Cardtestimonial learnerimg={i.learnerimg} learnername={i.learnername} learnertitle={i.learnertitle} learnermsg={i.learnermsg}></Cardtestimonial>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div class="vb-outside-lms-vlearn">
                <div class="vb-lms-vlearn">
                    <div class="vb-lms-vlearn-col1">
                        <p class="vb-lms-vlearn-col1-text1">OUR LMS - VLEARN</p>
                        <p class="vb-lms-vlearn-col1-text2">Get a dedicated view to your learner's progress</p>
                        <p class="vb-lms-vlearn-col1-text3">Get deep insights from VLearn, a cloud based end-to-end solution for online learning delivery and program management.</p>
                        <a href="/contactus"><button class="vb-lms-vlearn-col1-button">Enquire Now</button></a>
                    </div>
                    <div class="vb-lms-vlearn-col2">
                        <img class="vb-lms-vlearn-col2-img" src="https://staging.herovired.com/wp-content/uploads/2022/09/elearn-screen.jpg"></img>
                    </div>
                </div>
            </div>
        </>)
}
export default Vbussiness;