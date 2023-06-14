import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

const MyApp: AppType = ({ Component, pageProps }) => {

  return <>
    <title>Resume Dev Tool</title>
    <Component {...pageProps} />
    <Analytics />
  </>;
};

export default api.withTRPC(MyApp);