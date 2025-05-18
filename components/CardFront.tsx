import { CardType } from "../app/page";
import Image from "next/image";

const CardLeft = ({card}: { card: CardType }) => {
  return (
    <div className="relative w-[350px] h-[450px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
      {/* Image that fills the entire card */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={card.url}
          alt={card.title}
          fill
          style={{ objectFit: 'cover' }}
          className=""
        />
      </div>
      
      {/* Inset shadow overlay */}
      <div className="absolute inset-0 white_inset_shadow_card pointer-events-none"></div>
      
      {/* Gradient overlay at the bottom for text */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-white text-xl font-medium">{card.title}</h3>
      </div>
    </div>
  );
};

export default CardLeft;
