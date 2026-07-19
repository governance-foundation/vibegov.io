type FaqDocModule = {
  frontMatter: {
    homepage?: boolean;
    homepage_summary?: string;
    question?: string;
    sidebar_position?: number;
  };
  metadata: {
    permalink: string;
    title: string;
  };
};

export type HomepageFaqItem = {
  question: string;
  href: string;
  summary: string;
};

const faqContext = require.context(
  '@site/docs/faq',
  false,
  /\.md$/,
) as {
  keys(): string[];
  (key: string): FaqDocModule;
};

export function getHomepageFaqItems(): HomepageFaqItem[] {
  return faqContext
    .keys()
    .map((key) => {
      const {frontMatter, metadata} = faqContext(key);
      return {frontMatter, metadata};
    })
    .filter(({frontMatter}) => Boolean(frontMatter.homepage))
    .sort(
      (a, b) =>
        (a.frontMatter.sidebar_position ?? 0) -
        (b.frontMatter.sidebar_position ?? 0),
    )
    .map(({frontMatter, metadata}) => ({
      question: String(frontMatter.question ?? metadata.title),
      href: metadata.permalink,
      summary: String(
        frontMatter.homepage_summary ??
          'Read the linked doc for the full answer.',
      ),
    }));
}
