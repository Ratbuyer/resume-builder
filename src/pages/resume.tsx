import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import Head from "../components/head"
import Line from "../components/line"

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
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
