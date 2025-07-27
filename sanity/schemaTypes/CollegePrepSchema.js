import { defineField } from 'sanity'


const CollegePrepSchema = {
    name: 'collegeprep',
    title: 'CollegePrep',
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
                    { title: 'Applications', value: 'applications' },
                    { title: 'Pathways', value: 'pathways' },
                    { title: 'Financial aid', value: 'financial aid' },
                    { title: 'Exploring college', value: 'exploring college' },
                    { title: 'Emotional support', value: 'emotional support' },
                    { title: 'Post-acceptance', value: 'post-acceptance' },
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


export default CollegePrepSchema;