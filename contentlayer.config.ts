import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: false },
    slug: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'app',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
}); 