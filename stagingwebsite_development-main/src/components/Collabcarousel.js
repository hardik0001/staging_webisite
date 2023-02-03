import React from 'react';
// import Collabrationcarousel from '../assets/css/collabcarousel.css';
// import aws from '../assets/img/aws.png'
// import codeacademy from '../assets/img/codeacademy.png'
// import columbia from '../assets/img/columbia.png'
// import geogriatech from '../assets/img/georgiatech.png'
// import mitopenlearning from '../assets/img/mitopenlearning.png'
// import insead from '../assets/img/insead.png'
// import edxharward from '../assets/img/edxharward.png'
import Academicpartner from './CollabCarousel/Academicpartner';

function Collabcarousel(props) {
    // const collabdata = [
    //     {
    //         text0: ['OUR PROGRAMS', 'High-growth programs', 'We design and deliver industry-relevant programs with access to top global universities, to create the change makers of tomorrow'],
    //         images :[codeacademy,aws,columbia,geogriatech,mitopenlearning,insead,edxharward]
    //     },
    //     // {
    //     //     text0: ['OUR PARTNERSHIPS', 'Our academic partners', 'We design and deliver industry-relevant programs with access to top global universities, to create the change makers of tomorrow'],
    //     //     images :[codeacademy,aws,columbia,geogriatech,mitopenlearning,insead,edxharward]
    //     // }
    // ]
    return (<>
        {
        <Academicpartner text1="OUR PROGRAMS" text2="High-growth programs" text3="We design and deliver industry-relevant programs with access to top global universities, to create the change makers of tomorrow"></Academicpartner>
        }
    </>);
}
export default Collabcarousel;