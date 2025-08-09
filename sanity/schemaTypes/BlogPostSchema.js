import { defineField } from 'sanity'

const BlogPostSchema = {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) =>
                Rule.required()
                    .custom(async (slug, context) => {
                        const { document, getClient } = context
                        if (!slug?.current) return "Slug is required"

                        const client = getClient({ apiVersion: '2023-01-01' })

                        const existing = await client.fetch(
                            `*[_type == $type && slug.current == $slug && _id != $id][0]{
            _id
          }`,
                            {
                                type: document._type,
                                slug: slug.current,
                                id: document._id,
                            }
                        )
                        return existing ? "Slug must be unique" : true
                    }),
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            description: 'Short summary or excerpt of the post',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),
        defineField({
            name: 'group',
            title: 'Group',
            type: 'string',
            options: {
                list: [
                    { title: 'Staff', value: 'staff' },
                    { title: 'Student', value: 'student' },
                ],
            },
            validation: Rule => Rule.required(),
        }),
    ]
}


export default BlogPostSchema;