import { defineField } from 'sanity'


const MentorPageSchema = {
    name: 'mentorpage',
    title: 'MentorPage',
    type: 'document',
    fields: [
        defineField({
            name: 'mentorImage',
            title: 'Mentor Image',
            type: 'url',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'mentorname',
            title: 'Mentor Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'calendly',
            title: 'Calendly',
            type: 'url',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'growth',
            title: 'Growth',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'checkbox',
                list: [
                    { title: 'Personal growth', value: 'personal growth' },
                    { title: 'Academic growth', value: 'academic growth' },
                ],
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'topics',
            title: 'Topics',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'checkbox',
                list: [
                    { title: 'Time management + WLB (P)', value: 'time management + wlb (P)' },
                    { title: 'Mental health + mindset (P)', value: 'mental health + mindset (P)' },
                    { title: 'Goal setting (P)', value: 'goal setting (P)' },
                    { title: 'Career exploration (P)', value: 'career exploration (P)' },
                    { title: 'College applications (A)', value: 'college applications (A)' },
                    { title: 'Studying techniques (A)', value: 'studying techniques (A)' },
                    { title: 'Course planning (A)', value: 'course planning (A)' },
                    { title: 'Career planning (A)', value: 'career planning (A)' },
                    { title: 'Essay writing (A)', value: 'essay writing (A)' },
                    { title: 'Homework help (A)', value: 'homework help (A)' },
                    { title: 'SAT prep (A)', value: 'sat prep (A)' },
                    { title: 'ACT prep (A)', value: 'act prep (A)' },
                    { title: 'AP prep (A)', value: 'ap prep (A)' },
                    { title: 'Internships (A)', value: 'internships (A)' },
                    { title: 'Scholarships + financial aid (A)', value: 'scholarships + financial aid (A)' },
                    { title: 'Resume + portfolio building (A)', value: 'resume + portfolio building (A)' },
                ],
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
            validation: Rule => Rule.max(1000).warning('Reached 1000 characters.'),
        }),
    ]
}


export default MentorPageSchema;