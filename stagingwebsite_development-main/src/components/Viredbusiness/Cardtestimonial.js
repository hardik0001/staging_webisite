function Cardtestimonial(props) {
    return (<>
        <div class="vb-achievements-testimonial-card">
            <div class="vb-achievements-testimonial-row1">
                <img class="vb-achievements-testimonial-row1-img" src={props.learnerimg}></img>
                <div class="vb-achievements-testimonial-row1-col" >
                    <p class="vb-achievements-testimonial-row1-col-text1">{props.learnername}</p>
                    <h1 class="vb-achievements-testimonial-row1-col-text2">{props.learnertitle}</h1 >
                </div>
            </div>
            <div class="vb-achievements-testimonial-row2">
                <p>{props.learnermsg}</p>
            </div>
            <div class="vb-achievements-testimonial-row3">
                <p>Investigation Specialist at <a href="#" style={{ textDecoration: 'none' }}>Amazon</a></p>
            </div>
        </div>
    </>)
}
export default Cardtestimonial;