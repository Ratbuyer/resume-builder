import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import Copyright from "~/components/copyright";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />
    <Copyright />
  </>;
};

export default api.withTRPC(MyApp);