import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  section: {
    marginBottom: 10,
    textAlign: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  content: {
    fontSize: 12,
    marginBottom: 3,
  },

});

const Head = () => {

  return <>
    <View style={styles.section}>
      <Text style={styles.heading}>John Doe</Text>
      <Text style={styles.content}>Front-end Developer</Text>
    </View>
  </>
};

export default Head;