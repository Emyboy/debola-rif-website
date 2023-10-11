import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.BlogContentSlice} BlogContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogContentSlice>} BlogContentProps
 * @param {BlogContentProps}
 */
const BlogContent = ({ slice }) => {
  return <PrismicRichText field={slice.primary.content} />;
};

export default BlogContent;
