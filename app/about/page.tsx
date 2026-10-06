import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About | HK Advisory',
  description:
    'Heather Karner is a PhD scientist and AI workflow consultant helping researchers and teams build AI systems that actually work.',
  openGraph: {
    title: 'About | HK Advisory',
    description: 'PhD scientist. AI workflow consultant. I build systems that work the way you work.',
    siteName: 'HK Advisory',
  },
}

const values = [
  {
    title: 'Rigorous, not performative',
    desc: 'I treat AI the way I treated my research: systematically, with documented methods and reproducible outcomes. No buzzwords, no black boxes.',
  },
  {
    title: 'Functional over impressive',
    desc: "The goal is a system you can actually use tomorrow, not a demo that wows you once and breaks the next day.",
  },
  {
    title: 'You leave independent',
    desc: "Every engagement is designed so you walk away with something you own and understand. I'm not building a dependency.",
  },
]

export default function About() {
  return (
    <main>
      {/* Bio */}
      <section className="bg-[#F2EFE7] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/heather-karner.jpg"
              alt="Heather Karner, PhD | HK Advisory"
              fill
              className="object-cover object-[50%_55%]"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#243c35] mb-6">About Heather</h1>
            <div className="space-y-4 text-[#243c35]/80 leading-relaxed">
              <p>
                I'm a PhD scientist and AI workflow consultant. I built HK Advisory because I kept
                watching smart, rigorous people struggle with AI tools. The tools were capable, but
                no one helped them set up a system that knew their work.
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
                systems, Notion workspaces, and agent workflows that work the way you work. I
                train you to use and maintain them independently.
              </p>
              <p>I was part of the winning team at the /build-with-AI Buildathon during SF Tech Week in October 2026. Our project, ORBIT, is an AI founder networking agent. I contributed product definition, demo scope coordination, and the final presentation.</p>
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
      <section className="bg-[#E5E9DF] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#243c35] text-center mb-12">
            How I work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#F2EFE7] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5 h-px w-10 bg-[#725187]" aria-hidden="true" />
                <h3 className="font-bold text-[#243c35] text-lg mb-2">{v.title}</h3>
                <p className="text-[#243c35]/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#243c35] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to work together?</h2>
          <Link
            href="/book"
            className="bg-[#725187] hover:bg-[#5d406f] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  )
}