import { Helmet } from 'react-helmet';

const SEO = ({ pageTitle, description }) => {
  return (
    <Helmet>
      <title>{`Platzi Conf Merch | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://platzi-store-9f1f2.web.app" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EudesSerpa" />
      <meta name="twitter:creator" content="@EudesSerpa" />
      <meta name="twitter:title" content="Platzi Conf Merch" />
      <meta name="twitter:description" content="Platzi Conf Merch" />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/FHz2T4fx/controller-large.png"
      />
    </Helmet>
  );
};

export default { SEO };
