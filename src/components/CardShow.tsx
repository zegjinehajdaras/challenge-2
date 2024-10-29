
import image1 from '../assets/image/1.png'
import image2 from '../assets/image/2.png'
import image3 from '../assets/image/3.png'
import image4 from '../assets/image/4.png'
import image5 from '../assets/image/5.png'
import image6 from '../assets/image/6.png'
import image7 from '../assets/image/7.png'
import image8 from '../assets/image/8.png'
import image9 from '../assets/image/9.png'
import image10 from '../assets/image/10.png'
import image11 from '../assets/image/11.png'
import image12 from '../assets/image/12.png'
import image13 from '../assets/image/13.png'
import image14 from '../assets/image/14.png'
import image15 from '../assets/image/15.png'
import image16 from '../assets/image/16.png'
import image17 from '../assets/image/17.png'
import image18 from '../assets/image/18.png'
import image19 from '../assets/image/19.png'
import image20 from '../assets/image/20.png'
import { CardData } from "../type/type";


const images =[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20]

interface  CardShowProps{
  bikes:CardData[]
}

const CardShow = (props:CardShowProps) => {
  const {bikes} = props
  // console.log('bikes on cardshow', bikes)


  return (
    <div className="card-section">
      {bikes.map((card, index: number) => (
        <div key={index} className="card each-card">
            <img src={images[index % images.length]} alt={card.name} />
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">{`$${card.price}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardShow;

