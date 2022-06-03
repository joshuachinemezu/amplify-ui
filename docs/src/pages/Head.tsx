import NextHead from 'next/head';
import { capitalizeString } from '@/utils/capitalizeString';
import { useCustomRouter } from '@/components/useCustomRouter';
import metaData from '@/data/pages.preval';
import { PREVIEW_HEIGHT, PREVIEW_WIDTH } from '@/data/preview';
import { FRAMEWORKS } from '@/data/frameworks';

import { getImagePath } from '@/utils/previews';

export const Head = () => {
  const {
    asPath,
    pathname,
    query: { platform = 'react' },
  } = useCustomRouter();
  const asPathname = pathname.replace('[platform]', String(platform));
  const filepath = `/${pathname
    .split('/')
    .filter((n) => n && n !== '[platform]')
    .join('/')}`;
  const { title, metaTitle, description, metaDescription } =
    metaData[pathname]?.frontmatter ?? {};

  if ((!description && !metaDescription) || (!title && !metaTitle)) {
    throw new Error(`Meta Info missing on ${filepath}`);
  }

  const pageTitle = `${metaTitle ?? title} | ${capitalizeString(
    platform
  )} - Amplify UI`;

  const homepagePaths = [
    '/',
    ...FRAMEWORKS.map((framework) => `/${framework}`),
  ];

  return (
    <NextHead>
      <title>{pageTitle}</title>
      {homepagePaths.includes(asPath) && (
        <link rel="canonical" href="https://ui.docs.amplify.aws/" />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription ?? description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="object" />
      <meta property="og:url" content={`${process.env.SITE_URL}${asPath}`} />
      <meta
        property="og:image"
        content={process.env.SITE_URL + getImagePath(asPathname)}
      />
      <meta property="og:image:width" content={String(PREVIEW_WIDTH)} />
      <meta property="og:image:height" content={String(PREVIEW_HEIGHT)} />
      <meta
        property="og:image:secure_url"
        content={process.env.SITE_URL + getImagePath(asPathname)}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={metaDescription ?? description} />
    </NextHead>
  );
};