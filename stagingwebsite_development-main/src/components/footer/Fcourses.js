import Fcoursetext from "./Fcoursetext";

function Fcourses(props) {
    let textdata = props.text0
    return (<>
        <div class="col-3" id="heading-footer-row-2">
            <h5>{props.title}</h5>
            {textdata.map(i =><Fcoursetext textval={i}></Fcoursetext> )}
        </div>
    </>);
}
export default Fcourses;