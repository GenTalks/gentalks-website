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
        layout: 'checkbox',
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
        layout: 'checkbox',
        list: [
          { title: 'Hourly stipends', value: 'hourly stipends' },
          { title: 'High-return internship', value: 'high-return internship' },
          { title: 'Conversion offer', value: 'conversion offer' },
          { title: 'Pre-placement offer (PPO)', value: 'pre-placement offer (PPO)' },
          { title: 'Equity compensation', value: 'equity compensation' },
          { title: 'Access to DevTools', value: 'devTools' },
          { title: 'Large network', value: 'large network' },
          { title: 'Mentorship', value: 'mentorship' },
          { title: 'Exclusive event access', value: 'exclusive event access' },
          { title: 'Creative freedom', value: 'creative freedom' },
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
        layout: 'checkbox',
        list: [
          { title: 'Challenging WLB', value: 'challenging WLB' },
          { title: 'Independent work', value: 'independent work' },
          { title: 'Fast-paced environment', value: 'fast-paced environment' },
          { title: 'Intense workplace culture', value: 'intense workplace culture' },
          { title: 'Commitment length', value: 'commitment length' },
          { title: 'Startup environment', value: 'startup environment' },
        ],
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