import Image from "next/image";
import React from "react";

const Faqs = () => {
  return (
    <div className="px-container py-4 flex flex-col gap-6">
      <h5 className="text-heading3 text-center">FAQS</h5>
      <div className="flex flex-col gap-2">
        <details className="group py-4 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-2 rounded-xl">
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
        <details className="group py-4 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-2 rounded-xl">
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
        <details className="group py-4 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-2 rounded-xl">
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
        <details className="group py-4 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-2 rounded-xl">
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
        <details className="group py-4 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-2 rounded-xl">
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

// "use client";
// import { Disclosure } from "@headlessui/react";
// import Image from "next/image";

// const Faqs = () => {
//   return (
//     <div className="px-container py-4 flex flex-col gap-6">
//       <h5 className="text-heading3 text-center">FAQS</h5>
//       <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
//         <Disclosure>
//           {({ open }) => (
//             <div className="flex flex-col">
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 item">
//                 <span>What is your refund policy?</span>
//                 {/* <ChevronUpIcon
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } h-5 w-5 text-purple-500`}
//                 /> */}
//                 <Image
//                   src="/images/downarrow.png"
//                   alt="downarrow"
//                   height={15}
//                   width={15}
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
//                 If you're unhappy with your purchase for any reason, email us
//                 within 90 days and we'll refund you in full, no questions asked.
//               </Disclosure.Panel>
//             </div>
//           )}
//         </Disclosure>
//         <Disclosure>
//           {({ open }) => (
//             <div className="flex flex-col">
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 items-center">
//                 <span>Do you offer technical support?</span>
//                 <Image
//                   src="/images/downarrow.png"
//                   alt="downarrow"
//                   height={15}
//                   width={15}
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
//                 No.
//               </Disclosure.Panel>
//             </div>
//           )}
//         </Disclosure>
//         <Disclosure>
//           {({ open }) => (
//             <div className="flex flex-col">
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 items-center">
//                 <span>Do you offer technical support?</span>
//                 <Image
//                   src="/images/downarrow.png"
//                   alt="downarrow"
//                   height={15}
//                   width={15}
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
//                 No.
//               </Disclosure.Panel>
//             </div>
//           )}
//         </Disclosure>

//         <Disclosure>
//           {({ open }) => (
//             <div className="flex flex-col">
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 items-center">
//                 <span>Do you offer technical support?</span>
//                 <Image
//                   src="/images/downarrow.png"
//                   alt="downarrow"
//                   height={15}
//                   width={15}
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
//                 No.
//               </Disclosure.Panel>
//             </div>
//           )}
//         </Disclosure>
//         <Disclosure>
//           {({ open }) => (
//             <div className="flex flex-col">
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 items-center">
//                 <span>Do you offer technical support?</span>
//                 <Image
//                   src="/images/downarrow.png"
//                   alt="downarrow"
//                   height={15}
//                   width={15}
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
//                 No.
//               </Disclosure.Panel>
//             </div>
//           )}
//         </Disclosure>
//         <Disclosure>
//           {({ open }) => (
//             <div className="flex flex-col">
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 items-center">
//                 <span>Do you offer technical support?</span>
//                 <Image
//                   src="/images/downarrow.png"
//                   alt="downarrow"
//                   height={15}
//                   width={15}
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
//                 No.
//               </Disclosure.Panel>
//             </div>
//           )}
//         </Disclosure>
//       </div>
//     </div>
//   );
// };

// export default Faqs;
