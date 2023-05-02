import Head from "next/head";
import type { AppProps } from "next/app";
import { HydrateGuard } from "@/guard/HydrateGuard";
import { Layout } from "@/components/layout/Layout";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const domain = "https://task-dnd-app.vercel.app";

    return (
        <HydrateGuard>
            <Head>
                <meta property="og:url" content={domain} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Dnd Task App | Ivan Lara" />
                <meta
                    property="og:description"
                    content="I'm Ivan Lara, I build digital products based on your business needs."
                />
                <meta property="og:image" content={`${domain}/preview.gif`} />

                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <Layout />
            <main>
                <Component {...pageProps} />
            </main>
        </HydrateGuard>
    );
}
