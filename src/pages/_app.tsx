import { type AppType } from "next/dist/shared/lib/utils";
import localFont from "@next/font/local";

import "~/styles/globals.css";

const loubag = localFont({
  src: [
    {
      path: "../../public/fonts/Loubag-Black.ttf",
      weight: "900",
    },
    {
      path: "../../public/fonts/Loubag-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Loubag-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Loubag-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Loubag-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Loubag-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Loubag-Thin.ttf",
      weight: "200",
    },
  ],
  variable: "--font-loubag",
});
export const loubagFontClassname = loubag.className;
export const loubagFontVariable = loubag.variable;

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
