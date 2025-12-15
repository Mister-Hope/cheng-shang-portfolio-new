import type { FC } from "react";

// Use markdown-it from global scope
declare const markdownit: any;
const md =
  typeof markdownit !== "undefined"
    ? markdownit({ html: true, linkify: true, typographer: true })
    : null;

interface MarkdownTextProps {
  content: string;
  className?: string;
}

const MarkdownText: FC<MarkdownTextProps> = ({ content, className = "" }) => {
  if (!md) return <span className={className}>{content}</span>;
  const html = md.renderInline(content);

  return (
    <span
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkdownText;
