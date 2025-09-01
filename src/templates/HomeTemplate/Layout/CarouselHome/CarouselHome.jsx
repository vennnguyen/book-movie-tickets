import React from "react";
import { Carousel } from "antd";

export default function CarouselHome() {
  return (
    <Carousel autoplay style={{ marginTop: 0 }}>
      <div>
        <img
          src="../../../../img/banner-1.jpg"
          alt="Banner 1"
          style={{ width: "100%", height: "500px", objectFit: "contain" }}
        />
      </div>
      <div>
        <img
          src="../../../../img/banner-2.jpg"
          alt="Banner 1"
          style={{ width: "100%", height: "500px", objectFit: "contain" }}
        />
      </div>
      <div>
        <img
          src="../../../../img/banner-3.jpg"
          alt="Banner 1"
          style={{ width: "100%", height: "500px", objectFit: "contain" }}
        />
      </div>
      <div>
        <img
          src="../../../../img/banner-4.jpg"
          alt="Banner 1"
          style={{ width: "100%", height: "500px", objectFit: "contain" }}
        />
      </div>
    </Carousel>
  );
}
