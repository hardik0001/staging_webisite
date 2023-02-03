
import '../../assets/css/about.css'
function Advisory(props) {
    return (<>
        <div class="ab-advisory-images-card">
            <img class="ab-advisory-images-card-img" src={props.advimg}></img>
            <p class="ab-advisory-images-card-name">{props.advname}</p>
            <p class="ab-advisory-images-card-designation">{props.advdesig}</p>
            <p class="ab-advisory-images-card-company">{props.advcomp}</p>
        </div>
    </>)
}
export default Advisory;