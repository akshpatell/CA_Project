import React from "react";

const sections = [
  {
    title: "1.Eligibility for Refund:",
    content:
      "- Refunds are only applicable in cases where we fail to deliver the promised services or if there is a significant error on our part.",
  },
  {
    title: "2.Refund Process:",
    content:
      "- Once your refund request is approved, we will initiate the refund process. Refunds will be issued using the original payment method, and processing times may vary depending on your financial institution.",
  },
  {
    title: "3.Exceptions:",
    content:
      "- Refunds will not be provided for dissatisfaction with the outcome of our tax consultancy services if the services were delivered in accordance with the agreed-upon terms and conditions.",
  },
];

const RefundPolicy = () => {
  return (
    <div className="flex flex-col gap-10 px-container py-10 max-sm:py-6 max-sm:gap-6">
      <h1 className="text-4xl text-center underline">Refund Policy</h1>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          At Tax Mantrana, we strive to provide high-quality tax consultancy
          services to our clients. In the event of non-compliance at our part,
          we offer a refund policy as follows:
        </p>
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-justify">{section.content}</p>
            </div>
          ))}
          <div>
            <h2 className="text-xl font-semibold">4.Requesting a Refund:</h2>
            <p className="text-justify">
              - To request a refund, please contact our customer support team on
              <a
                href="mailto:support@taxmantrana.com"
                class="underline text-blue-500"
              >
                support@taxmantrana.com
              </a>
              with in 5 days of the service delivery date. You may be required
              to provide details and documentation supporting your refund
              request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
