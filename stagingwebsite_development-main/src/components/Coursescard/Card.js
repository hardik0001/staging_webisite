function Card(props) {
    if (props.isActive == "popular") {
        if (props.isPopular == 1) {
            return (<>
                <li class="ccards">
                    <div id="whole-one-course-block">
                        <div id="image-course-block">
                            <img src={props.imglink} />
                        </div>
                        <div id="second-text-block">
                            <p id="first-text-below-image">{props.text[0]}</p>
                            <p id="second-text-below-image">{props.text[1]}</p>
                        </div>
                        <p id="third-text-below-image">{props.text[2]}</p>
                        <p id="fourth-text-below-image">{props.text[3]}</p>
                        <p id="fifth-text-below-image">{props.text[4]}</p>
                        <div id="courses-sixth-block">
                            <p id="sixth-first-text">{props.text[5]}&nbsp;</p>
                            <p id="sixth-second-text">{props.text[6]}</p>
                            
                        </div>
                        <div id ="courses-sixth-block">
                        <button id="button-explore-program"><a href={props.explorelink}>Explore Program</a></button>
                        </div>
                    </div>
                </li>
            </>)

        }
    }
    else if (props.isActive == props.progname) {
        return (<>
            <li class="ccards">
                <div id="whole-one-course-block">
                    <div id="image-course-block">
                        <img src={props.imglink} />
                    </div>
                    <div id="second-text-block">
                        <p id="first-text-below-image">{props.text[0]}</p>
                        <p id="second-text-below-image">{props.text[1]}</p>
                    </div>
                    <p id="third-text-below-image">{props.text[2]}</p>
                    <p id="fourth-text-below-image">{props.text[3]}</p>
                    <p id="fifth-text-below-image">{props.text[4]}</p>
                    <div id="courses-sixth-block">
                        <p id="sixth-first-text">{props.text[5]}</p>
                        <p id="sixth-second-text">{props.text[6]}</p>
                    </div>
                    <button id="button-explore-program"><a href={props.explorelink}>Explore Program</a></button>
                </div>
            </li>
        </>)
    }
    else {
        return (<></>)
    }

}
export default Card;