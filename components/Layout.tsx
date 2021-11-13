import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
