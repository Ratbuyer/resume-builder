import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Line from "../components/line"

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

const Template = () => {

  return <>
    <View>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>template</Text>
      <Line />
    </View>
  </>
};

export default Template;