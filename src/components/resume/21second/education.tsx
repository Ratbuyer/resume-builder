import {educationListType, settingsType} from "@constants/types";
import {Text, View} from "@react-pdf/renderer";


const Education = (
    {
        education,
        settings
    } : {
        education: educationListType
        settings: settingsType
    }
) => {
    const title_style = {
        backgroundColor: "#f2f2f2",
        textAlign: "left",
        fontSize: settings.fontSize + 4
    }
    return <>
        <Text> Education </Text>
        <Text> {education.length }</Text>
    </>
}