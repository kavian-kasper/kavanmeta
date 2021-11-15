import Head from "next/head";
import Script from 'next/script'

export const HeadInfo = (props) => {
    const title = props.title;
    return (
      <>
      <Head>
        <title>{title} ｜ KavanMeta</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="KavanMeta is creating graphics for the coming metaverse."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.gif" />
      </Head>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      </>
    )
}
export default HeadInfo
