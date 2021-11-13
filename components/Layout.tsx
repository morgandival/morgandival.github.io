import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
