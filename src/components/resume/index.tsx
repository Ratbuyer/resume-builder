import { Page, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import type * as types from "@constants/types";
import "~/fonts/remote";
import "~/fonts/local";
import { colorTable } from "~/constants/values";
import Jakes_template from "./kyvernetes"

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

            <Jakes_template
              header={header}
              educationList={educationList}
              skillsList={skillsList}
              experienceList={experienceList}
              projectList={projectList}
              awardsList={awardsList}
              settings={settings} />

          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>
};

export default Resume;
