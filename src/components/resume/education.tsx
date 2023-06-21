import { Text, View } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import type * as types from "../../constants/types";

const Education = ({
  educationList,
  settings
}: {
  educationList: types.educationListType,
  settings: types.settingsType
}) => {

  if (educationList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>

      <Text style={{ fontSize: settings.fontSize + 2, marginBottom: 3, }}>Education</Text>
      <Line />

      {educationList.map((education, index) => (
        <View key={index}>

          <View style={index == 0 ? { flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 } :
            { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>

            <Text style={{ marginLeft: 10, fontWeight: "bold", }}>
              {education.school}
            </Text>
            <Text style={{ marginRight: 10 }}>
              {education.duration}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
            <Text style={{ marginLeft: 10 }}>
              {education.degree}
            </Text>
            <Text style={{ marginRight: 10 }}>
              {education.location}
            </Text>
          </View>
        </View>

      ))}

    </View>
  </>
};

export default Education;