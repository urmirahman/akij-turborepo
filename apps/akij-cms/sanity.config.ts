import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { ImageHotspotArray } from "sanity-plugin-hotspot-array";

export default defineConfig({
  name: 'default',
  title: 'akij-cms',

  projectId: 'p3mskeoj',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ImageHotspotArray],

  schema: {
    types: schemaTypes,
  },
})
