import React from "react";
import Carousel from 'react-elastic-carousel'
import quotes from "../../assets/quote.png";
import avatar from "../../assets/avatar.png";
import "./style.js";
import { Item } from "./style.js";

export const Slider = () => {
  return (
   <div className="wrapper">
     <Carousel>
        <Item> 
          <div className="slide-item">
          <img className="quote" src={quotes} alt="quotes" />
          <div className="user">
            <img src={avatar} alt="user_image" />
            <div className="text">
              <span>Jenny Wilson</span>
              <p>Vice President</p>
            </div>
          </div>
          <div className="details">
            <p>
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              It acted as a catalyst to take our design to the next level and
              get more eyes on our product.
            </p>
          </div> 
        </div></Item>
        <Item> <div className="slide-item">
          <img className="quote" src={quotes} alt="quotes" />
          <div className="user">
            <img src={avatar} alt="user_image" />
            <div className="text">
              <span>Jenny Wilson</span>
              <p>Vice President</p>
            </div>
          </div>
          <div className="details">
            <p>
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              It acted as a catalyst to take our design to the next level and
              get more eyes on our product.
            </p>
          </div> 
        </div></Item>
        <Item> <div className="slide-item">
          <img className="quote" src={quotes} alt="quotes" />
          <div className="user">
            <img src={avatar} alt="user_image" />
            <div className="text">
              <span>Jenny Wilson</span>
              <p>Vice President</p>
            </div>
          </div>
          <div className="details">
            <p>
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              It acted as a catalyst to take our design to the next level and
              get more eyes on our product.
            </p>
          </div> 
        </div></Item>
        <Item> <div className="slide-item">
          <img className="quote" src={quotes} alt="quotes" />
          <div className="user">
            <img src={avatar} alt="user_image" />
            <div className="text">
              <span>Jenny Wilson</span>
              <p>Vice President</p>
            </div>
          </div>
          <div className="details">
            <p>
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              It acted as a catalyst to take our design to the next level and
              get more eyes on our product.
            </p>
          </div> 
        </div></Item>
     </Carousel>
   </div>
  );
};
