import {projectsListType, settingsType} from "@constants/types";
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import Title21sec from "@components/resume/components/title21sec";


const Projects = (
    {
        projects,
        settings,
    }: {
        projects: projectsListType,
        settings: settingsType
    }
) => {
    const styles = StyleSheet.create({
        record_style: {
            flexDirection: "row",
            marginHorizontal: 10,
            marginVertical: 5,
        },
        duration_style: {
            width: "30%",
        },
        content_style: {
            width: "70%",
        },
        outline_style: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        detail_style: {
            fontWeight: "normal",
        }
    });
    return <>
        <Title21sec title={"Projects"} settings={settings}/>
        {projects.map((value, index) => {
            return (
                <View key={index} style={styles.record_style}>
                    <Text style={styles.duration_style}>{value.name}</Text>
                    <View style={styles.content_style}>
                        <Text>{value.description}</Text>
                        <View style={styles.detail_style}>
                            {value.contributions.map((point, idx) => {
                                return (
                                    <Text key={idx}>{"-" + point}</Text>
                                )
                            })}
                        </View>
                    </View>
                </View>
            )
        })}
    </>
}

export default Projects;