
import styles from './Cards.module.css'

import Image1 from "../../../assets/SliderPhoto/Gallery01.png";
import Image2 from "../../../assets/SliderPhoto/3.jpg";
import Image3 from "../../../assets/SliderPhoto/electronics.jpg";
import Image4 from "../../../assets/SliderPhoto/jewelery.jpg";
import { Link } from "react-router-dom";
// import logo from "../assest/photos/logo.webp";

const Cards = [
  {
    id: "01",
    image: Image1,
    title: "Womens",
   
  },
  {
    id: "02",
    image: Image2,
    title: "Mens",
  
  },
  {
    id: "03",
    image: Image3,
    title: "Electronics",
  
  },
  {
    id: "04",
    image: Image4,
    title: "Jewelery",
  
  },
];

function CardsGallery() {
  return (
    
        <div  className={styles.container} >
      {Cards.map((card) => (
        <div className={styles.main}>
          <img  className={styles.productImage} src={card.image}  />
          <div>
            <h3>{card.title}</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/">{card.title}</Link>
          </div>
             </div>
      ))}
      </div>
   
  );
}

export default CardsGallery;
