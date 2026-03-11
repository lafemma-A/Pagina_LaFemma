import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vr7c4rez";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Validate projectId format for Sanity
if (!/^[a-z0-9-]+$/.test(projectId)) {
    console.warn(`⚠️ Invalid Sanity projectId: "${projectId}". Using fallback data.`);
}

export const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

// Helper for fetching data
export async function sanityFetch<T>({
    query,
    params = {},
}: {
    query: string;
    params?: any;
}): Promise<T> {
    return client.fetch(query, params, {
        next: { revalidate: 3600 }, // Cache for 1 hour by default
    });
}
