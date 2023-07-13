import type * as types from '@constants/types'
import {View, Text} from "@react-pdf/renderer";
import Line from "@components/resume/components/line";
const Header = (
    {
        header,
        skillList,
        settings
    }: {
        header : types.headerType,
        skillList : types.skillsListType,
        settings : types.settingsType
    }
) => {
    return <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:settings.fontSize + 20}}>{header.name}</Text>
        <View style={{gap:1, marginBottom: 20, marginTop: 20}}>
            <Text>Phone: {header.phone}</Text>
            <Text>Email: {header.email}</Text>
            <Text>Github: {header.github}</Text>
            <Text>LinkedIn: {header.linkedin}</Text>
        </View>
        <Line />
        <View>
            {skillList.map((skill, item)=>(
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                }} key={item}>
                    <Text style={{fontWeight:'bold'}}>{skill.name + ": "}</Text>
                    <Text style={{fontWeight:'normal'}}>{skill.skills}</Text>
                </View>

            ))}
        </View>
    </View>
}

export default Header;