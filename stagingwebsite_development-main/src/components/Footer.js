import React from 'react';
import FooterCss from '../assets/css/footer.css';
import footer_logo from '../assets/img/footer.png';
import Container from 'react-bootstrap/Container';
import Fcourses from './footer/Fcourses';
import Viredlinks from './footer/Viredlinks';

function Footer() {
    const footdata =
        [
            {
                title: 'Data Science',
                text0: ['Accelerator Program in Business Analytic & Data Science', 'Integrated Program in Data Science,Machine Learning and Ai']
            },

            {
                title: 'Technology',
                text0: ['Certificate Program in Full Stack Development with Cloud for Web and Mobile', 'Certificate Program in DevOps and Cloud Engineering']
            },
            {
                title: 'Finance and Management',
                text0: ['Integrated Program in Finance and Financial Technologies', 'Certificate Program in Financial Analysis,Valuation and Risk Management', 'Certificate Program in Strategic Management and Business Essentials', 'Certificate Program in Product Management']
            },
            {
                title: 'Gaming',
                text0: ['Certificate Program in Gaming & Esports']
            }

        ]
    const viredlinkdata = [
        {
            link: '/viredforbusiness',
            text: 'Vired for Business'
        },
        {
            link: '/successstories',
            text: 'Success Stories'
        },
        {
            link: '/inthenews',
            text: 'In the news'
        },
        {
            link: '/learninghub',
            text: 'Learning Hub'
        },
        {
            link: '/aboutus',
            text: 'About Us'
        },
        {
            link: '/contactus',
            text: 'Contact Us'
        },
    ]
    return (
        <div class="container-fluid" id="footer-container">
            <div class="container" id="footer-inside-container">
                <div class="row" id="footer-row-1">
                    <div class="col-3" id="logo-row-1"><img src={footer_logo} ></img></div>
                    <div class="col" id="description-row-1">Hero Vired is a premium LearnTech company offering
                        industry-relevant programs in partnership with world-class institutions to create the change-makers
                        of tomorrow. Part of the rich legacy of the Hero Group, we aim to transform education in India by
                        creating programs delivered by leading industry practitioners that help professionals and students
                        enhance their skills.</div>
                </div>
                <div class="row" id="footer-row-2">
                    {footdata.map(i => <Fcourses title={i.title} text0={i.text0}></Fcourses>)}
                </div>
                <div class="row" id="footer-row-3">
                    <div class="col" id="heading-footer-row-2">
                        <h5>Vired Links</h5>
                        <div>
                            {viredlinkdata.map(i => <Viredlinks text={i.text} links={i.link}></Viredlinks>)}
                        </div>
                    </div>
                </div>
                <div class="row" id="footer-row-4">
                    <div class="col" id="heading-footer-row-2">
                        <h5>Contact</h5>
                        <div>
                            <li><a href="tel:18003093939"><iconify-icon icon="feather:phone-call" class="callme-icon" id="footer-contact"></iconify-icon>18003093939&nbsp; &nbsp; &nbsp;·&nbsp; &nbsp; &nbsp;</a></li>
                            <li><a href="mailto:hello@herovired.com" target="_self"><iconify-icon icon="feather:mail" class="callme-icon" id="footer-contact"></iconify-icon>hello@herovired.com&nbsp; &nbsp; &nbsp;·&nbsp; &nbsp;&nbsp;</a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=917678592801&text=Hello%2C%20I%27m%20here%20about"><iconify-icon icon="simple-icons:whatsapp" id="footer-contact"></iconify-icon >07678591955</a></li>
                        </div>
                    </div>
                </div>
                <div class="row" id="footer-row-5">
                    <div class="col" id="footer-row5-col1">
                        <a id="privacy" href="https://staging.herovired.com/privacy-policy/">Privacy Policy And Terms Of Use</a>
                        <div id="icon-divison">
                            <ul>
                                <li id="icon-text" ><a href="https://www.facebook.com/herovired/" class="fa fa-facebook"></a>
                                </li>
                                <li id="icon-text"><a href="https://www.instagram.com/herovired/" class="fa fa-instagram"></a></li>
                                <li id="icon-text"><a href="https://twitter.com/herovired" class="fa fa-twitter"></a></li>
                                <li id="icon-text"><a href="https://www.linkedin.com/company/hero-vired/about/" class="fa fa-linkedin"></a>
                                </li>
                                <li id="icon-text"><a href="https://www.youtube.com/channel/UC81ztf6ahAKbQWTh53NqJCw"
                                    class="fa fa-youtube-play"></a></li>
                            </ul>
                        </div>
                        <div id="last-text">©2023 Hero Vired. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default Footer;