import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import GoogleAnalytics from '../components/GoogleAnalytics';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GoogleAnalytics measurementID="G-J8EH3GEGRQ" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
