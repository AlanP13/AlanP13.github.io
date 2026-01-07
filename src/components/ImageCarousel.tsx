import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

type Props = {
  images: string[];
  altPrefix?: string;
};

export default function ImageCarousel({ images, altPrefix = "Alan photo" }: Props) {
  return (
    <div className="wrap" aria-label="Profile photo carousel">
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor
        loop
        speed={650}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true, // ✅ makes it move left instead of right
        }}
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 8,
          perSlideRotate: 3,
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={`${src}-${idx}`}>
            <div className="card">
              <img src={src} alt={`${altPrefix} ${idx + 1}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .wrap {
          width: 100%;
          max-width: 320px;   /* matches 1/4 column */
          padding-left: 18px;  /* space for swipe stack */
        }

        /* Make the Swiper area square */
        :global(.swiper) {
            width: 100%;
            aspect-ratio: 4 / 5;
            height: auto;
            overflow: visible;   /* allows card edges to peek without overlapping text */
        }
        :global(.swiper-slide) {
            height: 100%;
        }
        .card {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        :global(.swiper) { cursor: grab; }
        :global(.swiper:active) { cursor: grabbing; }
      `}</style>
    </div>
  );
}
