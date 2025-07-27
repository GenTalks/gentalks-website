import { defineField } from 'sanity'


const ScholarshipsSchema = {
  name: 'scholarship',
  title: 'Scholarship',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Scholarship Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'organization',
      title: 'Organization Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'checkbox',
        list: [
          { title: 'First-generation', value: 'first-generation' },
          { title: 'STEM', value: 'stem' },
          { title: 'Women', value: 'women' },
          { title: 'BIPOC', value: 'bipoc' },
          { title: 'LGTBQ+', value: 'lgbtq+' },
          { title: 'US citizens', value: 'u.s. citizens' },
          { title: 'Undocumented students', value: 'undocumented students' },
          { title: 'International students', value: 'international students' },
          { title: 'GPA requirement', value: 'gpa requirement' },
          { title: 'Major specific', value: 'major specific' },
          { title: 'SAT/ACT required', value: 'sat/act required' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'applicationtype',
      title: 'Application Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'checkbox',
        list: [
          { title: 'Essay', value: 'essay' },
          { title: 'Video', value: 'video' },
          { title: 'Merit based', value: 'merit based' },
          { title: 'Need based', value: 'need based' },
          { title: 'Project based', value: 'project based' },
          { title: 'Credential based', value: 'credential based' },
          { title: 'Lottery draw', value: 'lottery draw' },
          { title: 'Interview required', value: 'interview required' },
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
  ]
}


export default ScholarshipsSchema;