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
        <script src="/js/jquery.js" />
      <script  src='/js/fancybox.js' id='modula-fancybox-js' />
      <link rel='stylesheet' id='modula-video-css-css' href='/css/modula-video.css' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-css' href='/css/modula-css.css' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-pro-effects-css' href='/css/modula-pro.css' type='text/css' media='all' />
      <script src='/js/fancybox-modula-video.js' id='modula-fancybox-video-js' />
      <script  src='/js/modula-wf.js' id='modula-wf-js' />
      <script  src='/js/modula-pro.js' id='modula-pro-js' />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10799461749"
        strategy="afterInteractive"
      />
      
   
      <Script src="/js/hotjar.js"  strategy="afterInteractive"/>
      <Script id="google-analytics"  strategy="afterInteractive" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FMNR987MP7');
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
