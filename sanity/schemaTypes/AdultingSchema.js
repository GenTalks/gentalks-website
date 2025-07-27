import { defineField } from 'sanity'


const AdultingSchema = {
  name: 'adulting',
  title: 'Adulting',
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
          { title: 'Finance', value: 'finance' },
          { title: 'Life skills', value: 'life skills' },
          { title: 'Mental/Emotional Health', value: 'mental/Emotional Health' },
          { title: 'Legal/Admin', value: 'legal/Admin' },
          { title: 'Career Prep', value: 'career Prep' },
          { title: 'Digital Literacy', value: 'digital Literacy' },
          { title: 'Social/Relationships', value: 'social/Relationships' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'resourceUrl',
      title: 'Resource URL',
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


export default AdultingSchema;