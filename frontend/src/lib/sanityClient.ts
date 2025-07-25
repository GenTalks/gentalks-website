import { createClient, SanityClient } from '@sanity/client';

export const sanityClient: SanityClient = createClient({
  projectId: 'bo14mcn7',   
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-01',
});
