import First_Carousel from "../../assets/css/first_carousel.css";
function Carouselfirst(props) {
  return (
    <>
      <div class="carousel-item active" data-bs-interval="5000">
        <img src={props.img} className="car-img"></img>
        <div class="carousel-content">
          <p id="first-text">{props.text1}</p>
          <p id="second-text">{props.text2}</p>
          <p id="third-text">{props.text3}</p>
        </div>
      </div>
    </>
  );
}
export default Carouselfirst;
