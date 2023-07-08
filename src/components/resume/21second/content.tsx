import {
    awardsListType,
    educationListType,
    experienceListType,
    projectsListType, settingsType,
} from "@constants/types";
import {View} from "@react-pdf/renderer";
import Education from "@components/resume/21second/education";
import Experience from "@components/resume/21second/experience";

const Content = (
    {
        educationList,
        experienceList,
        projectList,
        awardsList,
        settings,
    } : {
        educationList : educationListType,
        experienceList : experienceListType,
        projectList : projectsListType,
        awardsList : awardsListType,
        settings : settingsType,
    }
) => {
    return <>
        <Education education={educationList} settings={settings}/>
        <Experience experience={experienceList} settings={settings}/>

    </>
}

export default Content;