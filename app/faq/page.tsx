import Link from 'next/link'
import { FAQAccordion } from '@/components/FAQAccordion'

export const metadata = {
  title: 'FAQ — HK Advisory',
  description:
    'Frequently asked questions about working with HK Advisory — sessions, packages, workshops, and AI tool consulting.',
  openGraph: {
    title: 'FAQ — HK Advisory',
    description: 'Answers to common questions about working with HK Advisory.',
    siteName: 'HK Advisory',
  },
}

const faqs = [
  {
    question: 'Do you work with individuals or only teams?',
    answer: 'Both. Most 1-hour sessions are with individuals; packages and workshops can be either.',
  },
  {
    question: 'What happens after a scope meeting?',
    answer: "You'll receive a written scope of work with a clear deliverable list and fixed price within 48 hours. No obligation to proceed.",
  },
  {
    question: 'Do I need to know anything about AI before working with you?',
    answer: 'No. I work with complete beginners and experienced users. The starting point adjusts to where you are.',
  },
  {
    question: 'Which AI tools do you work with?',
    answer: "Primarily Notion AI, Claude, and ChatGPT. I'm tool-agnostic — the goal is finding what works for your workflow, not selling a platform.",
  },
  {
    question: 'Are clients kept confidential?',
    answer: 'Yes. All client work is anonymized in any public-facing materials, including testimonials.',
  },
  {
    question: "What's the difference between a Build Sprint and Ongoing Advisory?",
    answer: 'A Build Sprint is a scoped, time-limited engagement with a specific deliverable — a finished Notion workspace, agent system, or tool. Ongoing Advisory is a monthly retainer for continued iteration, strategy, and support after an initial build or audit.',
  },
  {
    question: 'Can I book a workshop for my lab or team?',
    answer: "Yes. All workshops can be run for private groups, online or in person. Use the booking form to describe your group and I'll follow up with details and pricing.",
  },
  {
    question: 'I just have a quick question — do I need to book a session?',
    answer: 'No. Use the contact form and select "I have a question" — I\'ll follow up within 24 hours.',
  },
]

export default function FAQ() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#1B2E4B] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EDE9FE] py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2E4B] mb-3">
            Still have questions?
          </h2>
          <p className="text-[#1E1B4B]/70 mb-8">Use the form to ask — no commitment required.</p>
          <Link
            href="/book"
            className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Use the Contact Form
          </Link>
        </div>
      </section>
    </main>
  )
}