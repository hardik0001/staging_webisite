function Lssuccessstories(props) {
    return (<>
        <div class="col-1" id="image-learner-success">
            <img src={props.lsimg} />
        </div>
        <div class="col" style={{ color: props.textcolor }}>
            <p id="number-learner-success" style={{ color: props.textcolor }}>{props.lsvalue}</p>
            <p id="text-learner-success" style={{ color: props.textcolor }}>{props.lstext}</p>
        </div></>)
}
export default Lssuccessstories;