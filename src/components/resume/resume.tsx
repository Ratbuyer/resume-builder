import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import Head from "./header";
import Education from "./education";
import Skills from "./skills";
import Experience from "../../samples/eddy/experience";
import Projects from "../../samples/eddy/projects";
import Awards from "./awards";

import * as type from "../types";

import { colorTable } from "../constants";

const Resume = ({
  header,
  educationList,
  skillsList,
  awardsList,
}:
  {
    header: type.headerType,
    educationList: type.educationListType
    skillsList: type.skillsListType
    awardsList: type.awardsListType
  }) => {

  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={{ backgroundColor: colorTable.ivory, padding: 20, fontFamily: "Courier", }}>
            <Head header={header} />
            <Education educationList={educationList} />
            <Skills skillsList={skillsList} />
            <Awards awardsList={awardsList} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>
};

export default Resume;
