import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import Footer from "./components/Footer";
export default function App({ Component, pageProps }) {
  return <I18nextProvider i18n={i18n}>
    <Component {...pageProps} />;
    <Footer/>
  </I18nextProvider>
}
