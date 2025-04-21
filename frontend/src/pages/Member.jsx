// frontend/src/pages/Member.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import Arbeidslogg from '../components/Arbeidslogg'

export default function Member() {
  const { slug } = useParams()
  const [member, setMember] = useState(null)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "groupMember" && slug.current == $slug][0]{
          name,
          email,
          bio,
          interests,
          image,
          logs[]{date,task,hours}
        }`,
        { slug }
      )
      .then(setMember)
      .catch(console.error)
  }, [slug])

  if (!member) return <p>Laster …</p>

  return (
    <main className="main-container">
      <Link to="/" className="back-link">← Tilbake til hjem</Link>

      {/* Denne wrapper flex-layout */}
      <div className="profile-header">
        {/* Bilde */}
        {member.image && (
          <img
            src={urlFor(member.image).width(600).url()}
            alt={member.name}
            className="profile-img"
          />
        )}

        {/* Tekst ved siden av */}
        <div className="profile-info">
          <h1>{member.name}</h1>
          <p className="email">
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </p>
          <p className="bio">{member.bio}</p>

          <h2>Interesser</h2>
          <ul className="interests-list">
            {member.interests.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Arbeidslogg under */}
      <section className="arbeidslogg-section">
        <Arbeidslogg
          entries={member.logs.map(log => ({ ...log, name: member.name }))}
        />
      </section>
    </main>
  )
}
