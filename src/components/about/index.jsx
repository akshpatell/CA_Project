import React from "react";

const AboutServices = () => {
  return (
    <div className="text-black w-full flex flex-col gap-4 px-container pt-8 pb-4">
      <h1 className="text-heading3 font-bold text-black text-center">
        About Service
      </h1>
      <span className=" text-xl font-bold max-lg:text-sm text-justify mt-4">
        HI🙋‍♂️ , I AM <span className="text-light">STEWART</span> PASSIONATE CA
        FROM <span className="text-light">INDIA</span>
      </span>

      <p className="text-xl font-light text-[gray] max-lg:text-sm text-justify">
        Tax Advisory Services are expert financial guidance provided to
        individuals and businesses to help them navigate the complexities of the
        tax system, optimize their tax liabilities, and ensure compliance with
        tax laws. These services encompass tax planning, strategy development,
        and assistance with tax compliance. Whether it is s minimizing tax
        burdens, managing tax risks, or maximizing available deductions and
        credits, Tax Advisory Services offer tailored solutions to meet the
        unique tax needs and goals of clients, ultimately helping them make
        informed financial decisions and save money while staying within the
        legal boundaries of the tax code.
      </p>
      <p className="text-xl font-light text-[gray] max-lg:text-sm text-justify">
        Tax Advisory Services are expert financial guidance provided to
        individuals and businesses to help them navigate the complexities of the
        tax system, optimize their tax liabilities, and ensure compliance with
        tax laws. These services encompass tax planning, strategy development,
        and assistance with tax compliance. Whether it is s minimizing tax
        burdens, managing tax risks, or maximizing available deductions and
        credits, Tax Advisory Services offer tailored solutions to meet the
        unique tax needs and goals of clients, ultimately helping them make
        informed financial decisions and save money while staying within the
        legal boundaries of the tax code.
      </p>
      <span className="text-2xl font-bold max-lg:text-sm text-justify">
        Perks for Purchasing this plan
      </span>
      <div className="flex items-center justify-center">
        <iframe
          className="max-w-4xl w-full h-72 lg:h-[500px]"
          src="https://www.youtube.com/embed/5hFd6zGkxLE?si=O1YnXfVprWqxlXBz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutServices;
