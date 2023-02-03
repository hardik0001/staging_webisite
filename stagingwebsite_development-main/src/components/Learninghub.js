import '../assets/css/learninghub.css';
import resetimg from '../assets/img/resetimg.svg'
import Programbutton from './hublearning/Programbutton';
function Learninghub() {

    const prgramname = [
        {
            prgname: 'Career Advice'
        },
        {
            prgname: 'Data Science'
        },
        {
            prgname: 'Finance'
        },
        {
            prgname: 'Fintech'
        },
        {
            prgname: 'Gaming'
        },
        {
            prgname: 'Interview Guides'
        },
        {
            prgname: 'Management'
        },
        {
            prgname: 'Technology'
        },
    ]
    return (<>
        <section class="learning-top" id="top-img">
            <div class="top-box">
                <div class="top-head-box">
                    <h1 class="text-top-head-box">
                        <p>Read.<br />
                            Watch.<br />
                            Re-Wire.<br />
                            Repeat.</p>
                    </h1>

                </div>
                <div class="top-head-box-right">
                    <div class="top-card">
                        <div class="top-title">
                            Explore personlised content
                            <br />
                            based on domain
                        </div>
                        <div class="top-box-button">
                            <div class="button-top-flex">
                                {prgramname.map(i => <Programbutton prgname={i.prgname}></Programbutton>)}
                            </div>
                        </div>
                        <div class="explore-content-button">
                            <a class="but-explore" href="#lh-learninghubblogs">Explore</a>
                            <button class="but-reset">
                                <img src={resetimg}></img>Reset
                            </button>
                        </div>
                        <div class="circle">
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <section class="learning_hub" id="lh-learninghubblogs">
            <div>
                <div class="blog_head">
                    BLOGS AND ARTICLES
                </div>
                <div id="text-tittle" class="tittle">
                    Discover stories, thinking, and expertise from writers around the globe
                </div>
            </div>
            <div class="learning-cards-dimension">
                <div class="card-flex">
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/04/The-7-most-in-demand-technical-skills-in-2022.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <button class="learning-body-head">
                                    <a href="https://staging.herovired.com/category/technology/"
                                        class="learning-body-head-text">Technology</a>
                                </button>
                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/cloud-vs-devops-what-to-know-for-your-next-career-move/"
                                        class="learning-text">Cloud vs. DevOps: What to know for your next career move
                                    </a>
                                </div>
                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">10 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/11/The-Key-Roles-and-Responsibilities-of-a-Data-Engineer.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <button class="learning-body-head">
                                    <a href="https://staging.herovired.com/category/data-science/"
                                        class="learning-body-head-text">Data Science</a>
                                </button>
                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/the-key-roles-and-responsibilities-of-a-data-engineer/"
                                        class="learning-text">The Key Roles and Responsibilities of a Data Engineer
                                    </a>
                                </div>
                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">9 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/11/The-Changing-Landscape-of-the-Gaming-Industry.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <button class="learning-body-head">
                                    <a href="https://staging.herovired.com/category/gaming/"
                                        class="learning-body-head-text">Gaming</a>
                                </button>
                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/the-changing-landscape-of-the-gaming-industry/"
                                        class="learning-text">The Changing Landscape of the Gaming Industry
                                    </a>
                                </div>
                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">08 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/11/How-to-Ace-a-Supply-Chain-Management-Interview.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <div>
                                    <button class="learning-body-head">
                                        <a href="https://staging.herovired.com/category/management/"
                                            class="learning-body-head-text">Management</a>
                                    </button>
                                </div>
                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/how-to-ace-a-supply-chain-management-interview/"
                                        class="learning-text">How to Ace a Supply Chain Management Interview!
                                    </a>
                                </div>
                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">07 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-flex">
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/04/The-7-most-in-demand-technical-skills-in-2022.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <button class="learning-body-head">
                                    <a href="https://staging.herovired.com/category/technology/"
                                        class="learning-body-head-text">Technology</a>
                                </button>

                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/cloud-vs-devops-what-to-know-for-your-next-career-move/"
                                        class="learning-text">Cloud vs. DevOps: What to know for your next career move
                                    </a>
                                </div>

                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">10 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/11/The-Key-Roles-and-Responsibilities-of-a-Data-Engineer.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">


                                <button class="learning-body-head">
                                    <a href="https://staging.herovired.com/category/data-science/"
                                        class="learning-body-head-text">Data Science</a>
                                </button>


                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/the-key-roles-and-responsibilities-of-a-data-engineer/"
                                        class="learning-text">The Key Roles and Responsibilities of a Data Engineer
                                    </a>
                                </div>

                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">9 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/11/The-Changing-Landscape-of-the-Gaming-Industry.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <button class="learning-body-head">
                                    <a href="https://staging.herovired.com/category/gaming/"
                                        class="learning-body-head-text">Gaming</a>
                                </button>


                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/the-changing-landscape-of-the-gaming-industry/"
                                        class="learning-text">The Changing Landscape of the Gaming Industry
                                    </a>
                                </div>

                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">08 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learning-box">
                        <div class="learning-card">
                            <div class="learning-img">
                                <img src="https://staging.herovired.com/wp-content/uploads/2022/11/How-to-Ace-a-Supply-Chain-Management-Interview.webp"
                                    alt="" />
                            </div>
                            <div class="learning-body">
                                <div>
                                    <button class="learning-body-head">
                                        <a href="https://staging.herovired.com/category/management/"
                                            class="learning-body-head-text">Management</a>
                                    </button>
                                </div>

                                <div class="learning-main-body-text">
                                    <a href="https://staging.herovired.com/learning-hub/blogs/how-to-ace-a-supply-chain-management-interview/"
                                        class="learning-text">How to Ace a Supply Chain Management Interview!
                                    </a>
                                </div>

                                <div class="learning-footer-body-text">
                                    <span class="learning-footer-date-body-text">07 NOV 2022
                                    </span>
                                    <span class="mid-buttons">
                                        <img src="../images/Rectangle 313.png" alt="" />
                                    </span>
                                    <span class="learning-footer-time-body-text">8 MIN READ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer-main">
            <div class="footer-learn-box">

                <div>
                    <div class="footer-blog-head">
                        Ebooks, Infographics & Downloadable
                    </div>
                    <div id="" class="footer-tittle ">
                        <span class="footer-main-tittle">Ebooks, guides, templates, and more to help you grow</span>
                    </div>
                </div>

                <div class="footer-card-flex ">
                    <div class="footer-card-flex-items">
                        <div class="footer-learning-box">
                            <div class="learning-card">
                                <div class="footer-learning-img">
                                    <img src="https://staging.herovired.com/wp-content/uploads/2022/08/resource-image-01.jpg"
                                        alt="" />
                                </div>
                                <div class="footer-learning-body">
                                    <button class="footer-learning-body-head">
                                        <a href="https://staging.herovired.com/category/technology/"
                                            class="learning-body-head-text">Data science</a>
                                    </button>

                                    <div class="learning-main-body-text">
                                        <a href="https://staging.herovired.com/learning-hub/blogs/cloud-vs-devops-what-to-know-for-your-next-career-move/"
                                            class="learning-text">A walkthrough mitacs globalink Research Internship 5
                                        </a>
                                    </div>

                                    <div class="footer-learning-footer-body-text">
                                        <span class="learning-footer-date-body-text">INFOGRAPHICS
                                        </span>
                                        <span class="mid-buttons">
                                            <img src="../images/Rectangle 313.png" alt="" />
                                        </span>
                                        <span class="learning-footer-time-body-text">12MB
                                        </span>
                                    </div>
                                    <div class="footer-download">
                                        <a href="#">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-learning-box">
                            <div class="learning-card">
                                <div class="footer-learning-img">
                                    <img src="https://staging.herovired.com/wp-content/uploads/2022/08/resource-image-05.jpg"
                                        alt="" />
                                </div>
                                <div class="footer-learning-body">
                                    <button class="footer-learning-body-head">
                                        <a href="https://staging.herovired.com/category/technology/"
                                            class="learning-body-head-text">Data science</a>
                                    </button>

                                    <div class="learning-main-body-text">
                                        <a href="https://staging.herovired.com/learning-hub/blogs/cloud-vs-devops-what-to-know-for-your-next-career-move/"
                                            class="learning-text">A walkthrough mitacs globalink Research Internship 4
                                        </a>
                                    </div>

                                    <div class="footer-learning-footer-body-text">
                                        <span class="learning-footer-date-body-text">INFOGRAPHICS
                                        </span>
                                        <span class="mid-buttons">
                                            <img src="../images/Rectangle 313.png" alt="" />
                                        </span>
                                        <span class="learning-footer-time-body-text">12MB
                                        </span>
                                    </div>
                                    <div class="footer-download">
                                        <a href="#">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-learning-box">
                            <div class="learning-card">
                                <div class="footer-learning-img">
                                    <img src="https://staging.herovired.com/wp-content/uploads/2022/08/resource-image-04.jpg"
                                        alt="" />
                                </div>
                                <div class="footer-learning-body">
                                    <button class="footer-learning-body-head">
                                        <a href="https://staging.herovired.com/category/technology/"
                                            class="learning-body-head-text">Data science</a>
                                    </button>

                                    <div class="learning-main-body-text">
                                        <a href="https://staging.herovired.com/learning-hub/blogs/cloud-vs-devops-what-to-know-for-your-next-career-move/"
                                            class="learning-text">A walkthrough mitacs globalink Research Internship 3
                                        </a>
                                    </div>

                                    <div class="footer-learning-footer-body-text">
                                        <span class="learning-footer-date-body-text">INFOGRAPHICS
                                        </span>
                                        <span class="mid-buttons">
                                            <img src="../images/Rectangle 313.png" alt="" />
                                        </span>
                                        <span class="learning-footer-time-body-text">12MB
                                        </span>
                                    </div>
                                    <div class="footer-download">
                                        <a href="#">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-learning-box">
                            <div class="learning-card">
                                <div class="footer-learning-img">
                                    <img src="https://staging.herovired.com/wp-content/uploads/2022/08/resource-image-03.jpg"
                                        alt="" />
                                </div>
                                <div class="footer-learning-body">
                                    <button class="footer-learning-body-head">
                                        <a href="https://staging.herovired.com/category/technology/"
                                            class="learning-body-head-text">Data science</a>
                                    </button>

                                    <div class="learning-main-body-text">
                                        <a href="https://staging.herovired.com/learning-hub/blogs/cloud-vs-devops-what-to-know-for-your-next-career-move/"
                                            class="learning-text">A walkthrough mitacs globalink Research Internship 2
                                        </a>
                                    </div>

                                    <div class="footer-learning-footer-body-text">
                                        <span class="learning-footer-date-body-text">INFOGRAPHICS
                                        </span>
                                        <span class="mid-buttons">
                                            <img src="../images/Rectangle 313.png" alt="" />
                                        </span>
                                        <span class="learning-footer-time-body-text">12MB
                                        </span>
                                    </div>
                                    <div class="footer-download">
                                        <a href="#">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="views">
                        <a href="#" class="footer-view">View all</a>
                    </div>

                </div>

            </div>

        </section>
    </>)
}
export default Learninghub;