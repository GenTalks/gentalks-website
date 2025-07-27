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
            name: 'categories',
            title: 'Categories',
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
            name: 'topics',
            title: 'Topics',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'checkbox',
                list: [
                    { title: 'General advice', value: 'general advice' },
                    { title: 'Academics', value: 'academics' },
                    { title: 'School involvement', value: 'school involvement' },
                    { title: 'Athletics', value: 'athletics' },
                    { title: 'Social & emotional support', value: 'social & emotional support' },
                    { title: 'How to adult', value: 'how to adult' },
                    { title: 'Internship review', value: 'internship review' },
                    { title: 'Scholarship review', value: 'scholarship review' },
                    { title: 'Personal growth', value: 'personal growth' },
                    { title: 'Long-term mentorship', value: 'long-term mentorship' },
                    { title: 'Networking', value: 'networking' },
                    { title: 'SAT prep', value: 'sAT prep' },
                    { title: 'ACT prep', value: 'aCT prep' },
                    { title: 'AP exam prep', value: 'aP exam prep' },
                ],
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required()
        }),
    ]
}


export default MentorPageSchema;