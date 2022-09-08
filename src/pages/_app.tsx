import "@/assets/styles/globals.css";
import "@/services/i18n/i18n";
import store from "@/store/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default store.withRedux(MyApp);