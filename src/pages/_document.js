/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet';
import React  from 'react';
import Script from 'next/script';


// Via https://github.com/vercel/next.js/blob/canary/examples/with-react-helmet/pages/_document.js

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>{this.helmetHeadComponents}
        <script  src="/js/jquery.js" />
        
      <script async src='/js/fancybox.js' id='modula-fancybox-js' />
      <link rel='stylesheet' id='modula-video-css-css' href='https://old.simpleframe.pl/wp-content/plugins/modula-video/assets/css/modula-video-css.css?ver=6.1.1' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-css' href='https://old.simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.7.3' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-pro-effects-css' href='https://old.simpleframe.pl/wp-content/plugins/modula/assets/css/effects.min.css' type='text/css' media='all' />
      <script async src='/js/fancybox-modula-video.js' id='modula-fancybox-video-js' />
      <script async src='/js/modula-wf.js' id='modula-wf-js' />
      <script async src='/js/modula-pro.js' id='modula-pro-js' />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-48180877-8"
        strategy="afterInteractive"
      />
      
   

      <Script id="google-analytics" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-48180877-8');
        `}
      </Script>
      
     
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
