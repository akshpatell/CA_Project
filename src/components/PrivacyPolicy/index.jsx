import React from "react";

const sections = [
  {
    title: "1.Information We Collect:",
    content:
      "- We may collect personal information such as your name, contact details, tax-related information, and any other details necessary to provide our tax consultancy services.",
  },
  {
    title: "2.Use of Information:",
    content:
      "- We use the information we collect to provide our tax consultancy services, communicate with you, process payments, and comply with legal and regulatory requirements.",
  },
  {
    title: "3.Disclosure of Information:",
    content:
      "- We may disclose your information to third-party service providers who assist us in providing our services. We do not sell or rent your personal information to third parties for marketing purposes.",
  },
  {
    title: "4.Data Security:",
    content:
      "- We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    title: "5.Your Rights:",
    content:
      "- You have the right to access, update, or delete your personal information. You can also opt-out of receiving marketing communications from us.",
  },
  {
    title: "6.Changes to Privacy Policy:",
    content:
      "- We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on our website, and your continued use of our services constitutes acceptance of these changes.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-10 px-container py-10 max-sm:py-6 max-sm:gap-6">
      <h1 className="text-4xl text-center underline">Privacy Policy</h1>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          At Tax Mantrana, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, disclose, and protect the
          information you provide to us.
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

export default PrivacyPolicy;
