import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw7z.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjsGyI.ttf',
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc9.ttf',
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: "Montserrat",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aX8.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aX8.ttf",
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: "Comme",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/comme/v2/8QIUdirKhMbn-uG1kHz0MgviDe1z5cFr644fWsRO9w.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/comme/v2/8QIUdirKhMbn-uG1kHz0MgviDe1zAsZr644fWsRO9w.ttf",
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: "Advent Pro",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLQyNPTJoonw1aBA.ttf",
    },
    {
      src: "http://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLpCRPTJoonw1aBA.ttf",
      fontWeight: 'bold',
    },
  ],
});

import NotoSansRegular from "public/fonts/NotoSans-Regular.ttf";
import NotoSansBold from "public/fonts/NotoSans-Bold.ttf";

Font.register({
  family: "Noto Sans",
  fonts: [
    {
      src: NotoSansRegular as string,
    },
    {
      src: NotoSansBold as string,
      fontWeight: 'bold',
    },
  ],
});