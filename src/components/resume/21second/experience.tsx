import {experienceListType, settingsType, skillsListType} from "@constants/types";
import {StyleSheet, Text} from "@react-pdf/renderer";
import {View} from "@react-pdf/renderer";
import {id} from "postcss-selector-parser";

const Experience = (
    {
        experience,
        settings,
    } : {
        experience: experienceListType,
        settings: settingsType
    }
) => {
    const styles = StyleSheet.create({
        title_style : {
            backgroundColor: "#f2f2f2",
            textAlign: "left",
            fontSize: settings.fontSize + 4,
            fontWeight: "normal",
            color: "#000f61",
            margin: 10,
        },
        record_style : {
            flexDirection: "row",
            marginHorizontal: 10,
            marginVertical: 5,
            border:1,
        },
        duration_style: {
            width: "30%",
            border: 1,
        },
        content_style: {
            width:"70%",
            border:1,
        },
        outline_style:{
            flexDirection: "row",
            justifyContent: "space-between"
        },
        detail_style: {

        }
    });
    return <>
        <Text style={styles.title_style}> Experience </Text>
        {experience.map((value, index)=> {
            return (
                <View key={index} style={styles.record_style}>
                    <Text style={styles.duration_style}>{value.duration}</Text>
                    <View style={styles.content_style}>
                        <View style={styles.outline_style}>
                            <Text style={{border:1}}>{value.title}</Text>
                            <Text style={{border:1}}>{value.company}</Text>
                        </View>
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

export default Experience;