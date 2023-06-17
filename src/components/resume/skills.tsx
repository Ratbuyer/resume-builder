import { Text, View, } from '@react-pdf/renderer';
import Line from "./line"
import type * as types from '@constants/types';

const Skills = ({ skillsList }: { skillsList: types.skillsListType }) => {

  if (skillsList.length == 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Skills</Text>
      <Line />

      {skillsList.map((skill, index) => (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={index}>
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontWeight: "bold" }}>
            {skill.name}:
          </Text>
          
          <Text style={{ fontSize: 10, marginLeft: 3, marginTop: 3 }}>
            {skill.skills}
          </Text>

        </View>
      ))}

    </View>
  </>
};

export default Skills;