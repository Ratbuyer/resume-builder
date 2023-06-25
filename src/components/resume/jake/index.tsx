import type * as types from '@constants/types';
import Head from "~/components/resume/jake/header";
import Education from "~/components/resume/jake/education";
import Skills from "~/components/resume/jake/skills";
import Experience from "~/components/resume/jake/experience";
import Projects from "~/components/resume/jake/projects";
import Awards from "~/components/resume/jake/awards";


const Template = (
    {
        header,
        educationList,
        skillsList,
        experienceList,
        projectList,
        awardsList,
        settings,
    } : {
        header: types.headerType,
        educationList: types.educationListType,
        skillsList: types.skillsListType,
        experienceList: types.experienceListType,
        projectList: types.projectsListType,
        awardsList: types.awardsListType,
        settings: types.settingsType
    }
) => {

    return(
        <div>
            <Head header={header} settings={settings} />
            <Education educationList={educationList} settings={settings} />
            <Skills skillsList={skillsList} settings={settings} />
            <Experience experienceList={experienceList} settings={settings} />
            <Projects projectList={projectList} settings={settings} />
            <Awards awardsList={awardsList} settings={settings} />
        </div>
    )
}

export default Template;