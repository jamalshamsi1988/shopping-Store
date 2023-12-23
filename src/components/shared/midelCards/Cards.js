import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Image1 from "../../../assets/SliderPhoto/Gallery01.png";
import Image2 from "../../../assets/SliderPhoto/3.jpg";
import Image3 from "../../../assets/SliderPhoto/electronics.jpg";
import Image4 from "../../../assets/SliderPhoto/jewelery.jpg";
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
    
        <Card style={{ display:"grid" , gridTemplateColumns:"repeat(4,1fr)" ,
      }} >
      {Cards.map((card) => (
        <Card style={{border:"1px solid silver" , borderRadius:"5px" , margin:"20px", padding:"15px",justifyContent:"space-between" }}>
          <Card.Img variant="top" src={card.image} style={{ width: "15rem" }} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
             </Card>
      ))}
      </Card>
   
  );
}

export default CardsGallery;
