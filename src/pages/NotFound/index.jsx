import { Link, useRouteError } from 'react-router-dom';
import HEAD from '../../components/SEO';

export const NotFound = () => {
  const error = useRouteError();

  return (
    <>
      <HEAD pageTitle="Not found page" description="" />

      <section>
        <header>
          <h1>Page not found</h1>
        </header>

        <p>{error.statusText || error.message}</p>

        <footer>
          <Link to="/">Back to home 🔙</Link>
        </footer>
      </section>
    </>
  );
};
