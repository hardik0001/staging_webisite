function Hidenew(props) {
    return (<>
        <div class="inthenews-block-row5-block-cards" id={props.hideid}style={{display:'none'}}>
            <div class="inthenews-block-row5-block-cards-inside">
                <img class="inthenews-block-row5-block-cards-img" src={props.hideimg}></img>
                <p class="inthenews-block-row5-block-cards-text1">{props.hideheadline}</p>
                <p class="inthenews-block-row5-block-cards-text2">{props.hidetext}</p>
                <p class="inthenews-block-row5-block-cards-text3">{props.hidedate}</p>
                <a class="inthenews-block-row5-block-cards-text4" href="">Read More</a>
            </div>
        </div>
    </>)
}
export default Hidenew;