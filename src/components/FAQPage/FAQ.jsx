import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import Heading from "../Heading/Heading";

const faqs = [
  {
    question: "How does FreshBasket ensure fresh grocery delivery in Kathmandu?",
    answer:
      "FreshBasket ensures freshness by sourcing fruits, vegetables, dairy, and grocery items daily from local farms and trusted suppliers in and around Kathmandu Valley. All products go through strict quality checks, hygienic packaging, and a cold-chain delivery system to maintain freshness until they reach your doorstep.",
  },
  {
    question: "Which areas in Kathmandu does FreshBasket deliver groceries to?",
    answer:
      "We deliver across major areas of Kathmandu including New Baneshwor, Thamel, Maharajgunj, Koteshwor, Baluwatar, Sinamangal, and surrounding regions. We also serve parts of Lalitpur (Patan) and Bhaktapur with fast grocery delivery services.",
  },
  {
    question: "What is the minimum order value for FreshBasket delivery?",
    answer:
      "The minimum order value is NPR 300. Orders above NPR 1000 are eligible for free grocery delivery anywhere within our Kathmandu service area.",
  },
  {
    question: "Can I schedule grocery delivery in Kathmandu with FreshBasket?",
    answer:
      "Yes, FreshBasket allows scheduled grocery delivery in Kathmandu. You can choose your preferred date and time slot during checkout for a convenient shopping experience.",
  },
  {
    question: "What payment methods are accepted by FreshBasket?",
    answer:
      "We accept multiple secure payment methods including eSewa, Khalti, IME Pay, ConnectIPS, debit/credit cards, and cash on delivery across Kathmandu Valley.",
  },
  {
    question: "What happens if I receive a damaged or incorrect grocery item?",
    answer:
      "If you receive a damaged or incorrect item, you can report it within 24 hours. FreshBasket offers refunds, replacements, or store credit after verification to ensure customer satisfaction.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-xl border border-zinc-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-5 py-4 text-left"
    >
      <span className="font-semibold text-gray-900">{question}</span>

      <span
        className={`w-7 h-7 flex items-center justify-center rounded-full ${
          isOpen ? "bg-green-600 text-white" : "bg-green-50 text-green-600"
        }`}
      >
        {isOpen ? <HiMinus /> : <HiPlus />}
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="px-5 pb-4 text-sm text-zinc-600 leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-white py-20 px-5">
      <div className="max-w-3xl mx-auto">

        {/* SEO HEADER */}
        <div className="text-center mb-8">
          <Heading highlight="FreshBasket" heading=" FAQs" />

          <p className="mt-3 text-sm text-zinc-600 max-w-[700px] mx-auto">
            Find answers about online grocery delivery in Kathmandu, delivery areas,
            payment methods, order tracking, and FreshBasket services.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-zinc-600 mb-3">
            Still have questions about grocery delivery in Kathmandu?
          </p>

          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-7 py-2.5 rounded-full"
          >
            Contact FreshBasket Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;