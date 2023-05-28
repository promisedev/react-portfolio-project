import React from 'react'
import { Helmet } from 'react-helmet'

export const SEO = ({ title, description, image, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:image" content={image} />
      <meta name="description" content={description} />
      <meta name="twitter:card" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
