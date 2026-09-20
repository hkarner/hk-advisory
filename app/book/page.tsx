import Link from 'next/link'

export const metadata = {
  title: 'Contact & Booking — HK Advisory',
  description:
    'Book a session, request a scope meeting, inquire about a workshop, or ask a question. HK Advisory responds within 24 hours.',
  openGraph: {
    title: 'Contact & Booking — HK Advisory',
    description: 'Get in touch — booking, questions, and workshop inquiries welcome.',
    siteName: 'HK Advisory',
  },
}

const steps = [
  { num: '1', desc: 'Fill out the form — takes about 2 minutes' },
  {
    num: '2',
    desc: "I'll reply within 24 hours with a scheduling link or answer to your question",
  },
  { num: '3', desc: 'We meet and get to work (or I answer your question directly by email)' },
]

export default function Book() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#1B2E4B] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Booking</h1>
          <p className="text-white/80 text-lg">
            Have a question, want to book a session, or inquire about a workshop? This is the place.
          </p>
        </div>
      </section>

      {/* Form Button */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#1E1B4B]/70 text-lg mb-10">
            Whether you're booking a 1-hour session, requesting a scope meeting for a larger
            engagement, inquiring about a workshop, or just have a question — use the form below.
            I'll follow up within 24 hours.
          </p>
          <a
            href="https://colossal-pantry-049.notion.site/4713f1fafbde47df9d8ae30a4b166ac8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold text-lg px-10 py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            Open Contact Form →
          </a>
          <p className="text-[#1E1B4B]/40 text-sm mt-4">Opens in a new tab · Powered by Notion</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#EDE9FE] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2E4B] text-center mb-10">
            What happens next.
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {s.num}
                </div>
                <p className="text-[#1E1B4B]/80 pt-2 text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2E4B] mb-4">Connect.</h2>
          <p className="text-[#1E1B4B]/60 mb-4">You can also find me on LinkedIn.</p>
          <a
            href="https://www.linkedin.com/in/heather-karner-phd-1251a1aa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6D28D9] font-semibold hover:underline"
          >
            linkedin.com/in/heather-karner-phd-1251a1aa →
          </a>
        </div>
      </section>
    </main>
  )
}