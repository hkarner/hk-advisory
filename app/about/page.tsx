import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About — HK Advisory',
  description:
    'Heather Karner is a PhD scientist and AI workflow consultant helping researchers and teams build AI systems that actually work.',
  openGraph: {
    title: 'About — HK Advisory',
    description: 'PhD scientist. AI workflow consultant. I build systems that work the way you work.',
    siteName: 'HK Advisory',
  },
}

const values = [
  {
    icon: '🎯',
    title: 'Rigorous, not performative',
    desc: 'I treat AI the way I treated my research: systematically, with documented methods and reproducible outcomes. No buzzwords, no black boxes.',
  },
  {
    icon: '🔧',
    title: 'Functional over impressive',
    desc: "The goal is a system you can actually use tomorrow, not a demo that wows you once and breaks the next day.",
  },
  {
    icon: '🤝',
    title: 'You leave independent',
    desc: "Every engagement is designed so you walk away with something you own and understand. I'm not building a dependency.",
  },
]

export default function About() {
  return (
    <main>
      {/* Bio */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/headshot.png"
              alt="Heather Karner, PhD — HK Advisory"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] mb-6">About Heather</h1>
            <div className="space-y-4 text-[#1E1B4B]/80 leading-relaxed">
              <p>
                I'm a PhD scientist and AI workflow consultant. I built HK Advisory because I kept
                watching smart, rigorous people struggle with AI tools — not because the tools were
                bad, but because no one helped them set up a system that knew their work.
              </p>
              <p>
                My background is in RNA biology and cancer research. I completed my PhD at UC Irvine
                and my postdoc at UCSF, where I built large-scale experimental platforms and
                computational workflows. That experience gave me a deep appreciation for what a good
                system looks like: reproducible, well-documented, and designed so the next person
                can actually use it.
              </p>
              <p>
                I apply the same standards to AI. I don't sell hype or demos. I build context
                systems, Notion workspaces, and agent workflows that work the way you work — and I
                train you to use and maintain them independently.
              </p>
              <p>
                I am also a first-generation college student and Latina scientist. I care about
                making rigorous AI tools and workflows accessible to researchers who don't have
                institutional support or technical teams behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EDE9FE] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] text-center mb-12">
            How I work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#1B2E4B] text-lg mb-2">{v.title}</h3>
                <p className="text-[#1E1B4B]/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2E4B] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to work together?</h2>
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