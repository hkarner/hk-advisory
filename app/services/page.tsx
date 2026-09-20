import Link from 'next/link'

export const metadata = {
  title: 'Services — HK Advisory',
  description:
    'AI workflow design, Notion builds, and practical AI training. 1-hour sessions ($125), packages, and workshops for scientists, researchers, and teams.',
  openGraph: {
    title: 'Services — HK Advisory',
    description: 'Three ways to work together: sessions, packages, and workshops.',
    siteName: 'HK Advisory',
  },
}

const sessions = [
  {
    title: 'AI Readiness Call',
    desc: 'Audit your current AI tool use; identify your top 2–3 highest-ROI changes; short written summary after.',
  },
  {
    title: 'Notion Workspace Review',
    desc: 'Screen-share review of your existing workspace; prioritized "fix this first" list.',
  },
  {
    title: 'Context System Setup',
    desc: 'Build one working context artifact together (Writing Style Guide, Knowledge Base, or Claude Project); you leave with something functional.',
  },
  {
    title: 'Agent Design Session',
    desc: 'Map out what an agent should do before building it — scope, triggers, sources. Great precursor to a Build Sprint.',
  },
  {
    title: '"Should I Automate This?" Session',
    desc: 'Bring a specific workflow problem; leave with a clear yes/no + recommended approach.',
  },
]

const packages = [
  {
    name: 'Starter Audit',
    included: 'Workflow diagnosis + prioritized AI recommendation doc',
    price: '$475',
  },
  {
    name: 'Build Sprint',
    included: 'Custom Notion workspace or agent system, scoped in advance',
    price: '$1,500',
  },
  {
    name: 'Ongoing Advisory',
    included: '4 hrs/mo retainer · continued iteration and strategy',
    price: '$600/mo',
  },
  {
    name: 'Custom',
    included: 'Larger builds, team training programs, multi-session engagements',
    price: 'Scoped after meeting',
  },
]

const workshops = [
  {
    title: 'Build an AI Workspace That Actually Knows You',
    format: '1 hr · Context systems for Claude, Notion AI, or ChatGPT',
    price: '$125/person or $500 flat (up to 10)',
  },
  {
    title: 'Where to Start with AI',
    format: '1 hr · AI landscape + personalized starting point',
    price: '$125/person or $500 flat (up to 10)',
  },
  {
    title: 'Should I Automate This?',
    format: '90 min · Group workflow audit',
    price: '$150/person or $750 flat (up to 10)',
  },
  {
    title: 'Notion for Scientists & Researchers',
    format: '90 min · Hands-on build-along',
    price: '$125/person or $600 flat (up to 10)',
  },
]

export default function Services() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#1B2E4B] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work With Me</h1>
          <p className="text-white/80 text-lg">
            AI workflow design, Notion builds, and practical AI training for scientists, researchers,
            and teams.
          </p>
        </div>
      </section>

      {/* 1-Hour Sessions */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-[#EDE9FE] text-[#6D28D9] text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Most popular · No commitment required
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] mb-2">
            🕓 1-Hour Sessions — $125 flat
          </h2>
          <p className="text-[#1E1B4B]/70 mb-10">
            No ongoing commitment. Book one, see if it's useful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {sessions.map((s) => (
              <div
                key={s.title}
                className="border-t-4 border-[#6D28D9] rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-bold text-[#1B2E4B] text-lg mb-2">{s.title}</h3>
                <p className="text-[#1E1B4B]/70">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/book"
              className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
            >
              Book a 1-Hour Session
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[#EDE9FE] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] mb-4">
            💼 Bigger Engagements
          </h2>
          <p className="text-[#1E1B4B]/70 mb-10 max-w-2xl">
            For teams, complex builds, or ongoing work. Starts with a free 1-hour scope meeting. Not
            sure what you need or how long it will take? That's normal — we'll map it out together
            first. You'll receive a written scope of work and pricing before any commitment.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full bg-white text-left">
              <thead>
                <tr className="bg-[#1B2E4B] text-white">
                  <th className="px-6 py-4 font-semibold">Package</th>
                  <th className="px-6 py-4 font-semibold">What's Included</th>
                  <th className="px-6 py-4 font-semibold">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((p, i) => (
                  <tr key={p.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F3FF]'}>
                    <td className="px-6 py-4 font-semibold text-[#1B2E4B]">{p.name}</td>
                    <td className="px-6 py-4 text-[#1E1B4B]/80">{p.included}</td>
                    <td className="px-6 py-4 font-semibold text-[#6D28D9]">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/book"
              className="bg-[#2A9D8F] hover:bg-[#21867a] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
            >
              Request a Scope Meeting
            </Link>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2E4B] mb-4">🎫 Workshops</h2>
          <p className="text-[#1E1B4B]/70 mb-10">
            For teams, labs, and communities. Online or in-person.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-bold text-[#1B2E4B] text-lg mb-2">{w.title}</h3>
                <p className="text-[#3B82F6] text-sm font-medium mb-1">{w.format}</p>
                <p className="text-[#1E1B4B]/60 text-sm">{w.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/book"
              className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
            >
              Inquire About a Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-[#EDE9FE] py-10 px-6 text-center">
        <p className="text-[#1E1B4B]/80">
          Have questions?{' '}
          <Link href="/faq" className="text-[#6D28D9] font-semibold hover:underline">
            Check the FAQ →
          </Link>
        </p>
      </section>
    </main>
  )
}