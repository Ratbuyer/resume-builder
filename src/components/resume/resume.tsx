import { Page, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import Head from "./header";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Awards from "./awards";

import type * as types from "../../constants/types";

import { colorTable } from "../../constants/constants";

const Resume = ({
  header,
  educationList,
  skillsList,
  awardsList,
  experienceList,
  projectList,
}:
  {
    header: types.headerType,
    educationList: types.educationListType
    skillsList: types.skillsListType
    awardsList: types.awardsListType
    experienceList: types.experienceListType
    projectList: types.projectsListType
  }) => {

  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={{ backgroundColor: colorTable.white, padding: 20, fontFamily: "Courier", }}>
            <Head header={header} />
            <Education educationList={educationList} />
            <Skills skillsList={skillsList} />
            <Experience experienceList={experienceList}/>
            <Projects projectList={projectList} />
            <Awards awardsList={awardsList} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>
};

export default Resume;
