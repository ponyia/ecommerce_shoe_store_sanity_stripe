import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client =  sanityClient({
    projectId: 'gupkz4h1',
    dataset: 'production',
    apiVersion: '2022-11-16',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);