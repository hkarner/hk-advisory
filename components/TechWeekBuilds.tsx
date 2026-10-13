import Image from 'next/image'

const builds = [
  {
    name: 'Mind Map',
    logo: '/images/mind-map-logo.png',
    logoWidth: 3200,
    logoHeight: 800,
    event: 'touch ./GRASS Outdoor Voice Coding Hackathon',
    category: 'PERSONAL REFLECTION · COLLABORATIVE PROTOTYPE',
    title: 'A space to reflect and see connections.',
    description: 'A personal reflection web prototype with guided onboarding, voice and text companion check-ins, journaling, goals, and AI-generated mind-map insights.',
    contribution: 'I set up the development workspace and repository, began frontend and backend code, recovered the team’s code after a platform outage, and overhauled the onboarding and visual design. I also tested the multilingual functionality integrated by a teammate.',
    steps: ['Check in', 'Reflect', 'Connect ideas'],
  },
  {
    name: 'Preflight',
    logo: '/images/preflight-logo.png',
    logoWidth: 1536,
    logoHeight: 1024,
    event: 'Party Multiplayer Hackathon',
    category: 'SCIENTIFIC WRITING · EARLY LOCAL PROTOTYPE',
    title: 'A clearer review before the next draft.',
    description: 'A researcher-controlled manuscript-review prototype designed to surface unsupported claims and missing methods details through suggestions anchored to specific passages. Authors decide what to accept, reject, or revise.',
    contribution: 'I originated the project and helped build and run the local prototype with collaborators. I prepared a synthetic manuscript with deliberate reporting gaps and a concept demonstration of the author review process. Preflight grows out of my Scientific Writing Pipeline; further automation is in development.',
    steps: ['Review a passage', 'Weigh the evidence', 'Author decides'],
  },
]

export default function TechWeekBuilds() {
  return (
    <section className="tech-week-section" aria-labelledby="tech-week-heading">
      <div className="wrap section-space">
        <div className="section-heading-row">
          <div><p className="eyebrow">SF TECH WEEK · OCTOBER 2026</p><h2 id="tech-week-heading">More ideas.<br /><em>More ways to build.</em></h2></div>
          <p>Collaborative hackathon builds exploring<br />personal reflection and scientific review.</p>
        </div>
        <div className="project-grid tech-week-grid">
          {builds.map(build => (
            <article key={build.name}>
              <div className={`build-visual ${build.name === 'Preflight' ? 'preflight-visual' : 'mind-map-visual'}`} aria-hidden="true">
                <span className="eyebrow">{build.name === 'Preflight' ? 'REVIEW WITH INTENTION' : 'ROOM FOR REFLECTION'}</span>
                <div className="build-logo"><Image src={build.logo} alt="" width={build.logoWidth} height={build.logoHeight} sizes="(max-width: 760px) 85vw, 480px" /></div>
                <div className="build-steps">{build.steps.map(step => <span key={step}>{step}</span>)}</div>
                <small>COLLABORATIVE PROTOTYPE</small>
              </div>
              <p className="eyebrow">{build.category}</p><h3>{build.name}: {build.title}</h3>
              <p className="build-description">{build.description}</p>
              <p className="build-contribution"><strong>My contribution</strong>{build.contribution}</p>
              <p className="build-event">{build.event}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
