import rss from '@astrojs/rss';

export async function GET(context) {
  const allPosts = Object.values(import.meta.glob('./**/*.md', { eager: true }));

  // Filter out draft posts
  const publishedPosts = allPosts.filter(post => post.frontmatter && post.frontmatter.tags && !post.frontmatter.tags.includes('draft'));

  return rss({
    title: 'Martin Berrisford | Blog',
    description: 'A digital accessibility blog',
    site: context.site,
    items: publishedPosts.map(post => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
    })),
    customData: `<language>en-ca</language>`,
  });
}