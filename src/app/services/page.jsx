import AboutServices from "@/components/about";
import Banner from "@/components/banner";
import Faqs from "@/components/faqs";
import Form from "@/components/form";
import React from "react";

const ServicesPage = () => {
  return (
    <div>
      {/* <Banner /> */}
      <AboutServices />
      <Faqs />
      <Form />
    </div>
  );
};

export default ServicesPage;
