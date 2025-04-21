import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../lib/sanity'

export default function Header() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    client.fetch(`*[_type=="groupMember"]{name,"slug":slug.current}`)
      .then(setMembers)
      .catch(console.error)
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          Gruppe 36
        </Link>

        <nav className="main-nav">
          <Link to="/">Hjem</Link>
          <span className="divider">|</span>
          {members.map((m, i) => (
            <React.Fragment key={m.slug}>
              <Link to={`/member/${m.slug}`}>{m.name}</Link>
              {i < members.length - 1 && <span className="divider">|</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}
