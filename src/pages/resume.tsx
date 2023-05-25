import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import Head from "../components/head"
import Line from "../components/line"

const white = "#ffffff"
const light_blue = "#D6EAF8";
const Light_Beige = "#F5F5DC";

const styles = StyleSheet.create({
  page: {
    backgroundColor: white,
    padding: 20,
  },
});


const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Head />
      <Line />
    </Page>
  </Document>
);


const App = () => {
  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Resume />
      </PDFViewer>
    </div>
  </>
};

export default App;
