import {  Text, View, StyleSheet } from '@react-pdf/renderer';
import Line from "../../components/resume/line"

//Fonts
// 'Courier',
// 'Courier-Bold',
// 'Courier-Oblique',
// 'Courier-BoldOblique',

const styles = StyleSheet.create({
  item: { fontSize: 10, marginLeft: 3, marginTop: 3, fontWeight: 200 },
});

const Skills = () => {

  const langauges: string[] = [
    "Python",
    "Java",
    "C/C++",
    "PostgreSQL",
    "JavaScript/Typescript",
    "HTML/CSS",
    "Racket",
    "Haskell",
  ];

  const libraries: string[] = [
    "Node.js", "Next.js", "React",
    "MUI", "Tailwind CSS", "tRPC", "Django", "Prisma ORM", "CUDA",
  ];

  const softwares: string[] = [
    "Git", "Linux", "Latex", "Postman", "MySQL Workbench",
  ];

  return <>
    <View style={{marginBottom: 10}}>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Skills</Text>
      <Line />

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          Langauges:
        </Text>
        {langauges.map((item, index) => (<Text key={index} style={styles.item}>{item},</Text>))}
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          Frameworks/Libraries:
        </Text>
        {libraries.map((item, index) => (<Text key={index} style={styles.item}>{item},</Text>))}
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          Softwares/Tools:
        </Text>
        {softwares.map((item, index) => (<Text key={index} style={styles.item}>{item},</Text>))}
      </View>

    </View>
  </>
};

export default Skills;