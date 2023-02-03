import '../assets/css/contact.css';
function Contact() {
    let contactcallvalidation = () => {
        document.getElementById('message-contact-validation').id = 'message-contact-after-validation'
        document.getElementById("message-contact-after-validation").innerHTML = "Thank you for your message. It has been sent."  
        }
    return (
        <div class="outermost-section">
            <div class="first-inside-outermost">
                <div class="second-inside-outermost">
                    <div class="inside-first-col-contact">
                        <h1 class="first-col-contact-text1">CONTACT US</h1>
                        <h1 class="first-col-contact-text2">Reach out to us</h1>
                        <h1 class="first-col-contact-text3">Give us a call or drop us an email, we will reach out to you promptly.</h1>
                        <div class="first-col-contact-text4">
                            <a href="tel:18003093939"><iconify-icon icon="feather:phone-call" class="callme-icon" id="call-mail-contact"></iconify-icon>1800309393</a>
                            <a href="mailto:hello@herovired.com" target="_self"><iconify-icon icon="feather:mail" class="callme-icon" id="call-mail-contact"></iconify-icon>hello@herovired.com</a>
                        </div>
                        <div class="first-col-contact-text5">
                            <p>BUSINESS RELATED QUERIES</p>
                            <p>PRESS RELATED QUERIES</p>
                        </div>
                        <div class="first-col-contact-text6">
                            <a href="mailto:enterprise@herovired.com" target="_self">enterprise@herovired.com</a>
                            <a href="mailto:press@herovired.com" target="_self">press@herovired.com</a>
                        </div>
                        <div class="first-col-contact-lasttext">
                            <div class="contact-lasttext-col1">
                                <p class="contact-lasttext-col1-text1">DELHI OFFICE</p>
                                <p class="contact-lasttext-col1-text2">1st Floor ,Plot No 2, Lado Sarai, Qutab Institutional Area, Delhi 1100302<br /><br /></p>
                                <a class="contact-lasttext-col1-text3" href="https://www.google.com/maps/place/Hero+Vired/@28.5255568,77.1907396,15z/data=!4m5!3m4!1s0x0:0x3537d2d0fe9aa05b!8m2!3d28.5255568!4d77.1907396">View in maps</a>
                            </div>
                            <div class="contact-lasttext-col2">
                                <p class="contact-lasttext-col1-text1">BANGALORE OFFICE</p>
                                <p class="contact-lasttext-col1-text2">No. 357, San Diego Building, 4th floor, 1st Block Koramangala, Extension, Bengaluru, Karnataka 5600342</p>
                                <a class="contact-lasttext-col1-text3" href="https://www.google.com/maps/place/Hero+Vired/@12.9285832,77.6316108,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae150a2d22fba3:0x70128713885bee91!8m2!3d12.9285832!4d77.6337995?shorturl=1">View in maps</a>
                            </div>
                        </div>

                    </div>
                    <div class="inside-second-col-contact">
                        <h1 class="second-col-contact-text1">Drop a message below!</h1>
                        <div class="second-col-contact-text2">Wherever you are in your career, Hero Vired will help you achieve your goals.</div>
                        <div class="contact-us-form">
                            <label for="firstname">First Name</label><br />
                            <input type="text" class="firstname-contact-form" id="firstname" /><br />
                            <label for="lastname">Last Name</label><br />
                            <input type="text" class="lastname-contact-form" id="lastname" /><br />
                            <div class="email-block-contact">
                                <label for="email">Email ID</label><br />
                                <input type="email" class="email-contact-form" id="email" placeholder="name@example.com" /><br />
                            </div>
                            <div class="message-block-contact">
                                <label for="message">Message</label><br />
                                <textarea class="message-contact-form" id="message"></textarea><br />
                            </div>
                            <button class="continue-contact-form" onClick={contactcallvalidation}>Continue</button>
                            <p class="terms-condition-contact-form">By filling this form, you agree to our <a href="https://staging.herovired.com/privacy-policy/">Terms and Conditions</a>
                            </p>
                            <p id ="message-contact-validation"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;