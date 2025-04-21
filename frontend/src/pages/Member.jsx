import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import Arbeidslogg from '../components/Arbeidslogg'

export default function Member() {
  const { slug } = useParams()
  const [member, setMember] = useState(null)

  useEffect(() => {
    client.fetch(`
      *[_type == "groupMember" && slug.current == $slug][0] {
        name,
        email,
        bio,
        interests,
        image,
        logs[]{date,task,hours}
      }
    `, { slug })
    .then(setMember)
    .catch(console.error)
  }, [slug])

  if (!member) return <p>Laster …</p>

  return (
    <main style={{ padding: '1rem' }}>
      <Link to="/">← Tilbake til hjem</Link>

      {member.image && (
        <img
          src={urlFor(member.image).width(600).url()}
          alt={member.name}
          style={{
            width: '100%',
            maxWidth: '600px',
            display: 'block',
            margin: '1rem 0'
          }}
        />
      )}

      <h1>{member.name}</h1>
      <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
      <p>{member.bio}</p>

      <h2>Interesser</h2>
      <ul>
        {member.interests.map((interest, idx) => (
          <li key={idx}>{interest}</li>
        ))}
      </ul>

      <section style={{ marginTop: '2rem' }}>
        <Arbeidslogg
          entries={member.logs.map(l => ({ ...l, name: member.name }))}
        />
      </section>
    </main>
  )
}
