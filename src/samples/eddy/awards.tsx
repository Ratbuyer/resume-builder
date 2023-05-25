import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import Line from "../../components/line"


const styles = StyleSheet.create({
  award: { fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' },
});

const Awards = () => {

  return <>
    <View>

      <Text style={{ fontSize: 12, marginBottom: 3, marginTop: 10 }}>Awards</Text>
      <Line />

      <Text style={styles.award}>
        Dean's List Scholar - 2022 Winter
      </Text>

      <Text style={styles.award}>
        Dr. James A. and Connie P. Dickson Scholarship In Science and Mathematics - 2020, 2021
      </Text>

      <Text style={styles.award}>
        University Of Toronto In-Course Scholarships - 2021
      </Text>

    </View>
  </>
};

export default Awards;