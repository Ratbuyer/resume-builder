import type * as types from '@constants/types';
// import Head from "~/components/resume/jake/header";
// import Education from "~/components/resume/jake/education";
// import Skills from "~/components/resume/jake/skills";
// import Experience from "~/components/resume/jake/experience";
// import Projects from "~/components/resume/jake/projects";
// import Awards from "~/components/resume/jake/awards";
import {Text, View} from "@react-pdf/renderer";
import Header from "@components/resume/21second/header";
import Content from "@components/resume/21second/content";


const TwentyOneSecond = (
    {
        header,
        educationList,
        skillsList,
        experienceList,
        projectList,
        awardsList,
        settings,
    }: {
        header: types.headerType,
        educationList: types.educationListType,
        skillsList: types.skillsListType,
        experienceList: types.experienceListType,
        projectList: types.projectsListType,
        awardsList: types.awardsListType,
        settings: types.settingsType
    }
) => {

    return <View style={{
        flexDirection: "row",
        // textAlign:"center",
        fontWeight:'bold',
        height:"100%"
    }}>
        <View style={{
            width:'33%',
            backgroundColor:'#f2f2f2',
            padding:10
        }}>
            <Header header={header} skillList={skillsList} settings={settings}/>
        </View>
        <View style={{width:'67%'}}>
            <Content educationList={educationList}
                     // skillsList={skillsList}
                     experienceList={experienceList}
                     projectList={projectList}
                     awardsList={awardsList}
                     settings={settings}/>
        </View>
    </View>
}

export default TwentyOneSecond;