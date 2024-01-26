import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex-1);
  }
  const slideNext = () => {
    setActiveIndex(activeIndex+1);
  }

  const syncActiveIndex = ({item}) => {
    setActiveIndex(item);
  }

  const items = [1, 1, 1, 1, 1,1,1,1,1,1].map((item) => <HomeSectionCard />);

  return (
    <div className="border">
      <div className="relative p-5 ">
      <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        disableDotsControls
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
      />
      {activeIndex !== items.length-5 &&
        <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:'8rem',right:'0rem', transform:'translateX(50%) rotate(90deg)', bgcolor:"white"}} aria-label="next">
          <ArrowBackIosIcon sx={{transform:"rotate(90deg)",color:"black"}} />
        </Button>
      }  

      <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:'8rem',left:'0rem', transform:'translateX(-50%) rotate(-90deg)', bgcolor:"white"}} aria-label="next">
        <ArrowBackIosIcon sx={{transform:"rotate(90deg)",color:"black"}} />
      </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
