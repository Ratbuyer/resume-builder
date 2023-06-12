import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Line from "../../components/resume/line"

//Fonts
// 'Courier',
// 'Courier-Bold',
// 'Courier-Oblique',
// 'Courier-BoldOblique',


const styles = StyleSheet.create({
  item: { fontSize: 10, marginLeft: 3, marginTop: 3, fontWeight: 200 },
});

const Awards = () => {

  const awards: string[] = [
  "xxx Award",
  "xxxx Award",
  ]

  const description: string[] = [
  "Award 1",
  "Award 2",
  ]

  return <>
    <View style={{marginBottom: 10}}>

      <Text style={{ fontSize: 12, marginBottom: 3, }}>Awards</Text>
      <Line />

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          awards:
        </Text>
        {awards.map((item, index) => (<Text key={index} style={styles.item}>{item},</Text>))}
        < award 底下应该紧贴描述 />
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          descriptions:
        </Text>
        {description.map((item, index) => (<Text key={index} style={styles.item}>{item},</Text>))}
      </View>

    </View>
  </>
};

export default Awards;
