import React from "react";
import { StyledEnjoy } from "./StyledEnjoy";
import service1 from "../../../../../Assets/images/service1.webp";
import service2 from "../../../../../Assets/images/service2.webp";
import service3 from "../../../../../Assets/images/service3.webp";
import service4 from "../../../../../Assets/images/service4.webp";
function EnjoySection() {
  const services = [
    {
      image: service1,
      title: "Explore",
      desc: "Lorem ipsum dolor sit amet consectetur adipi scing elit sed",
    },
    {
      image: service2,
      title: "Book",
      desc: "Lorem ipsum dolor sit amet consectetur adipi scing elit sed",
    },
    {
      image: service3,
      title: "Enjoy",
      desc: "Lorem ipsum dolor sit amet consectetur adipi scing elit sed",
    },
    {
      image: service4,
      title: "Specials",
      desc: "Lorem ipsum dolor sit amet consectetur adipi scing elit sed",
    },
  ];
  return (
    <StyledEnjoy>
      <div className="services">
        {services.map((el) => {
          return (
            <div className="service">
              <img src={el.image} alt={el.title} />
              <p>{el.title}</p>
              <span>
                {el.desc}
              </span>
            </div>
          );
        })}
      </div>
    </StyledEnjoy>
  );
}

export default EnjoySection;
