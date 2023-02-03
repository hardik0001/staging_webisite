import Learneruccess from '../../assets/css/learnersuccess.css';


function Textls(props) {
    return (
        <>
            <div class="col" style={{color:props.textcolor}}>
                <p id="number-learner-success" style={{color:props.textcolor}}>{props.nls}</p>
                <p id="text-learner-success" style={{color:props.textcolor}}>{props.tls}</p>
            </div>

        </>
        );
}

export default Textls;