import { defineField } from 'sanity'

const InternshipsSchema = {
  name: 'internship',
  title: 'Internship',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internship Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'compensation',
        title: 'Compensation',
        type: 'string',
        options: {
            list: [
            { title: 'Paid', value: 'paid' },
            { title: 'Unpaid', value: 'unpaid' },
            ],
        },
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'industries',
        title: 'Industries',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
            layout: 'tags', 
            list: [
            { title: 'Software', value: 'software' },
            { title: 'Healthcare', value: 'healthcare' },
            { title: 'Finance', value: 'finance' },
            { title: 'Education', value: 'education' },
            { title: 'Marketing', value: 'marketing' },
            { title: 'Design', value: 'design' },
            { title: 'Engineering', value: 'engineering' },
            { title: 'Science', value: 'science' },
            { title: 'Nonprofit', value: 'nonprofit' },
            { title: 'Law', value: 'law' },
            ],
        },
        validation: Rule => Rule.required()
    }),
    defineField({
        name: 'pros',
        title: 'Pros',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
            layout: 'tags',
            list: [
            { title: 'Paid', value: 'paid' },
            { title: 'Unpaid', value: 'unpaid' },
            ],
        },
        validation: Rule => Rule.required()
    }),
    defineField({
        name: 'cons',
        title: 'Cons',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
            layout: 'tags',
        },
        validation: Rule => Rule.required()
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application Link',
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

export default InternshipsSchema;