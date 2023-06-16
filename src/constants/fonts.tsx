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

