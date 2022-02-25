import { FC } from 'react';
import Script from 'next/script';

type GoogleAnalyticsProps = {
  measurementID: string;
};

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ measurementID }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementID}`}
      />
      <Script strategy="afterInteractive" id="script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementID}');
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
