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
    <main style={{ padding: '1rem' }}>
      <h1>Gruppemedlemmer</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
        gap: '1rem'
      }}>
        {members.map(m => (
          <Link
            key={m.slug}
            to={`/member/${m.slug}`}
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '0.5rem',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            {m.image && (
              <img
                src={urlFor(m.image).width(300).url()}
                alt={m.name}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            )}
            <h2 style={{ margin: '0.5rem 0 0.25rem' }}>{m.name}</h2>
            <p style={{ margin: 0 }}>{m.email}</p>
          </Link>
        ))}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <Arbeidslogg
          entries={members.flatMap(m =>
            (m.logs || []).map(l => ({ ...l, name: m.name }))
          )}
        />
      </section>
    </main>
  )
}
