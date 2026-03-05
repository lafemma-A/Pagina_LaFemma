import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'LA FEMMA Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [deskTool()],

    schema: schema,
});
