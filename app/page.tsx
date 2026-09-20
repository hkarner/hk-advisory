import Link from 'next/link'

export const metadata = {
title: 'HK Advisory — AI Workflow Consulting for Scientists & Researchers',
description:
'Practical AI adoption for scientists, researchers, and teams. AI workflow design, Notion builds, and hands-on training that actually sticks.',
openGraph: {
title: 'HK Advisory — AI Workflow Consulting',
description:
'Practical AI adoption for scientists, researchers, and teams who want real results — not just a chatbot.',
siteName: 'HK Advisory',
},
}

const audience = [
{
icon: '🔬',
label: 'Scientists & Researchers',
desc: 'You want AI that fits into how you actually work, not how a demo works.',
},
{
icon: '🏢',
label: 'Founders & Teams',
desc: 'You need AI infrastructure that scales with your organization, not just your curiosity.',
},
{
icon: '📖',
label: 'First-Time AI Adopters',
desc: "You've heard the hype. You want someone honest about what's actually useful.",
},
]

const services = [
{
icon: '🕓',
title: '1-Hour Sessions',
description: 'Targeted, high-ROI working sessions for a specific problem or question. $125 flat.',
},
{
icon: '💼',
title: 'Packages & Advisory',
description:
'Deeper builds, audits, and ongoing support for teams or complex workflows. Starting at $475.',
},
{
icon: '🎫',
title: 'Workshops',
description: 'Live group training for labs, teams, and biotech communities. Online or in-person.',
},
]

const steps = [
{
num: '1',
title: 'Book',
desc: "Fill out the short form. I'll follow up within 24 hours with a link to schedule.",
},
{
num: '2',
title: 'Meet',
desc: "We'll spend the session solving a real problem or scoping a bigger engagement.",
},
{
num: '3',
title: 'Work',
desc: 'Walk away with something functional, a clear plan, or both.',
},
]

const testimonials = [
{
quote:
"I got Heather's help with an AI workflow issue that I couldn't resolve on my own. She immediately identified where my system broke and pointed me in the right direction. She also shared helpful resources that I used to improve my workflow.",
name: 'Mareike S.',
context: 'AI Workflow Design',
},
{
quote:
"What I especially appreciated was that the focus wasn't simply on using AI, but on building a practical system that helps me critically review job descriptions, identify where my experience aligns, and approach applications more strategically. At the same time, Heather showed me how to make much better use of Notion so I could organize and integrate everything into a workflow that actually works for me. I highly recommend Heather to anyone looking to move beyond experimenting with AI and actually build systems that make a difference.",
name: 'Biotech Researcher & Job Seeker',
context: 'Strategy / Advisory',
},
]

export default function Home() {
return (


{/* Hero */}



AI that actually knows your work.


Practical AI adoption for scientists, researchers, and teams who want real results — not
just a chatbot.




Get in Touch


See Services



  {/* Who It's For */}
  <section className="bg-[#EDE9FE] py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] text-center mb-12">
        Built for people who think rigorously about their work.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {audience.map((a) => (
          <div
            key={a.label}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-4xl mb-4">{a.icon}</div>
            <h3 className="font-bold text-[#1B2E4B] text-lg mb-2">{a.label}</h3>
            <p className="text-[#1E1B4B]/70">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Services Preview */}
  <section className="bg-white py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] text-center mb-12">
        Three ways to work together.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="font-bold text-[#1B2E4B] text-lg mb-2">{s.title}</h3>
            <p className="text-[#1E1B4B]/70 mb-4">{s.description}</p>
            <Link href="/services" className="text-[#6D28D9] font-medium hover:underline text-sm">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/services"
          className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
        >
          See All Services
        </Link>
      </div>
    </div>
  </section>

  {/* How It Works */}
  <section className="bg-[#EDE9FE] py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] text-center mb-12">
        How it works.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="w-12 h-12 rounded-full bg-[#6D28D9] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
              {s.num}
            </div>
            <h3 className="font-bold text-[#1B2E4B] text-xl mb-2">{s.title}</h3>
            <p className="text-[#1E1B4B]/70">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/book"
          className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="bg-white py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] text-center mb-12">
        What clients say.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="border-l-4 border-[#6D28D9] pl-6 py-2">
            <p className="text-[#1E1B4B]/80 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
            <p className="font-semibold text-[#1B2E4B]">— {t.name}</p>
            <p className="text-sm text-[#1E1B4B]/60">{t.context} · ⭐⭐⭐⭐⭐</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Final CTA */}
  <section className="bg-[#1B2E4B] text-white py-20 px-6 text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to build something that actually works?
      </h2>
      <p className="text-white/70 mb-8 text-lg">
        No ongoing commitment required. Start with a single session.
      </p>
      <Link
        href="/book"
        className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
      >
        Book a Session
      </Link>
    </div>
  </section>
</main>
)
}