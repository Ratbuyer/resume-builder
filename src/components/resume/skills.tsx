import { Text, View, } from '@react-pdf/renderer';
import Line from "./line"
import type * as types from '@constants/types';

const Skills = ({ skillsList, settings }: { skillsList: types.skillsListType, settings:types.settingsType }) => {

  if (skillsList.length == 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: settings.fontsize + 2, marginBottom: 3, }}>Skills</Text>
      <Line />

      {skillsList.map((skill, index) => (

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10, marginTop: 3 }} key={index}>

          <Text >

            <Text style={{ fontSize: settings.fontsize, fontWeight: "bold" }}>
              {skill.name} : &nbsp;
            </Text>

            <Text style={{ fontSize: settings.fontsize }}>
              {skill.skills}
            </Text>

          </Text>

        </View>
      ))}

    </View>
  </>
};

export default Skills;