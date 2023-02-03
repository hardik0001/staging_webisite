import hikeup from '../../assets/img/hikeup.svg';

function Sstestimonialcards(props)
{
    return(<>
                        <div class="ss-testimonial-row4-cards">
                        <div class="ss-testimonial-cards-row1">
                            <div class="ss-testimonial-cards-row1-col1">
                                <div class="ss-testimonial-cards-row1-col1-content">
                                <img src={hikeup}></img>
                                <p>{props.learnerhike} Hike</p>
                                </div>
                            </div>
                            <img class="ss-testimonial-cards-row1-col2" src={props.compimg}></img>
                        </div>
                        <div class="ss-testimonial-cards-row2">
                            <img class="ss-testimonial-cards-row2-img" src={props.learnerimage}></img>
                            <p class="ss-testimonial-cards-row2-text1">{props.learnername}</p>
                            <p class="ss-testimonial-cards-row2-text2">{props.learnertitle}</p>
                        </div>
                        <div class="ss-testimonial-cards-row3">
                            <p>{props.learnermsg}</p>
                        </div>
                    </div>
    </>)
}
export default Sstestimonialcards;