import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "qrhswns8",
    dataset:"production",
    apiVersion: "2025-07-18",
    useCdn: true,
    
});


const builder = imageUrlBuilder(client);


export const urlFor = (source: any) => {
    return builder.image(source);
// this function generates the URL for the image source passed to it, allowing you to display images from Sanity in your Next.js application.
}; 