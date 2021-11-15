import Document, { Html, Head, Main, NextScript, Script } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <link href="https://fonts.googleapis.com/css?family=Nunito:700&display=swap" rel="stylesheet"></link>

                    <meta property="og:title" content="Metatoons - NFTs by KavanMeta" />
                    <meta property="og:url" content="https://kavanmeta.io" />
                    <meta property="og:image" content="https://kavanmeta.vercel.app/social.jpg" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Bespoke 3D Avatars primed for a future metaverse."/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@kavanmeta"/>
                    <meta name="twitter:title" content="Metatoons - NFTs by KavanMeta"/>
                    <meta name="twitter:description" content="Bespoke 3D Avatars primed for a future metaverse."/>
                    <meta name="twitter:image" content="https://kavanmeta.vercel.app/social.jpg"/>


                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument