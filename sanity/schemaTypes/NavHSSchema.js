import { defineField } from 'sanity'


const NavHSSchema = {
  name: 'navhs',
  title: 'NavHS',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'checkbox',
            list: [
            { title: 'General advice', value: 'general advice' },
            { title: 'Academics', value: 'academics'},
            { title: 'School involvement', value: 'school involvement' },
            { title: 'Athletics', value: 'athletics' },
            { title: 'Social & emotional support', value: 'social & emotional support' },
            ],
        },
        validation: Rule => Rule.required()
    }),
    defineField({
      name: 'resourceUrl',
      title: 'Resource Link',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'datePosted',
      title: 'Date Posted',
      type: 'date',
      validation: Rule => Rule.required()
    }),
  ]
}


export default NavHSSchema;