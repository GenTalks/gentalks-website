import { defineField } from 'sanity'


const StudentProjectsSchema = {
  name: 'studentProject',
  title: 'Student Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'creator',
      title: 'Creator',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'checkbox',
        list: [
          { title: 'Game', value: 'game' },
          { title: 'Program', value: 'program' },
          { title: 'Article', value: 'article' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'dateFeatured',
      title: 'Date Featured',
      type: 'date',
      validation: Rule => Rule.required()
    }),
  ]
}


export default StudentProjectsSchema;