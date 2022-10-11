import "../styles/color.scss";
import "../styles/global.scss";
import { LangContextProvider } from "store/LangContext";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <LangContextProvider currentLang={router.locale}>{getLayout(<Component {...pageProps} />)}</LangContextProvider>;
}

export default MyApp;
