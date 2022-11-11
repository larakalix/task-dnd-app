import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HydrateGuard } from "@/guard/HydrateGuard";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <HydrateGuard>
            <Component {...pageProps} />
        </HydrateGuard>
    );
}
