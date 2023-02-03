function Ssyoutube(props) {
    return (<>
        <div class="ss-youtube-col1">
            <p class="ss-youtube-col1-text1">{props.ssyoutubetext1}</p>
            <p class="ss-youtube-col1-text2">{props.ssyoutubetext2}</p>
            <p class="ss-youtube-col1-text3">{props.ssyoutubetext3}</p>
        </div>
        <div class="ss-youtube-col2">
            <iframe class="ss-youtube-col2-video" height="550" src="https://www.youtube.com/embed/tt0MnHeDchg" title="From teaching to pursuing a career in AI & Data | Minu Raphael | Hero Vired" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        </div>
    </>)
}
export default Ssyoutube;