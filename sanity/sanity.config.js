// sanity/sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Default‑export fra groupMember.js
import groupMember from './schemaTypes/groupMember'

export default defineConfig({
  name: 'default',
  title: 'Benjamin Elix',
  projectId: '9z6ga6zu',
  dataset: 'oblig3',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    // Bare én liste med dine document‐schemas
    types: [
      groupMember
    ]
  }
})
