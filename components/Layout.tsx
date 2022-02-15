import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
