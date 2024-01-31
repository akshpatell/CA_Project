"use client";

import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const items = [
  {
    id: "1",
    type: "image",
    content: "/images/img1.jpeg",
  },
  {
    id: "1",
    type: "image",
    content: "/images/img2.jpeg",
  },
  {
    id: "2",
    type: "text",
    content:
      "hghjgjghaaaannnnnnnhjgfhkhgdetsesxtdcfjghuiokjnbvcxzawThe list below gives you the 1000 most frequently used English words in alphabetical order. Once you've mastered the shorter vocabulary lists, this is the next step. It would take time to learn the entire list from scratch, but you are probably already familiar with some of these words. Feel free to copy this list into your online flashcard management tool, an app, or print it out to make paper flashcards. You'll have to look up the definitions on your own either in English or in your own language. Good luck improving your English vocabulary!",
  },
  {
    id: "3",
    type: "video",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=1a3bYSsvvEI&ab_channel=SonySAB"
        title="YouTube video"
      />
    ),
  },
  {
    id: "1",
    type: "image",
    content: "/images/img2.jpeg",
  },
];
const Slide = () => {
  return (
    <div className="transition-opacity duration-500 ease-linear mb-[4vh]">
      <Slider {...settings} className="flex">
        {items.map((item, index) => (
          <div key={index} className="h-[70vh] p-4 flex">
            <div className="bg-none h-full rounded-lg flex w-full border-none">
              {item.type === "image" && (
                <Image
                  src={item.content}
                  alt={""}
                  className="object-cover"
                  width={1200}
                  height={400}
                  loading="lazy"
                />
              )}
              {item.type === "text" && <p>{item.content}</p>}
              {item.type === "video" && (
                <div className="video-container">{item.content}</div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
