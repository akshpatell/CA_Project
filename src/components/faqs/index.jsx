import Image from "next/image";
import React from "react";

const Faqs = () => {
  return (
    <div className="px-container py-4 flex flex-col gap-6">
      <h5 className="text-heading3 text-center">FAQS</h5>
      <div className="">
        <details className="group border-b py-4">
          <summary className="list-none flex justify-between items-center cursor-pointer">
            <p className="text-subtitle2 max-sm:line-clamp-1">
              What services does your CA firm provide?
            </p>
            <div className="group-open:rotate-180 transition-all">
              <Image
                src="/images/downarrow.png"
                alt="downarrow"
                height={15}
                width={15}
              />
            </div>
          </summary>
          <p>
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.
          </p>
        </details>
        <details className="group border-b py-4">
          <summary className="list-none flex justify-between items-center cursor-pointer">
            <p className="text-subtitle2 max-sm:line-clamp-1">
              What services does your CA firm provide?
            </p>
            <div className="group-open:rotate-180 transition-all">
              <Image
                src="/images/downarrow.png"
                alt="downarrow"
                height={15}
                width={15}
              />
            </div>
          </summary>
          <p>
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.
          </p>
        </details>
        <details className="group border-b py-4">
          <summary className="list-none flex justify-between items-center cursor-pointer">
            <p className="text-subtitle2 max-sm:line-clamp-1">
              What services does your CA firm provide?
            </p>
            <div className="group-open:rotate-180 transition-all">
              <Image
                src="/images/downarrow.png"
                alt="downarrow"
                height={15}
                width={15}
              />
            </div>
          </summary>
          <p>
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.
          </p>
        </details>
        <details className="group border-b py-4">
          <summary className="list-none flex justify-between items-center cursor-pointer">
            <p className="text-subtitle2 max-sm:line-clamp-1">
              What services does your CA firm provide?
            </p>
            <div className="group-open:rotate-180 transition-all">
              <Image
                src="/images/downarrow.png"
                alt="downarrow"
                height={15}
                width={15}
              />
            </div>
          </summary>
          <p>
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.
          </p>
        </details>
        <details className="group py-4">
          <summary className="list-none flex justify-between items-center cursor-pointer">
            <p className="text-subtitle2 max-sm:line-clamp-1">
              What services does your CA firm provide?
            </p>
            <div className="group-open:rotate-180 transition-all">
              <Image
                src="/images/downarrow.png"
                alt="downarrow"
                height={15}
                width={15}
              />
            </div>
          </summary>
          <p>
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faqs;
