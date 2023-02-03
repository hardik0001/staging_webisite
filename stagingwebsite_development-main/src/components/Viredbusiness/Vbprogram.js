import database from '../../assets/img/database.svg';

function Vbprogram(props) {
    return (<>
        <div class="vb-pr-images" style={{backgroundImage: `url(${props.bgurl})`}}>
            <div><img class="vb-pr-icon" src={props.icon}></img></div>
            <div><p class="vb-pr-text">{props.prgname}</p></div>    
        </div>
    </>)
}
export default Vbprogram;