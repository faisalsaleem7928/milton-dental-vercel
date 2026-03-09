/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.miltondentalclinic.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    let priority = config.priority;
    if (path === "/") priority = 1.0;
    else if (path.startsWith("/services")) priority = 0.9;
    else if (path.startsWith("/blog/")) priority = 0.6;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
