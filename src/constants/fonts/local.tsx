import { Font } from '@react-pdf/renderer';

import NotoSansRegular from "public/fonts/NotoSans/NotoSans-Regular.ttf";
import NotoSansBold from "public/fonts/NotoSans/NotoSans-Bold.ttf";

Font.register({
  family: "Noto Sans",
  fonts: [
    {
      src: NotoSansRegular as string,
      fontWeight: "regular",
    },
    {
      src: NotoSansBold as string,
      fontWeight: 'bold',
    },
  ],
});

import MuktaRegular from "public/fonts/Mukta/Mukta-Regular.ttf";
import MuktaBold from "public/fonts/Mukta/Mukta-Bold.ttf";

Font.register({
  family: "Mukta",
  fonts: [
    {
      src: MuktaRegular as string,
      fontWeight: "regular",
    },
    {
      src: MuktaBold as string,
      fontWeight: 'bold',
    },
  ],
});