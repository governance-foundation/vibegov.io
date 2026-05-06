type DocusaurusMarkdownMetadata = {
  permalink: string;
  [key: string]: unknown;
};

declare module '@site/docs/faq/what-is-vibegov.md' {
  export const frontMatter: Record<string, unknown>;
  export const metadata: DocusaurusMarkdownMetadata;
  const MDXContent: any;
  export default MDXContent;
}

declare module '@site/docs/faq/when-do-i-use-bootstrap-init.md' {
  export const frontMatter: Record<string, unknown>;
  export const metadata: DocusaurusMarkdownMetadata;
  const MDXContent: any;
  export default MDXContent;
}

declare module '@site/docs/faq/when-do-i-use-bootstrap-update.md' {
  export const frontMatter: Record<string, unknown>;
  export const metadata: DocusaurusMarkdownMetadata;
  const MDXContent: any;
  export default MDXContent;
}

declare module '@site/docs/faq/when-do-i-use-the-feedback-prompt.md' {
  export const frontMatter: Record<string, unknown>;
  export const metadata: DocusaurusMarkdownMetadata;
  const MDXContent: any;
  export default MDXContent;
}
