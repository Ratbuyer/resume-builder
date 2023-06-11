import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import Line from "./line"
import Separator from './seperator';

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
      <Text style={{ fontSize: 12, marginBottom: 10, marginTop: 10 }}>template</Text>
      <Line />
    </View>
  </>
};

export default Template;