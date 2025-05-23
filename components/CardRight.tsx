'use client';

import { CardType } from "../app/data/cards";
import Image from "next/image";

const CardRight = ({ card }: { card: CardType }) => {
  return (
    <div className="flex items-center perspective-near perspective-center justify-center">
      <div className="relative rotate-y-5 md:rotate-y-10 transform transform-style-3d">
        <div className="w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[300px] xl:h-[400px] rounded-lg shadow-lg md:rotate-y-45 overflow-hidden transition-transform duration-300 hover:scale-105 relative">
          {/* Image that fills the entire card */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={card.url || "/imgs/abstract/2.jpg"}
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

export default CardRight;
