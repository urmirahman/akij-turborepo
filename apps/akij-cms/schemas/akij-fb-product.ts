import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                imageHotspot: {
                    imagePath: `featureImage`,
                    descriptionPath: `details`,
                    tooltip: undefined,
                }
            }
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string'
        }),
    ]
})
