import React from 'react'

export default function Abnews(props) {
    return (
            <div class="ab-media-card">
                <img class="ab-media-card-img" src={props.newsimgurl}></img>
                <p class="ab-media-card-text">{props.newstext}</p>
                <a class="ab-media-card-readmoretext" href={props.newsreadmoreurl}>Read More<img src="data:image/svg+xml,%3Csvg width='7' height='11' viewBox='0 0 7 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.9375 10.3325L5.5625 5.70752L0.9375 1.08252' stroke='%23287CD3' stroke-width='1.15625' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"></img></a>
            </div>
    )
}
