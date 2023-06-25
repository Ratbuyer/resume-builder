import type * as types from '@constants/types';
import Head from "~/components/resume/jakes/header";
import Education from "~/components/resume/jakes/education";
import Skills from "~/components/resume/jakes/skills";
import Experience from "~/components/resume/jakes/experience";
import Projects from "~/components/resume/jakes/projects";
import Awards from "~/components/resume/jakes/awards";
const Jakes_template = (
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

export default Jakes_template;