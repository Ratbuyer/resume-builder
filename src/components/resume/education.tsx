import { Text, View } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import type * as types from "../../constants/types";

const Education = ({ educationList }: { educationList: types.educationListType }) => {

  if (educationList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>

      <Text style={{ fontSize: 12, marginBottom: 3, }}>Education</Text>
      <Line />

      {educationList.map((education, index) => (
        <View key={index}>

          <View style={index == 0 ? { flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 } :
            { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>

            <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: "bold", }}>
              {education.school}
            </Text>
            <Text style={{ fontSize: 10, marginRight: 10 }}>
              {education.duration}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3}}>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>
              {education.degree}
            </Text>
            <Text style={{ fontSize: 10, marginRight: 10 }}>
              {education.location}
            </Text>
          </View>
        </View>

      ))}

    </View>
  </>
};

export default Education;