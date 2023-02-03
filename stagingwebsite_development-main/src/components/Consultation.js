import React from 'react';
import Consulationcall from '../assets/css/consultation.css';
import consultation from '../assets/img/consultation.png'
function Consultation() {
    let callvalidation = () => {
       let val = document.getElementById("phone").value
       if(val == ''){
        document.getElementById("details-col-validation").style.backgroundColor ="#F8F8F8"
        document.getElementById("details-col-validation").innerHTML = "One or more fields have an error. Please check and try again."
       }
       else{
        document.getElementById("details-col-validation").innerHTML ="Thank you for your message. It has been sent."
        document.getElementById('details-col-validation').id = 'details-col-fill-validation';       
       }
    }
    let somescript = () => {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            separateDialCode: true,
            preferredCountries: ["in", "us", "uk"]
        })
    }
    return (
        <div class="consultation-container">
            <div class="container" id="inner-consultation-container">
                <div class="row" id="consultation-first-text">
                    <p>LEARNING CONSULTATION</p>
                </div>
                <div class="row" id="consultation-second-text">
                    <p>We are here for you!</p>
                </div>
                <div class="row" id="consultation-third-text">
                    <p>We encourage our learners to ask questions directly and reach out to
                        us anytime</p>
                </div>
                <div class="row">
                    <div class="col" id="img-consultation">
                        <img src={consultation} />
                    </div>
                    <div class="col" id="details-col">
                        <div class="row" id="details-col-text1">Enter your details and our
                            Learning<br></br>Consultant will reach out to you shortly</div>
                        <div class="row" id="details-col-text2">Phone Number</div>
                        <div class="row" id="details-col-text3">
                            <input name="phone" type="text" id="phone" placeholder="9999999999" />
                        </div>
                        <div class="row" id="details-col-text3">
                            <button class="callme-button" onClick={callvalidation}>Call me</button>
                        </div>
                        <div class="row" id="details-col-empty"><p></p></div>
                        <div class="row" id="details-col-validation"><p></p></div>
                        <div class="row" id="details-col-text4">YOU CAN ALSO REACH US AT</div>
                        <div class="row" id="details-col-text4"><a href="tel:1800%20309%203939"><iconify-icon icon="feather:phone-call" class="callme-icon"></iconify-icon>1800
                            309 3939</a></div>
                        <div class="row" id="details-col-text4">
                            <a href="mailto:hello@herovired.com" target="_self"><iconify-icon icon="feather:mail" class="callme-icon"></iconify-icon>hello@herovired.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Consultation;