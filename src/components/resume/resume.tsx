import { Page, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Head from "./header";
import Education from "./education";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Awards from "./awards";
import type * as types from "@constants/types";
import "~/fonts/remote";
import "~/fonts/local";
import { colorTable } from "~/constants/values";

const Resume = ({
  header,
  educationList,
  skillsList,
  awardsList,
  experienceList,
  projectList,
  settings,
}: {
  header: types.headerType,
  educationList: types.educationListType
  skillsList: types.skillsListType
  awardsList: types.awardsListType
  experienceList: types.experienceListType
  projectList: types.projectsListType
  settings: types.settingsType
}) => {

  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Document>

          <Page size="A4" style={{
            backgroundColor: colorTable.find(([key]) => key === settings.color)?.[1] ?? "#ffffff",
            padding: 20,
            fontFamily: settings.font,
            fontSize: settings.fontSize,
          }}>

            <Head header={header} settings={settings} />
            <Education educationList={educationList} settings={settings} />
            <Skills skillsList={skillsList} settings={settings} />
            <Experience experienceList={experienceList} settings={settings} />
            <Projects projectList={projectList} settings={settings} />
            <Awards awardsList={awardsList} settings={settings} />

          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>
};

export default Resume;
