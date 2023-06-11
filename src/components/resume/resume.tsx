import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import Head from "./header";
import Education from "./education";
import Skills from "../../samples/eddy/skills";
import Experience from "../../samples/eddy/experience";
import Projects from "../../samples/eddy/projects";
import Awards from "../../samples/eddy/awards";

import * as type from "../types";

const white = "#ffffff";
const light_blue = "#BFDBFE";
const light_beige = "#F5F5DC";

const Resume = ({
  header,
  educationList, }:
  {
    header: type.headerType,
    educationList: type.educationListType
  }) => {

  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={{ backgroundColor: white, padding: 20, fontFamily: "Courier", }}>
            <Head header={header} />
            <Education educationList={educationList} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>
};

export default Resume;
