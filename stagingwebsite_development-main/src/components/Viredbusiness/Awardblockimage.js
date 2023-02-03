function Awardblockimage(props) {
    return (<>
        <div class="individual-awards-image-block">
            <img src={props.awardimggurl}></img>
            <p class="individual-awards-image-block-text1">{props.awardtext1}</p>
            <p class="individual-awards-image-block-text2">{props.awardtext2}</p>
        </div>
    </>)
}
export default Awardblockimage;