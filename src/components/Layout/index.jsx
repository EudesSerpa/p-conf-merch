import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => {
  const navigator = useNavigation();

  return (
    <>
      <Header />

      <main className="main">
        {navigator.state === 'loading' ? <h2>Loading...</h2> : <Outlet />}
      </main>

      <Footer />
    </>
  );
};
