import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  description?: string;
  siteUrl?: string;
  imageUrl?: any;
}
export const SEO: React.FC<Props> = ({ title, description, imageUrl, siteUrl }) => {
  const facebookAppId = process.env.NEXT_FB_DOMAIN_APP_ID as string;
  const defaultSiteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${siteUrl || ''}`;
  const defaultImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl}`; // prettier-ignore
  const defaultTitle = 'Apollo Logistics';
  const defaultDescription =
    description ??
    `Apollo elogistics was found in 2020 and it is a platform on mobile phone helping customers to be able to find delivery
  service of all kinds of goods to the destination on time limiting which covers 25 provinces and cities. All delivery
  operations are tracked on mobile phone from starting until the operation is finished and charging of service.`;

  return (
    <>
      <NextSeo
        title={`${title} | ${defaultTitle}`}
        description={defaultDescription}
        canonical={defaultSiteUrl}
        openGraph={{
          url: defaultSiteUrl,
          type: 'website',
          title: `${title} | ${defaultTitle}`,
          site_name: defaultTitle,
          description: defaultDescription,
          images: [{ url: defaultImageUrl, width: 1200, height: 630, alt: defaultTitle }]
        }}
        twitter={
          {
            // site: defaultSiteUrl,
            // cardType: 'summary_large_image'
          }
        }
        // facebook={{
        //   appId: `${FB_DOMAIN_APP_ID}`
        // }}
      />
      <NextSeo />
      <Head>
        <meta name="googlebot" content="index,follow" />
        <meta name="facebook-domain-verification" content={facebookAppId} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
