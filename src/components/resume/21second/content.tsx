import {
    awardsListType,
    educationListType,
    experienceListType,
    projectsListType, settingsType,
} from "@constants/types";
import {View} from "@react-pdf/renderer";

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
        <View>

        </View>
        <View></View>
        <View></View>
        <View></View>
    </>
}

export default Content;