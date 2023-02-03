function Fastrackright(props){
    return(<>
                <div class="ss-fastrack-start-row2">
                <div class="ss-fastrack-start-row2-red"></div>
                <div class="ss-fastrack-start-row2-blank"></div>
                <div class="ss-fastrack-start-row2-col1">
                    <img class="ss-fastrack-start-row2-col2-img" src={props.fsrighturl}></img>
                </div>
                <div class="ss-fastrack-start-row2-col2">
                    <p class="ss-fastrack-start-row2-col2-text1">{props.fsrighttext1}</p>
                    <p class="ss-fastrack-start-row2-col2-text2">{props.fsrighttext2}</p>
                </div>
            </div>
    </>)
}
export default Fastrackright;