import "../styles/color.scss";
import "../styles/global.scss";
import { LangContextProvider } from "store/LangContext";

String.prototype.toLocaleCapitalCase = function (locale) {
  return this.split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase(locale) + word.slice(1))
    .join(" ");
};

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <LangContextProvider currentLang={router.locale}>{getLayout(<Component {...pageProps} />)}</LangContextProvider>
  );
}

export default MyApp;
