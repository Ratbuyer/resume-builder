import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Loading from "~/components/loading";
import { useState, useEffect } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [deviceType, setDeviceType] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDeviceType(0);
    } else {
      setDeviceType(1);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!deviceType) {
    return <p className="text-center mt-20">please use a larger device for a better experience</p>;
  }

  return <>
    <title>Resume Dev Tool</title>
    <Component {...pageProps} />
    <Analytics />
  </>;
};

export default api.withTRPC(MyApp);