import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
