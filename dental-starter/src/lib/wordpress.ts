import { siteConfig } from "@/config/site";
import type {
  Service,
  TeamMember,
  Testimonial,
  BlogPost,
  FAQ,
} from "@/types";

async function fetchGraphQL<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(siteConfig.wpGraphqlUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  return json.data;
}

export async function getServices(): Promise<Service[]> {
  // TODO: Implement when WordPress is connected
  const { fallbackServices } = await import("@/data/fallback");
  return fallbackServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((s) => s.slug === slug);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const { fallbackTeam } = await import("@/data/fallback");
  return fallbackTeam;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const { fallbackTestimonials } = await import("@/data/fallback");
  return fallbackTestimonials;
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const { fallbackBlogPosts } = await import("@/data/fallback");
  return limit ? fallbackBlogPosts.slice(0, limit) : fallbackBlogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getFAQs(): Promise<FAQ[]> {
  const { fallbackFAQs } = await import("@/data/fallback");
  return fallbackFAQs;
}

export { fetchGraphQL };
