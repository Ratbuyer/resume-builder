import {Text} from "@react-pdf/renderer";
import {settingsType} from "@constants/types";


const Title21sec = (
    {
        title,
        settings,
    }:{
        title:string,
        settings:settingsType
    }
) => {

    return <Text style={{
        backgroundColor: "#f2f2f2",
        textAlign: "left",
        fontSize: settings.fontSize + 4,
        fontWeight: "normal",
        color: "#000f61",
        margin: 10,
    }}>{title}</Text>
}

export default Title21sec;