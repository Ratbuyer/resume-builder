import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Line from "../../components/resume/line"

import * as type from "../../components/types";

const Education = ({ educationList }: { educationList: type.educationListType }) => {

  return <>
    <View style={{ marginBottom: 10 }}>

      <Text style={{ fontSize: 12, marginBottom: 3, }}>Education</Text>
      <Line />

      {educationList.map((education, index) => (
        <div key={index}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
              {education.school}
            </Text>
            <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, }}>
              {education.duration}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, }}>
              {education.degree}
            </Text>
            <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, }}>
              {education.location}
            </Text>
          </View>
        </div>

      ))}

    </View>
  </>
};

export default Education;