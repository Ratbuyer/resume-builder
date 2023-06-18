import { Text, View } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import type * as types from "../../constants/types";
import { bullet } from "@constants/constants";

const Experience = ({ experienceList }: { experienceList: types.experienceListType }) => {

  if (experienceList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>

      <Text style={{ fontSize: 12, marginBottom: 3, }}>Experience</Text>
      <Line />

      {experienceList.map((e, index) => (
        <View key={index}>

          <View style={index === 0 ? { flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 } :
            { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: "bold" }}>
              {e.company}
            </Text>
            <Text style={{ fontSize: 10, marginRight: 10, }}>
              {e.duration}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, }}>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>
              {e.title}
            </Text>
            <Text style={{ fontSize: 10, marginRight: 10 }}>
              {e.location}
            </Text>
          </View>

          {
            e.contributions.map((c, index) => (
              <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }} key={index}>
                {bullet} {c}
              </Text>
            ))
          }

        </View>

      ))}

    </View >

  </>

};

export default Experience;