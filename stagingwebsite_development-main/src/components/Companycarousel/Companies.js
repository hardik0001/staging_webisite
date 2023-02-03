import CompCarousel from '../../assets/css/compcarousel.css';
import '../../assets/css/learnersuccess.css'
import amazon from '../../assets/img/amazon.png';
import maruti from '../../assets/img/maruti.png';
import pwc from '../../assets/img/pwc.png';
import capgemini from '../../assets/img/capgemini.png'
import ey from '../../assets/img/ey.png';
import walmart from '../../assets/img/walmart.png';
import deutshebank from '../../assets/img/deutshebank.png';
import infosys from '../../assets/img/infosys.png';
import maersk from '../../assets/img/maersk.png';
import citibank from '../../assets/img/citibank.png';

function Companies(props){
    return(<>
    <div id="comp_carousel" style={{backgroundColor:props.bgrndcolor}}>
            <div id="inner_comp_carousel" style={{backgroundColor:props.bgrndcolor}}>
                <div>
                    <h1 id="first-text-learner-success">{props.text1}</h1>
                </div>
                <div id="comp_text1">
                    <p>{props.text2}</p>
                </div>
                <div id="comp_text2">
                <p>{props.text3}
                    </p>
                </div>
                <div id="comp_lastrow_carousel" style={{backgroundColor:props.bgrndcolor}}>
                    <ul id="comp-carousel-images">
                        <li><img src={amazon}/></li>
                        <li><img src={maruti}/></li>
                        <li><img src={pwc}/></li>
                        <li><img src={capgemini}/></li>
                        <li><img src={ey}/></li>
                        <li><img src={walmart}/></li>
                        <li><img src={deutshebank}/></li>
                        <li><img src={infosys}/></li>
                        <li><img src={maersk}/></li>
                        <li><img src={citibank}/></li>
                    </ul>
                </div>
            </div>
        </div>
        </>)
}
export default Companies;