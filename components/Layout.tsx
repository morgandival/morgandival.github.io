import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
