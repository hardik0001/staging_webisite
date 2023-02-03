import '../../assets/css/inthenews.css';
function Announcements(props) {
    return (<>
        <div class="news-announcements-row4-block-row1-hide" style={{display:'none'}} id={props.announid}>
            <p class="news-announcements-row4-block-row1-col1">{props.annountext}</p>
            <a href={props.readmoreurl} class="news-announcements-row4-block-row1-col2">Read More</a>
        </div>
    </>)
}
export default Announcements;