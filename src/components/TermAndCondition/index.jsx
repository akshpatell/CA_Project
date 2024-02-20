import React from "react";

const sections = [
  {
    title: "1.Service Scope:",
    content:
      "- Our services will be as per engangement letter. Any additional services required beyond the scope of our agreement may incur additional charges.",
  },
  {
    title: "2.Fees and Payment:",
    content:
      "- Fees for our services will be communicated to you upfront and are payable according to the agreed-upon terms. Failure to make timely payments may result in the suspension of services.",
  },
  {
    title: "3.Confidentiality:",
    content:
      "- We will maintain the confidentiality of your personal and financial information in accordance with applicable laws and regulations.",
  },
  {
    title: "4.Dispute Resolution:",
    content:
      " - Any disputes arising from our services will be resolved through negotiation and mediation in good faith.",
  },
];

const TermAndCondition = () => {
  return (
    <div className="flex flex-col gap-10 px-container py-10 max-sm:py-6 max-sm:gap-6">
      <h1 className="text-4xl text-center underline">Terms and Conditions</h1>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          Please note that by engaging with Tax Mantrana for any services, you
          agree to the following terms and conditions:
        </p>
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-justify">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
