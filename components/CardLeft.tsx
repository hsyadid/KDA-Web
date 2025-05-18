import { CardType } from "../app/page";
import Image from "next/image";

const CardLeft = ({card}: { card: CardType }) => {
  return (
    <div className="flex items-center perspective-near perspective-center justify-center min-h-screen">
      <div className="relative -rotate-y-10 transform transform-style-3d">
        <div className="w-80 h-96 rounded-lg shadow-lg rotate-y-45 overflow-hidden transition-transform duration-300 hover:scale-110 relative">
          {/* Image that fills the entire card */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={card.url || "/imgs/abstract/1.jpg"}
              alt={card.title || "Card Image"}
              fill
              style={{ objectFit: 'cover' }}
              className=""
            />
          </div>
          
          {/* Inset shadow overlay */}
          <div className="absolute inset-0 white_inset_shadow_card pointer-events-none"></div>
          
          {/* Gradient overlay at the bottom for text */}
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-white text-xl font-medium">{card.title || "SIGMA 3D CSS 🔥🔥🔥"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
