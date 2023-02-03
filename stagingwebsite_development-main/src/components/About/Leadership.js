import '../../assets/css/about.css'
function Leadership(props){
    return(<>
            <div class="ab-leadership-images-card">
            <img class="ab-advisory-images-card-img" src={props.leadershipimg}></img>
            <p class="ab-advisory-images-card-name">{props.leadershipname}</p>
            <p class="ab-advisory-images-card-designation">{props.leadershipdept}</p>
            <p class="ab-advisory-images-card-company"></p>
        </div>
    </>)
}
export default Leadership;