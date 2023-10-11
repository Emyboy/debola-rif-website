/**
 * @typedef {import("@prismicio/client").Content.BlogQuoteSlice} BlogQuoteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogQuoteSlice>} BlogQuoteProps
 * @param {BlogQuoteProps}
 */
const BlogQuote = ({ slice }) => {
  return (
    <blockquote>
      “{slice.primary.content}”<span>{slice.primary.author}</span>
    </blockquote>
  );
};

export default BlogQuote;
