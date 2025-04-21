export default {
    name: 'groupMember',
    title: 'Gruppemedlem',
    type: 'document',
    fields: [
      { name: 'name',      title: 'Navn',       type: 'string' },
      { name: 'email',     title: 'E‑post',     type: 'string' },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'name', maxLength: 96 }
      },
      { name: 'bio',       title: 'Biografi',   type: 'text' },
      { 
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { name: 'image',     title: 'Bilde',      type: 'image', options: { hotspot: true }},
      { 
        name: 'logs',
        title: 'Arbeidslogg',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'date',  title: 'Dato',    type: 'datetime' },
            { name: 'task',  title: 'Oppgave', type: 'string' },
            { name: 'hours', title: 'Timer',   type: 'number' }
          ]
        }]
      }
    ]
  }
  