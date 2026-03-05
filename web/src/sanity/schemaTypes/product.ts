import { defineField, defineType } from 'sanity';

export const productType = defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre de la Pieza',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (ej: Pieza I)',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Precio (USD)',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            options: {
                list: [
                    { title: 'Memoria', value: 'Memoria' },
                    { title: 'Textura', value: 'Textura' },
                    { title: 'Estructura', value: 'Estructura' },
                    { title: 'Movimiento', value: 'Movimiento' },
                    { title: 'Minimalismo', value: 'Minimalismo' },
                    { title: 'Legado', value: 'Legado' },
                    { title: 'Sensorial', value: 'Sensorial' },
                    { title: 'Aire', value: 'Aire' },
                    { title: 'Geometría', value: 'Geometría' },
                    { title: 'Claroscuro', value: 'Claroscuro' },
                    { title: 'Ajuste', value: 'Ajuste' },
                    { title: 'Exclusivo', value: 'Exclusivo' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'gallery',
            title: 'Galería de Imágenes',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'description',
            title: 'Historia de la Prenda',
            type: 'text',
            rows: 5,
        }),
        defineField({
            name: 'specs',
            title: 'Especificaciones Técnicas',
            type: 'object',
            fields: [
                { name: 'material', title: 'Material', type: 'string' },
                { name: 'origin', title: 'Origen', type: 'string', initialValue: 'Medellín, Colombia' },
                { name: 'density', title: 'Densidad / Caída', type: 'string' },
                { name: 'care', title: 'Cuidados', type: 'string' },
            ],
        }),
        defineField({
            name: 'sizes',
            title: 'Tallas Disponibles',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'XS', value: 'XS' },
                    { title: 'S', value: 'S' },
                    { title: 'M', value: 'M' },
                    { title: 'L', value: 'L' },
                    { title: 'XL', value: 'XL' },
                    { title: 'Única', value: 'Única' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'subtitle',
            media: 'image',
        },
    },
});
