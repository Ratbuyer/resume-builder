import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from "react";

import Head from "../samples/eddy/head";
import Education from "../samples/eddy/education";
import Skills from "../samples/eddy/skills";
import Experience from "../samples/eddy/experience";
import Projects from "../samples/eddy/projects";
import Awards from "../samples/eddy/awards";

const white = "#ffffff";
const light_blue = "#D6EAF8";
const Light_Beige = "#F5F5DC";

const styles = StyleSheet.create({
  page: {
    backgroundColor: white,
    padding: 20,
    fontFamily: "Courier",
  },
});


const Resume = () => {
  return <>
    <Document>
      <Page size="A4" style={styles.page}>
        <Head />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
      </Page>
    </Document>
  </>
};


const App = () => {


  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Resume/>
      </PDFViewer>
    </div>
  </>
};

export default App;
