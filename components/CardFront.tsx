'use client';

import { CardType } from "../app/data/cards";
import Image from "next/image";

const CardFront = ({ card }: { card: CardType }) => {
  return (
    <div className="flex items-center perspective-near perspective-center justify-center">
      <div className="relative transform transform-style-3d">
        <div className="w-[320px] h-[420px] sm:w-[370px] sm:h-[470px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px] xl:w-[400px] xl:h-[500px] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 relative">
          {/* Image that fills the entire card */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={card.url || "/imgs/abstract/3.jpg"}
              alt={card.title || "Card Image"}
              fill
              style={{ objectFit: 'cover' }}
              className=""
            />
          </div>
          
          {/* Inset shadow overlay */}
          <div className="absolute inset-0 white_inset_shadow_card pointer-events-none"></div>
          
          {/* Gradient overlay at the bottom for text */}
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">{card.title || "SIGMA 3D CSS 🔥🔥🔥"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
