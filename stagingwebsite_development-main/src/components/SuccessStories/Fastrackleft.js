function Fastrackleft(props) {
    return (<>
            <div class="ss-fastrack-start-row1">
                <div class="ss-fastrack-start-row1-col1">
                    <p class="ss-fastrack-start-row1-col1-text1">{props.fslefttext1}</p>
                    <p class="ss-fastrack-start-row1-col1-text2">{props.fslefttext2}</p>
                </div>
                <div class="ss-fastrack-start-row1-col2">
                    <img class="ss-fastrack-start-row1-col2-img" src={props.fslefturl}></img>
                </div>
                <div class="ss-fastrack-start-row1-col3"></div>
                <div class="ss-fastrack-start-row1-col4"></div>
            </div>
    </>)
}
export default Fastrackleft;