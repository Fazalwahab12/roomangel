import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Software & Digital Marketing Solutions `}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="DEVMATE"
        content="Checkmate your software and digital marketing goals with DEVMATE 🎯🚀"
      />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/red-logo.png" />
    </Head>
  </>
);

export default SEO;
