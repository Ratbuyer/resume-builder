import {educationListType, settingsType} from "@constants/types";
import {StyleSheet, Text, View} from "@react-pdf/renderer";


const Education = (
    {
        education,
        settings
    }: {
        education: educationListType
        settings: settingsType
    }
) => {
    const styles = StyleSheet.create({
        title_style: {
            backgroundColor: "#f2f2f2",
            textAlign: "left",
            fontSize: settings.fontSize + 4,
            fontWeight: "normal",
            color: "#000f61",
            margin: 10,
        },
        record_style: {
            flexDirection: "column",
            marginHorizontal: 10,
            marginVertical: 5,
            rowGap: 7
        },
        duration: {
            textAlign: "left",
            paddingHorizontal: 5
        },
        degree: {
            textAlign: "justify",
            paddingHorizontal: 5
        },


    })

    return <>
        <Text style={styles.title_style}> Education </Text>
        {education.map((record, index) => {
            const school_info = record.school + " - " + record.location
            return (
                <View key={index} style={styles.record_style}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.duration}>{record.duration}</Text>
                        <View style={{rowGap: 5}}>
                            <Text style={styles.degree}>{school_info}</Text>
                            <Text style={styles.degree}>{record.degree}</Text>
                        </View>
                    </View>
                </View>
            )
        })}
    </>
}

export default Education;
