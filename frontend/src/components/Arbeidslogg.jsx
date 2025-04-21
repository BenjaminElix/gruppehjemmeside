export default function Arbeidslogg({ entries }) {
    const sorted = [...entries].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )
  
    return (
      <div>
        <h2 className="arbeidslogg-title">Arbeidslogg</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Dato</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Navn</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Oppgave</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Timer</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((e, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor: i % 2 ? '#333232' : '#242424'
                }}
              >
                <td style={{ padding: '0.5rem' }}>
                  {new Date(e.date).toISOString().split('T')[0]}
                </td>
                <td style={{ padding: '0.5rem' }}>{e.name}</td>
                <td style={{ padding: '0.5rem' }}>{e.task}</td>
                <td style={{ padding: '0.5rem' }}>{e.hours} t</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  