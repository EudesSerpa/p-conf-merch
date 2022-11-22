import { Helmet } from 'react-helmet';

export const Seo = ({ pageTitle, description }) => {
  return (
    <Helmet>
      <title>{`Platzi Conf Merch | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://platzi-store-9f1f2.web.app" />
    </Helmet>
  );
};
