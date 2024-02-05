import Image from "next/image";
import React from "react";

const faqs = [
  {
    id: "1",
    questions: "What services does your CA firm provide?",
    arrow: "/images/downarrow.png",
    answer:
      "Our CA firm offers a comprehensive range of services, including auditing, tax planning, financial consulting, and business advisory services tailored to meet the unique needs of businesses.",
  },
  {
    id: "2",
    questions: "What services does your CA firm provide?",
    arrow: "/images/downarrow.png",
    answer:
      "Our CA firm offers a comprehensive range of services, including auditing, tax planning, financial consulting, and business advisory services tailored to meet the unique needs of businesses.",
  },
  {
    id: "3",
    questions: "What services does your CA firm provide?",
    arrow: "/images/downarrow.png",
    answer:
      "Our CA firm offers a comprehensive range of services, including auditing, tax planning, financial consulting, and business advisory services tailored to meet the unique needs of businesses.",
  },
  {
    id: "4",
    questions: "What services does your CA firm provide?",
    arrow: "/images/downarrow.png",
    answer:
      "Our CA firm offers a comprehensive range of services, including auditing, tax planning, financial consulting, and business advisory services tailored to meet the unique needs of businesses.",
  },
  {
    id: "5",
    questions: "What services does your CA firm provide?",
    arrow: "/images/downarrow.png",
    answer:
      "Our CA firm offers a comprehensive range of services, including auditing, tax planning, financial consulting, and business advisory services tailored to meet the unique needs of businesses.",
  },
];

const Faqs = () => {
  return (
    <div className="px-container py-4 flex flex-col gap-6">
      <h5 className="text-heading3 text-center">FAQS</h5>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group py-4 shadow-lg px-2 rounded-xl shadow-[#bce1ff]"
          >
            <summary className="list-none flex justify-between items-center cursor-pointer">
              <p className="text-subtitle2 max-sm:line-clamp-1">
                {faq.questions}
              </p>
              <div className="group-open:rotate-180 transition-all">
                <Image src={faq.arrow} alt="downarrow" height={15} width={15} />
              </div>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
