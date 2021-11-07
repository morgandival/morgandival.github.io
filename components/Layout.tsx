import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <main className="col-start-1 col-end-13 grid grid-cols-12">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
