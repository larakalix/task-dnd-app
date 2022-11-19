import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HydrateGuard } from "@/guard/HydrateGuard";
import { Layout } from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <HydrateGuard>
            <Layout />
            <main>
                <Component {...pageProps} />
            </main>
        </HydrateGuard>
    );
}
