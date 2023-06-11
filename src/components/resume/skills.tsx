import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Line from "./line"

import * as type from '~/components/types';
import { singleQuote } from 'prettier.config.cjs';

//Fonts
// 'Courier',
// 'Courier-Bold',
// 'Courier-Oblique',
// 'Courier-BoldOblique',

const styles = StyleSheet.create({
  item: { fontSize: 10, marginLeft: 3, marginTop: 3, fontWeight: 200 },
});

const Skills = ({ skillsList }: { skillsList: type.skillsListType }) => {

  return <>
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Skills</Text>
      <Line />

      {skillsList.map((skill, index) => (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={index}>
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
            {skill.name}:
          </Text>

          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier' }}>
            {skill.skills}
          </Text>

        </View>
      ))}

    </View>
  </>
};

export default Skills;