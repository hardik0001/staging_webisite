import aws from '../../assets/img/aws.png'
import codeacademy from '../../assets/img/codeacademy.png'
import columbia from '../../assets/img/columbia.png'
import geogriatech from '../../assets/img/georgiatech.png'
import mitopenlearning from '../../assets/img/mitopenlearning.png'
import insead from '../../assets/img/insead.png'
import edxharward from '../../assets/img/edxharward.png'
import '../../assets/css/collabcarousel.css'
function Academicpartner(props){
    return(<>
        <div id="learner-success">
        <div id="inner-learner-success">
            <div id="first-text-learner-success">
                <p>{props.text1}</p>
            </div>
            <div id="second-text-learner-success">
                <p>{props.text2}</p>
            </div>
            <div id="third-text-learner-success">
                <p>{props.text3}</p>
            </div>
            <div id="collab_lastrow_carousel">
                <ul id="collab-carousel-images">
                    <li><img src={aws}/></li>
                    <li><img src={codeacademy}/></li>
                    <li><img src={columbia}/></li>
                    <li><img src={geogriatech}/></li>
                    <li><img src={mitopenlearning}/></li>
                    <li><img src={insead}/></li>
                    <li><img src={edxharward}/></li>
                </ul>
            </div>
        </div>
    </div></>)
}
export default Academicpartner;