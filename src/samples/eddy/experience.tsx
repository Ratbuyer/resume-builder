import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import Line from "../../components/line"

//Fonts
// 'Courier',
// 'Courier-Bold',
// 'Courier-Oblique',
// 'Courier-BoldOblique',

const bullet = "•";

const styles = StyleSheet.create({

  Text: {
    fontSize: 10,
  },

});

const Experience = () => {

  return <>
    <View>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Experience</Text>
      <Line />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Link src="">
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
            Company A
          </Text>
        </Link>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Jan 2023 - Present
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, }}>
          Web Developer
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Toronto, ON
        </Text>
      </View>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Translate UI designs on Adobe XD and Figma into Typescript React codes
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Communicated with UI designer and manager to resolve design and codes conflicts
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Extracted repeated components and Tailwind CSS styles to improve overall code quality and adhere to SOLID
        principles
      </Text>

    </View>
  </>
};

export default Experience;