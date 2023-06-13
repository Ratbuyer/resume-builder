import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Line from "../../components/resume/line"

import * as types from "../types";

const bullet = "•";

const Experience = ({ experienceList }: { experienceList: types.experienceListType }) => {

  return <>

    <Text style={{ fontSize: 12, marginBottom: 3, }}>Experience</Text>
    <Line />

    {experienceList.map((e, index) => (
      <View key={index}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
          <Text style={index > 1 ? {
            fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily:
              'Courier-Bold'
          } : { fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
            {e.company}
          </Text>
          <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
            {e.duration}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, }}>
            {e.title}
          </Text>
          <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
            {e.location}
          </Text>
        </View>

        {e.contributions.map((c, index) => (
          <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }} key={index}>
            {bullet} {c}
          </Text>
        ))}

      </View>

    ))}

  </>

};

export default Experience;