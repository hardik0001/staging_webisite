import "./../../assets/css/App.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../Header";
import First_Carousel from "../First_Carousel";
import Learnersuccess from "../Learnersuccess";
import Ccarousel from "../Ccarousel";
import Collabcarousel from "../Collabcarousel";
import Coursecard from "../Coursecard";
import Toptier from "../Toptier";
import Consultation from "../Consultation";
import Footer from "../Footer";
import News from "../News";
import Testimonial from "../Testimonial";
import Fixedtextheader from "../Fixedtextheader";
function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Fixedtextheader></Fixedtextheader>
      <First_Carousel></First_Carousel>
      <Learnersuccess></Learnersuccess>
      <Ccarousel></Ccarousel>
      <Collabcarousel></Collabcarousel>
      <Coursecard></Coursecard>
      <Toptier></Toptier>
      <Consultation></Consultation>
      <Testimonial></Testimonial>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default Home;
