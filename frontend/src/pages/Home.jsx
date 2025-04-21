// frontend/src/pages/Home.jsx
import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'
import { Link } from 'react-router-dom'
import Arbeidslogg from '../components/Arbeidslogg'

export default function Home() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == "groupMember"]{
        name,
        email,
        "slug": slug.current,
        image,
        logs[]{date,task,hours}
      }
    `)
    .then(setMembers)
    .catch(console.error)
  }, [])

  return (
    <main className="main-container">
      <h1 className="page-title">Gruppemedlemmer</h1>

      <div className="card-grid">
      {members.map(m => (
  <div key={m.slug} className="card">
    <Link to={`/member/${m.slug}`} className="card-link">
      {m.image && <img className="card-img" src={urlFor(m.image).width(300).url()} alt={m.name} />}
      <div className="card-content">
        <h2>{m.name}</h2>
      </div>
    </Link>
    <p className="email">
      <a href={`mailto:${m.email}`}>{m.email}</a>
    </p>
  </div>
))}

      </div>

      <section className="arbeidslogg-section">
        <Arbeidslogg
          entries={members.flatMap(m =>
            (m.logs || []).map(l => ({ ...l, name: m.name }))
          )}
        />
      </section>
    </main>
  )
}
