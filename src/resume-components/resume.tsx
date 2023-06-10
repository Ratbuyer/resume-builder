import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import Head from "./head";
import Education from "../samples/eddy/education";
import Skills from "../samples/eddy/skills";
import Experience from "../samples/eddy/experience";
import Projects from "../samples/eddy/projects";
import Awards from "../samples/eddy/awards";

const white = "#ffffff";
const light_blue = "#BFDBFE";
const light_beige = "#F5F5DC";

const styles = StyleSheet.create({
  page: {
    backgroundColor: light_blue,
    padding: 20,
    fontFamily: "Courier",
  },
});

type HeaderType = {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
};


const App = ({ header }: { header: HeaderType }) => {

  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={styles.page}>
            <Head header={header}/>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>
};

export default App;
