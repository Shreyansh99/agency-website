import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Script from 'next/script';

// Demo: Read MDX file from /blog folder
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), 'blog', `${slug}.mdx`);
  let source, frontmatter;
  try {
    source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    frontmatter = data;
    source = content;
  } catch (e) {
    notFound();
  }

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        canonical={`https://webnexaai.com/blog/${slug}`}
        openGraph={{
          url: `https://webnexaai.com/blog/${slug}`,
          title: frontmatter.title,
          description: frontmatter.description,
          images: [
            {
              url: 'https://webnexaai.com/logo.png',
              width: 800,
              height: 600,
              alt: frontmatter.title,
            },
          ],
          site_name: 'WebNexaAI',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Script id="blogposting-schema" type="application/ld+json" strategy="afterInteractive">{`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "${frontmatter.title}",
          "description": "${frontmatter.description}",
          "datePublished": "${frontmatter.date}",
          "author": {
            "@type": "Person",
            "name": "${frontmatter.author}"
          },
          "image": ["https://webnexaai.com/logo.png"],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://webnexaai.com/blog/${slug}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WebNexaAI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://webnexaai.com/logo.png"
            }
          }
        }
      `}</Script>
      <main className="min-h-screen bg-black/90 text-white py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="mb-6 text-gray-400 text-sm flex flex-wrap gap-4 items-center">
          <span>{frontmatter.date}</span>
          <span>By {frontmatter.author}</span>
          <span className="flex flex-wrap gap-2">{frontmatter.tags?.map((tag: string) => (
            <span key={tag} className="bg-blue-700/30 px-2 py-1 rounded text-xs">{tag}</span>
          ))}</span>
        </div>
        <article className="prose prose-invert max-w-none">
          <MDXRemote source={source} />
        </article>
      </main>
    </>
  );
} 