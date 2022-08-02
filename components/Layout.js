import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

const Layout = ({ metaDatas = {}, children }) => {
  const {
    meta_title = "", 
    meta_description = "", 
    keywords = "", 
    og_title = "", 
    og_description = "", 
    og_image = "", 
    og_image_width = 1200, 
    og_image_height = 628, 
    og_image_type = "", 
    twitter_title = "", 
    twitter_description = "", 
    twitter_card = "", 
    twitter_image = "", 
    twitter_site = "" 
  } = metaDatas || {}
  return (
    <div>
      <Head>
        {/* Initial Meta details */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="favicon.ico" /> */}

        <title>{meta_title}</title>

        {/* Custom metas */}
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={og_title} />
        <meta property="og:description" content={og_description} />
        <meta property="og:image" content={og_image} />
        <meta property="og:image:width" content={og_image_width} />
        <meta property="og:image:height" content={og_image_height} />
        <meta property="og:image:type" content={og_image_type} />
        <meta name="twitter:card" content={twitter_card} />
        <meta name="twitter:title" content={twitter_title} />
        <meta name="twitter:site" content={twitter_site} />
        <meta name="twitter:description" content={twitter_description} />
        <meta name="twitter:image" content={twitter_image} />

        {/* <!-- BS5 Style --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header/>
      <div className="mb-5">{children}</div>
      
      <Footer />
      {/* <!-- BS5 Script --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  );
};


export default Layout;
