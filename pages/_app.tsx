import type { AppProps /*, AppContext */ } from "next/app";
import { SessionProvider } from "next-auth/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
