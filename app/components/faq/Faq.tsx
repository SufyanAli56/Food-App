'use client';

import React, { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'What is Sufi Bites?',
    answer: 'Sufi Bites is a platform offering delicious, home-cooked meals inspired by traditional Sufi recipes.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes, we provide fast and fresh delivery services across selected areas.',
  },
  {
    question: 'Are your ingredients organic?',
    answer: 'Most of our ingredients are locally sourced and organic where possible.',
  },
  {
    question: 'Can I customize my order?',
    answer: 'Absolutely! You can add notes or preferences while placing your order.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl bg-white mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#5b3b1c]">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm transition-all duration-300 bg-white"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:text-[#b4884b]"
            >
              {item.question}
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 transition-all duration-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
