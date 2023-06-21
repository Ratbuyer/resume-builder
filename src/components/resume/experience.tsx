import { Text, View } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import type * as types from "../../constants/types";
import { bullet } from "~/constants/values";
import { splitStringIntoChunks } from '~/utils';

const Experience = ({
  experienceList,
  settings
}: {
  experienceList: types.experienceListType,
  settings: types.settingsType
}) => {

  const boldContribution = (c: string) => (
    splitStringIntoChunks(c).map((chunk, index) => {

      if (isNaN(Number(chunk))) {
        return <Text key={index}>{chunk}</Text>
      } else {
        return <Text key={index} style={{ fontWeight: "bold" }}>{chunk}</Text>
      }
    })
  );

  if (experienceList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>

      <Text style={{ fontSize: settings.fontSize + 2, marginBottom: 3, }}>Experience</Text>
      <Line />

      {experienceList.map((e, index) => (
        <View key={index}>

          <View style={index === 0 ? { flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 } :
            { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
              {e.company}
            </Text>
            <Text style={{ marginRight: 10, }}>
              {e.duration}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, }}>
            <Text style={{ marginLeft: 10 }}>
              {e.title}
            </Text>
            <Text style={{ marginRight: 10 }}>
              {e.location}
            </Text>
          </View>

          {
            e.contributions.map((c, index) => (
              <Text style={{ marginLeft: 20, marginTop: 3, }} key={index}>

                {bullet} &nbsp;

                {settings.boldNumbers ? boldContribution(c) : c}

              </Text>
            ))
          }

        </View>

      ))}

    </View >

  </>

};

export default Experience;