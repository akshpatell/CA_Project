"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Styles from "./banner.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={Styles.swiper}
      >
        <SwiperSlide>
          <Image
            src="/images/ca_banner_image.avif"
            alt="banner image"
            fill
            className="object-fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/ca_banner_image2.avif"
            alt="banner image"
            fill
            className="object-fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/ca_banner_image.avif"
            alt="banner image"
            fill
            className="object-fill"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
