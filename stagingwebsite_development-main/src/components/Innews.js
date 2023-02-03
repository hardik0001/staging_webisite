import '../assets/css/inthenews.css';
import downicon from '../assets/img/chevron-down.svg'
import upicon from '../assets/img/chevron-up.svg'
import Announcements from './Inthenews/Announcement';
import Hidenew from './Inthenews/Hidenew';
import Newschannel from './Inthenews/Newschannel';
function Innews() {
    const hidedata = [
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-1"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-2"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-3"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-4"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-5"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-6"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-7"
        },
        {
            hideimg: "https://herovired.com/wp-content/uploads/2023/01/Frame-1307-1.png",
            hideheadline: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidetext: "Akshay Munjal talks to Digit magazine on the evolving industry of gaming and eSports in India.",
            hidedate: "January 23, 2023",
            hideid: "hide-block-8"
        }
    ]
    const newsdata = [
        {
            newimg: "https://herovired.com/wp-content/uploads/2022/07/outlook-business.webp",
            text2: "Outlook Business",
            text3: "In a tete-a-tete with Outlook Business, our Founder & CEO, Akshay Munjal, shares his passion for sculpting and lessons learned from this craft",
            text4: "July 5, 2022",
            newurl: "https://www.outlookbusiness.com/cest-la-vie-6/pursuit-of-happiness-23/made-of-clay-6545"
        },
        {
            newimg: "https://herovired.com/wp-content/uploads/2022/06/Forbes.webp",
            text2: "Forbes",
            text3: "Forbes profiles Hero Vired, the company's objective and vision, and their foray into the edtech space.",
            text4: "June 22, 2022",
            newurl: "https://www.forbesindia.com/article/take-one-big-story-of-the-day/why-the-5-billion-hero-group-wants-a-pie-of-indias-booming-edtech-space/67575/1"
        }
    ]
    const newannouncemnetdata = [
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-1"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-2"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-3"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-4"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-5"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-6"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-7"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-8"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-9"
        },
        {
            readmoreurl: "https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx",
            annountext: "Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources",
            announid: "read-more-block-10"
        }
    ]
    let showhideawardimage = (event) => {
        let displayvalue = document.getElementById("lastimage-awardblock-1").style.display
        if (displayvalue == 'none') {
            document.getElementById("lastimage-awardblock-1").style.display = 'block'
            document.getElementById("lastimage-awardblock-2").style.display = 'block'
            document.getElementById("lastimage-awardblock-3").style.display = 'block'
            document.getElementById("lastimage-awardblock-4").style.display = 'block'
            document.getElementById("show-click").innerHTML = "Show less" + "<img src=" + upicon + "></img>"
        }
        else {
            document.getElementById("lastimage-awardblock-1").style.display = 'none'
            document.getElementById("lastimage-awardblock-2").style.display = 'none'
            document.getElementById("lastimage-awardblock-3").style.display = 'none'
            document.getElementById("lastimage-awardblock-4").style.display = 'none'
            document.getElementById("show-click").innerHTML = "Show More" + "<img src=" + downicon + "></img>"
        }
    }
    let showhideannouncement = (event) => {
        console.log(document.getElementById("read-more-block-1").style.display)
        let showmorevalue = document.getElementById("read-more-block-1").style.display
        let countshowmore = document.getElementsByClassName("news-announcements-row4-block-row1-hide").length
        console.log(countshowmore)
        if (showmorevalue == 'none') {
            for (let z = 1; z <= countshowmore; z++) {
                let tempid = "read-more-block-" + z
                document.getElementById(tempid).style.display = 'flex'
            }
            document.getElementById("show-more-announcement").innerHTML = "Show less" + "<img src=" + upicon + "></img>"
        }
        else {
            for (let z = 1; z <= countshowmore; z++) {
                let tempid = "read-more-block-" + z
                document.getElementById(tempid).style.display = 'none'
            }
            document.getElementById("show-more-announcement").innerHTML = "Show More" + "<img src=" + downicon + "></img>"
        }
    }
    let showhideinthenews = (event) => {
        let collections = document.getElementsByClassName("inthenews-block-row5-block-cards").length
        for (let x = 1; x <= collections; x++) {
            let idcreation = "hide-block-" + x
            let hidedisplayvalue = document.getElementById(idcreation).style.display
            if (hidedisplayvalue == 'none') {
                document.getElementById(idcreation).style.display = 'block'
                document.getElementById("inthenewsshow").innerHTML = "Show less" + "<img src=" + upicon + "></img>"
            }
            else {
                document.getElementById(idcreation).style.display = 'none'
                document.getElementById("inthenewsshow").innerHTML = "Show More" + "<img src=" + downicon + "></img>"
            }
        }
    }
    return (<>
    <div class="outermost-news-top-stories">
        <div class="inside-news-top-stories">
            <div class="news-top-stories">
                <a class="news-top-stories-text1" href="https://www.financialexpress.com/brandwagon/hero-vired-partners-with-nodwin-gaming-to-launch-a-certificate-program-in-gaming-and-esports/2650731/?utm_source=Facebook&utm_medium=FB-Gaming-ElClasico&utm_content=vired-for-business&utm_campaign=FB-Gaming-ElClasico&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hKO5ZdoSV7bX7sA84gfvMOdGMAgnHZMeIM-MY0StUFs1cRcipBJhhBoCoPwQAvD_BwE">TOP STORIES</a>
                <a class="news-top-stories-text2" href="https://www.financialexpress.com/brandwagon/hero-vired-partners-with-nodwin-gaming-to-launch-a-certificate-program-in-gaming-and-esports/2650731/?utm_source=Facebook&utm_medium=FB-Gaming-ElClasico&utm_content=vired-for-business&utm_campaign=FB-Gaming-ElClasico&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hKO5ZdoSV7bX7sA84gfvMOdGMAgnHZMeIM-MY0StUFs1cRcipBJhhBoCoPwQAvD_BwE">Hero Vired partners with NODWIN Gaming to launch a certificate program in gaming and Esports</a>
                <a class="news-top-stories-text3" href="https://www.financialexpress.com/brandwagon/hero-vired-partners-with-nodwin-gaming-to-launch-a-certificate-program-in-gaming-and-esports/2650731/?utm_source=Facebook&utm_medium=FB-Gaming-ElClasico&utm_content=vired-for-business&utm_campaign=FB-Gaming-ElClasico&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hKO5ZdoSV7bX7sA84gfvMOdGMAgnHZMeIM-MY0StUFs1cRcipBJhhBoCoPwQAvD_BwE">As per the company, the program aims to be instructor-led and will emphasise practical components such as integrated mini-projects, hands-on workshops</a>
            </div>
        </div>
    </div>
        <div class="awards-block">
            <p class="text1-awards-block">AWARDS & ACCOLADES</p>
            <p class="text2-awards-block">Achieving new milestones</p>
            <p class="text3-awards-block">Our pathbreaking work has won several awards and accolades, strengthening our commitment to reimagining the Indian educational landscape</p>
            <div class="awards-image-block">
                {/* {
                awardimagedata.map(i => <Awardblockimage awardimgurl={i.awardimgurl} awardtext1={i.awardtext1} awardtext2={i.awardtext2}></Awardblockimage>)
            } */}
                <div class="individual-awards-image-block">
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png"></img>
                    <p class="individual-awards-image-block-text1">Indian Education Award</p>
                    <p class="individual-awards-image-block-text2">Edtech Startup of the Year</p>
                </div>
                <div class="individual-awards-image-block">
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1232-1-e1671607992823.png"></img>
                    <p class="individual-awards-image-block-text1">Education Innovation Award</p>
                    <p class="individual-awards-image-block-text2">Best Personalised Learning Programs</p>
                </div>
                <div class="individual-awards-image-block">
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/award-image.png"></img>
                    <p class="individual-awards-image-block-text1">Brand Bharat Awards- Gold</p>
                    <p class="individual-awards-image-block-text2">Best Use of PR</p>
                </div>
                <div class="individual-awards-image-block">
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                    <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                    <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                </div>
                <div class="individual-awards-image-block" id="lastimage-awardblock-1" style={{ display: 'none' }}>
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                    <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                    <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                </div>
                <div class="individual-awards-image-block" id="lastimage-awardblock-2" style={{ display: 'none' }}>
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                    <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                    <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                </div>
                <div class="individual-awards-image-block" id="lastimage-awardblock-3" style={{ display: 'none' }}>
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                    <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                    <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                </div>
                <div class="individual-awards-image-block" id="lastimage-awardblock-4" style={{ display: 'none' }}>
                    <img src="https://staging.herovired.com/wp-content/uploads/2022/09/Frame-1230.png"></img>
                    <p class="individual-awards-image-block-text1">Mark Asia Award</p>
                    <p class="individual-awards-image-block-text2">Brand Launch Campaign of the Year</p>
                </div>
            </div>
            <button class="awards-image-block-lasttext" id="show-click" onClick={showhideawardimage}>Show More<img src={downicon}></img></button>
        </div>
        <div class="inthenews-outermost-block">
            <div class="inthenews-block">
                <p class="text1-awards-block">IN THE NEWS</p>
                <p class="text2-awards-block">Always making the right noise</p>
                <p class="text3-awards-block"></p>
                <div class="inthenews-block-row4">
                    {
                        newsdata.map(i => <Newschannel newimg={i.newimg} text2={i.text2} text3={i.text3} text4={i.text4} newurl={i.newurl}></Newschannel>)
                    }
                </div>
                <div class="inthenews-block-row5">
                    <div class="inthenews-block-row5-block">
                        {
                            hidedata.map(i => <Hidenew hideimg={i.hideimg} hideheadline={i.hideheadline} hidetext={i.hidetext} hidedate={i.hidedate} hideid={i.hideid}></Hidenew>)
                        }
                    </div>
                </div>
                <button class="inthenews-showmore" id="inthenewsshow" onClick={showhideinthenews}>Show More<img src={downicon}></img></button>

            </div>
        </div>
        <div class="outside-news-presskit">
            <div class="news-presskit">
                <div class="news-presskit-col1">
                    <p class="news-presskit-col1-text1">PRESS KIT</p>
                    <p class="news-presskit-col1-text2">Resources for Press</p>
                    <p class="news-presskit-col1-text3">Hear straight from the people who have had the chance to experience our programs first-hand, in their own words</p>
                </div>
                <div class="news-presskit-col2">
                    <p class="news-presskit-col2-text1">Hero Vired Brand Logos</p>
                    <p class="news-presskit-col2-text1">Hero Vired Brand Manual and Guidelines</p>
                    <p class="news-presskit-col2-text1">Spokespersons' photographs</p>
                    <div class="news-presskit-col2-text4-block">
                        <p class="news-presskit-col2-text4-block-col1">Brand Colors</p>
                        <div class="news-presskit-col2-text4-block-col2">
                            <div class="news-presskit-col2-text4-block-col2-block1"></div>
                            <div class="news-presskit-col2-text4-block-col2-block2"></div>
                            <div class="news-presskit-col2-text4-block-col2-block3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="outside-news-announcements">
            <div class="news-announcements">
                <p class="text1-awards-block">ANNOUNCEMENTS</p>
                <p class="text2-awards-block">What's new at Vired</p>
                <p class="text3-awards-block">Stay abreast of the latest developments at Hero Vired</p>
                <div class="news-announcements-row4-block">
                    <div class="news-announcements-row4-block-row1">
                        <p class="news-announcements-row4-block-row1-col1">Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources</p>
                        <a href="https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx" class="news-announcements-row4-block-row1-col2">Read More</a>
                    </div>
                    <div class="news-announcements-row4-block-row1">
                        <p class="news-announcements-row4-block-row1-col1">Hero Vired Strengthens Leadership team; appoints Satyajit Menon as Head of Human Resources</p>
                        <a href="https://herovired.com/wp-content/uploads/2023/01/Hero-Vired-Strengthens-Leadership.docx" class="news-announcements-row4-block-row1-col2">Read More</a>
                    </div>
                    {
                        newannouncemnetdata.map(i => <Announcements readmoreurl={i.readmoreurl} annountext={i.annountext} announid={i.announid}></Announcements>)
                    }
                    <div class="news-showmore-lasttext">
                        <button class="news-announcement-showmore" id="show-more-announcement" onClick={showhideannouncement}>Show More<img src={downicon}></img></button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Innews;