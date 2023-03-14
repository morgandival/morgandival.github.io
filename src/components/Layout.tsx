import Header from './Header';
import Footer from './Footer';

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
