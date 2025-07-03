import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import { allBlogs } from 'contentlayer/generated';
import { useMDXComponent } from '@/components/mdx';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`https://webnexaai.com/blog/${post.slug}`}
        openGraph={{
          url: `https://webnexaai.com/blog/${post.slug}`,
          title: post.title,
          description: post.description,
          images: [
            {
              url: 'https://webnexaai.com/logo.png',
              width: 800,
              height: 600,
              alt: post.title,
            },
          ],
          site_name: 'WebNexaAI',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/blog', label: 'Blog' },
        { href: `/blog/${post.slug}`, label: post.title }
      ]} />
      <Script id="blogposting-schema" type="application/ld+json" strategy="afterInteractive">{`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "${post.title}",
          "description": "${post.description}",
          "datePublished": "${post.date}",
          "author": {
            "@type": "Person",
            "name": "${post.author || 'WebNexaAI'}"
          },
          "image": ["https://webnexaai.com/logo.png"],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://webnexaai.com/blog/${post.slug}"
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="mb-6 text-gray-400 text-sm flex flex-wrap gap-4 items-center">
          <span>{post.date}</span>
          {post.author && <span>By {post.author}</span>}
          <span className="flex flex-wrap gap-2">{post.tags?.map((tag: string) => (
            <span key={tag} className="bg-blue-700/30 px-2 py-1 rounded text-xs">{tag}</span>
          ))}</span>
        </div>
        <article className="prose prose-invert max-w-none">
          <MDXContent />
        </article>
      </main>
    </>
  );
} 