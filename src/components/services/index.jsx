import React from "react";

const Services = () => {
  const services = [
    { title: "Audit and Assurance" },
    { title: "Taxation" },
    { title: "Corporate Advisory" },
    { title: "Foreign Exchanges Matters" },
    // { title: "Other Service" },
    // { title: "Another Service" },
  ];

  const numServices = services.length;

  return (
    <div className="bg-blue-100 h-auto flex justify-center items-center px-container py-4">
      <div className="flex flex-col gap-6 text-center">
        <div className="text-2xl font-bold text-blue-800">
          SERVICES WE PROVIDE
        </div>

        <div className="flex gap-14 justify-center items-center flex-wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-sky-800 text-white p-4 flex flex-col justify-between rounded-3xl h-[290px] min-w-[240px]"
            >
              <div className="w-full flex justify-center items-center">
                <div className="bg-white text-black h-28 w-28 rounded-full flex justify-center items-center">
                  hello
                </div>
              </div>
              <div className="flex justify-center items-center text-lg font-semibold text-center">
                {service.title}
              </div>
              <div className="flex justify-center items-center">
                <a
                  className="mt-4 text-green-500 text-lg font-medium hover:text-white hover:underline cursor-pointer"
                  href="/services"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
