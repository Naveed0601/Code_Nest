import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Sure! Here are four easy-to-understand questions that your audience might have about CodeNest:",
      answer:
        "CodeNest is a platform for developers to store, organize, and manage their code snippets easily.",
    },
    {
      question: "What is CodeNest and how can it help me as a developer?",
      answer:
        "It simplifies code snippet management, making it easy to search, tag, and retrieve code quickly.",
    },
    {
      question:
        "Can I easily share my code snippets with others using CodeNest?",
      answer:
        "Absolutely! CodeNest lets you share snippets with others or keep them private based on your preference.",
    },
    {
      question:
        "Does CodeNest support different programming languages for syntax highlighting?",
      answer:
        "Yes, CodeNest supports various languages, providing syntax highlighting for each to enhance readability.",
    },
  ];

  return (
    <div className="h-full px-4 sm:px-8 md:px-24 mt-28 overflow-x-hidden">
      <h1 className="text-yellow-400 text-4xl font-glyphic border-b border-white pb-10">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-white pb-10 pt-10 pl-4 sm:pl-6"
        >
          <div
            className="flex justify-between items-center text-yellow-400 font-sora cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <p className="font-noto text-xl sm:text-2xl">{item.question}</p>
            {openIndex === index ? (
              <FaMinus className="text-yellow-400" />
            ) : (
              <FaPlus className="text-yellow-400" />
            )}
          </div>

          {openIndex === index && (
            <p className="text-gray-100 mt-4 font-noto text-base sm:text-xl">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
