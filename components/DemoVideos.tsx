type Demo = { src: string; label: string }

export default function DemoVideos({ project, demos, note }: { project: string; demos: Demo[]; note?: string }) {
  return (
    <details className="project-demos">
      <summary>Watch {project} {demos.length > 1 ? 'demos' : 'demo'}</summary>
      {note && <p className="demo-note">{note}</p>}
      <div className="demo-list">
        {demos.map(demo => (
          <figure key={demo.src}>
            <figcaption>{demo.label}</figcaption>
            <video controls playsInline preload="none" aria-label={demo.label}>
              <source src={demo.src} type="video/mp4" />
              Your browser does not support embedded video. <a href={demo.src}>Open the demo video</a>.
            </video>
            <a className="demo-open" href={demo.src} target="_blank" rel="noopener noreferrer">Open video in a new tab ↗</a>
          </figure>
        ))}
      </div>
    </details>
  )
}
