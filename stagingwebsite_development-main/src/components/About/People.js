import linkedinimg from '../../assets/img/linkedinicon.svg';
function People(props) {
    return (<>
        <div class="ab-lifeatvired-people-cards">
            <img class="ab-lifeatvired-people-cards-img" src={props.peopimg}></img>
            <div class="ab-lifeatvired-people-cards-details">
                <p class="ab-lifeatvired-people-cards-name">{props.peopname}</p>
                <p class="ab-lifeatvired-people-cards-desig">{props.peopdesig}</p>
                <p class="ab-lifeatvired-people-cards-feed">{props.testi1}<br />{props.testi2}</p>
                <a class="ab-lifeatvired-people-cards-linkedin" href={props.linkedinlink}><img src={linkedinimg}></img>View Linkedin Profile</a>
            </div>
        </div>
    </>)
}
export default People;