import React from "react";
import FaqCard from "./FaqCard"; // Adjust the import path as needed

const faqContent = [
  {
    question: "When does the festival happen",
    answer:
      "The main festival happens in early November each year. However, KITFest has several programs that run throughout the year including the County Tours which are part of the main festival, but run in the months preceding the November event.",
  },
  {
    question: "What is the purpose of the festival?",
    answer:
      "The festival aims to celebrate and promote various art forms, bringing together artists and audiences from different regions.",
  },
  {
    question: "How can I participate in the festival?",
    answer:
      "Participants can apply through our website or reach out via email for more information on auditions and submissions.",
  },
  {
    question: "Are there any age restrictions for participants?",
    answer:
      "There are no age restrictions for participants; everyone is welcome to showcase their talents.",
  },
  {
    question: "Where can I buy tickets?",
    answer:
      "Tickets can be purchased online through our official website or at the festival venue during the event.",
  },
  {
    question: "Is there accommodation available during the festival?",
    answer:
      "Yes, we have partnered with several local hotels to provide discounted rates for festival attendees.",
  },
  {
    question: "What COVID-19 precautions are in place?",
    answer:
      "We will adhere to local health guidelines and ensure the safety of all participants and attendees.",
  },
];

const Faq = () => {
  return (
    <div>
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Frequently Asked Questions
      </h2>
      {faqContent.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
