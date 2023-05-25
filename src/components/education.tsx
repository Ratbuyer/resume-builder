import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Line from "../components/line"


const styles = StyleSheet.create({

});

const Education = () => {

  return <>
    <View>

      <Text style={{ fontSize: 12, marginBottom: 3, }}>Education</Text>
      <Line />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          University of Toronto
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Sep 2020 - Jun 2024
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, }}>
          Honours Bachelor of Science in Computer Science
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Toronto, ON
        </Text>
      </View>

    </View>
  </>
};

export default Education;