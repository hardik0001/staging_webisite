function Newschannel(props) {
    return (<>
        <div class="inthenews-block-row4-col1">
            <img class="inthenews-block-row4-col1-img" src={props.newimg}></img>
            <p class="inthenews-block-row4-col1-text2">{props.text2}</p>
            <p class="inthenews-block-row4-col1-text3">{props.text3}</p>
            <p class="inthenews-block-row4-col1-text4">{props.text4}</p>
            <a class="inthenews-block-row4-col1-text5" href={props.newurl}>Read more</a>
        </div>
    </>)
}
export default Newschannel;