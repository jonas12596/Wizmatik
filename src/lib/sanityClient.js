// src/lib/sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "9fhrft2z", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2022-03-07", // Use a current date-based version for the API
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
