import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes' 

export default defineConfig({
  name: 'default',
  title: 'gentalks',
  projectId: 'bo14mcn7',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes, 
  },
})
