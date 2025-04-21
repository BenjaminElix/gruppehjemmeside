// frontend/src/lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '9z6ga6zu',        // din Sanity projectId
  dataset:   'oblig3',          // ditt dataset
  apiVersion: '2025-04-20',     // gjerne dagen du deployet
  useCdn:    true
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
