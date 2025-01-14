import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-white dark:bg-slate-800 scroll-smooth" lang="en">
      <Head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/fajarblog/porto/faviconF.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics untuk monitoring visitor dengan Google Analytic */}
        <script async src="/api/analytics"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.myTrackingLayer = window.myTrackingLayer || [];
            function myTracker(){myTrackingLayer.push(arguments);}
            myTracker('js', new Date());
            myTracker('config', 'G-E72GCSKST1');
          `,
          }}
        />

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-E72GCSKST1"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E72GCSKST1');
            `,
          }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
