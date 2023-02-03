function Awardproject(props) {
    return (<>
        <div class="vb-career-journey-block4-col2-row1">
            <div class="vb-career-journey-block4-col2-row1-col1"><img class="vb-career-journey-block4-col2-row1-col1-img" src={props.projectimg}></img></div>
            <div class="vb-career-journey-block4-col2-row1-col2"><strong>
                {props.projecttext}</strong></div>
        </div>
    </>)
}
export default Awardproject;