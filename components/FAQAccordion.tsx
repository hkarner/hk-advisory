"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-purple/10 rounded-lg border border-purple/10 bg-white shadow-soft">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-extrabold text-navy transition hover:bg-lavender/50 sm:px-7"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span aria-hidden="true" className="text-2xl leading-none text-purple">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-6 text-ink/80 sm:px-7">
                <p className="max-w-3xl leading-7">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
