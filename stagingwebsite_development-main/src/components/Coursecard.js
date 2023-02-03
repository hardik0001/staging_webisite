
import '../assets/css/courses.css'
import '../assets/css/swiper.css'
import Card from './Coursescard/Card';
import { useState } from 'react';


function Coursecard() {
    const [active, setActive] = useState('popular')
    const [classstateds, setClassstateds] = useState('courses-btn-ds')
    const [classstatepop, setClassstatepop] = useState('courses-btn-pop-click')
    const [classstatefi, setClassstatefi] = useState('courses-btn-fi')
    const [classstatema, setClassstatema] = useState('courses-btn-ma')
    const [classstatega, setClassstatega] = useState('courses-btn-ga')
    const [classstatete, setClassstatete] = useState('courses-btn-te')
    const carddata = [
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/12/data-driven-product-managment.png",
            text: ['In collaboration with', 'INSEAD', 'Certifcate Program in', 'Product Management', 'Part-time · 6 Months', 'Apply by: ', ' Coming Soon'],
            explorelink: "#",
            progname: 'management',
            isPopular: 1
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/09/GeorgiaTech.webp",
            text: [' ', ' ', 'Accelerator Program in', 'Business Analytics and Data Science', 'Part-time · 9 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'datascience',
            isPopular: 1
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/09/MIT-1.webp",
            text: ['In collaboration with', 'MIT Open Learning', 'Integrated Program in', 'Finance and Finacial Technologies', 'Part-time · 11 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'finance',
            isPopular: 1
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/09/3-1.png",
            text: ['In collaboration with', 'NODWIN GAMING', 'Certifcate Program in', 'Gaming and eSports', 'Part-time · 6 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'gaming',
            isPopular: 1
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/06/INSEAD.webp",
            text: ['In collaboration with', 'INSEAD', 'Certifcate Program in', 'Strategic Management and Business Essentials', 'Part-time · 6 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'management',
            isPopular: 1
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/06/MIT.webp",
            text: ['In collaboration with', 'MIT Open Learning  ', 'Integrated Program in', 'Data Science,Machine Learning & Artifical Intelligence', 'Full-time · 11 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'datascience',
            isPopular: 0
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/09/Certificate-program-in-DevOps-and-Cloud-Engineering.png",
            text: ['In collaboration with', 'edX and from AWS', 'Certifcate Program in', 'DevOps & Cloud Engineering', 'Part-time · 7 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'technology',
            isPopular: 0
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/06/CodeAca.webp",
            text: ['In collaboration with', 'Codeacademy', 'Certifcate Program in', 'Full Stack Development with Cloud for Web and Mobile', 'Part-time · 10 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'technology',
            isPopular: 0
        },
        {
            imglink: "https://staging.herovired.com/wp-content/uploads/2022/06/ColumbiaUniv.webp",
            text: ['In collaboration with', 'edX and from Columbia University', 'Certificate Program in', 'Financial Analysis,Valuation & Risk Management', 'Part-time · 6 Months', 'Apply by: ', '6 January 2023'],
            explorelink: "#",
            progname: 'finance',
            isPopular: 0
        }
    ]

    return (
                <div id="courses">
                    <div id="button-courses">
                        <button class={classstatepop} onClick={(
                        ) => {
                            setClassstatema('courses-btn-ma')
                            setClassstateds('courses-btn-ds')
                            setClassstatete('courses-btn-te')
                            setClassstatefi('courses-btn-fi')
                            setClassstatega('courses-btn-ga')
                            setClassstatepop('courses-btn-pop-click')
                            setActive('popular')
                        }}>Popular</button>
                        <button class={classstateds} onClick={(
                        ) => {
                            setClassstatepop('courses-btn-pop')
                            setClassstatete('courses-btn-te')
                            setClassstatefi('courses-btn-fi')
                            setClassstatema('courses-btn-ma')
                            setClassstatega('courses-btn-ga')
                            setClassstateds('courses-btn-ds-click')
                            setActive('datascience')
                        }}>Data Science</button>
                        <button class={classstatete} onClick={(
                        ) => {
                            setClassstatepop('courses-btn-pop')
                            setClassstateds('courses-btn-ds')
                            setClassstatefi('courses-btn-fi')
                            setClassstatema('courses-btn-ma')
                            setClassstatega('courses-btn-ga')
                            setClassstatete('courses-btn-te-click')
                            setActive('technology')
                        }}>Technology</button>
                        <button class={classstatefi} onClick={(
                        ) => {
                            setClassstatepop('courses-btn-pop')
                            setClassstateds('courses-btn-ds')
                            setClassstatete('courses-btn-te')
                            setClassstatema('courses-btn-ma')
                            setClassstatega('courses-btn-ga')
                            setClassstatefi('courses-btn-fi-click')
                            setActive('finance')
                        }}> Finance</button >
                        <button class={classstatema} onClick={(
                        ) => {
                            setClassstatepop('courses-btn-pop')
                            setClassstateds('courses-btn-ds')
                            setClassstatete('courses-btn-te')
                            setClassstatefi('courses-btn-fi')
                            setClassstatega('courses-btn-ga')
                            setClassstatema('courses-btn-ma-click')
                            setActive('management')
                        }}> Management</button >
                        <button class={classstatega} onClick={(

                        ) => {
                            setClassstatepop('courses-btn-pop')
                            setClassstateds('courses-btn-ds')
                            setClassstatete('courses-btn-te')
                            setClassstatefi('courses-btn-fi')
                            setClassstatema('courses-btn-ma')
                            setClassstatega('courses-btn-ga-click')
                            setActive('gaming')
                        }}> Gaming</button >
                    </div >
                    <div id="course-block">
                        <ul id="different-course-block">
                                {carddata.map(i => <Card imglink={i.imglink} text={i.text}
                                    explorelink={i.explorelink} progname={i.progname} isActive={active} isPopular={i.isPopular}></Card>)}
                        </ul>
                        </div>
        </div>
    )
}

export default Coursecard;