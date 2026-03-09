export const GET_SERVICES = `
  query GetServices {
    services(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        slug
        excerpt
        content
        serviceFields {
          icon
          order
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_SERVICE_BY_SLUG = `
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id
      title
      slug
      excerpt
      content
      serviceFields {
        icon
        order
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_TEAM_MEMBERS = `
  query GetTeamMembers {
    teamMembers(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        slug
        content
        teamMemberFields {
          jobTitle
          specialties
          education
          order
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_TESTIMONIALS = `
  query GetTestimonials {
    testimonials {
      nodes {
        id
        title
        content
        testimonialFields {
          rating
          source
          service
          date
        }
      }
    }
  }
`;

export const GET_BLOG_POSTS = `
  query GetBlogPosts($first: Int) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_FAQS = `
  query GetFAQs {
    faqs(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        content
      }
    }
  }
`;
