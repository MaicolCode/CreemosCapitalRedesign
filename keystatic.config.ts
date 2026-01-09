import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        news: collection({
            label: 'Noticias',
            slugField: 'title',
            path: 'src/content/news/*',
            format: { data: 'yaml', contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                pubDate: fields.date({ label: 'Publication Date' }),
                heroImage: fields.image({
                    label: 'Hero Image',
                    directory: 'public/images/news',
                    publicPath: '/images/news/',
                }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Analisis Técnico', value: 'technical' },
                        { label: 'Inversión', value: 'investment' },
                    ],
                    defaultValue: 'technical',
                }),
                author: fields.text({ label: 'Author', defaultValue: 'Creemos Capital Team' }),
                externalUrl: fields.url({ label: 'External URL (Optional - For redirection)' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/news/content',
                        publicPath: '/images/news/content/',
                    },
                }),
            },
        }),
    },
});
