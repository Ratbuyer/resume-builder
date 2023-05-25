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
  subheading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  content: {
    fontSize: 12,
    marginBottom: 3,
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillItem: {
    backgroundColor: '#eaeaea',
    borderRadius: 4,
    padding: '2px 6px',
    marginRight: 5,
    marginBottom: 5,
  },
  horizontalLine: {
    borderBottom: '1px solid black',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>John Doe</Text>
        <Text style={styles.content}>Front-end Developer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Work Experience</Text>
        <Text style={styles.content}>
          Company A - Software Engineer (2018-2021)
        </Text>
        <Text style={styles.content}>
          Company B - Front-end Developer (2016-2018)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Projects</Text>
        <Text style={styles.content}>Project X - React Web App</Text>
        <Text style={styles.content}>Project Y - Node.js API</Text>
        <Text style={styles.content}>Project Z - Mobile App</Text>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.section}>
        <Text style={styles.subheading}>Skills</Text>
        <View style={styles.skills}>
          <Text style={styles.skillItem}>React</Text>
          <Text style={styles.skillItem}>JavaScript</Text>
          <Text style={styles.skillItem}>HTML</Text>
          <Text style={styles.skillItem}>CSS</Text>
          <Text style={styles.skillItem}>Node.js</Text>
          <Text style={styles.skillItem}>Git</Text>
          <Text style={styles.skillItem}>Responsive Design</Text>
          <Text style={styles.skillItem}>UI/UX Design</Text>
          <Text style={styles.skillItem}>Problem Solving</Text>
          <Text style={styles.skillItem}>Teamwork</Text>
        </View>
      </View>
    </Page>
  </Document>
);



const App = () => {

  // const [dummy, setDummy] = useState(1);

  // useEffect(() => {setDummy(2)}, []);

  return <>
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <Resume />
      </PDFViewer>
    </div>
  </>

};

export default App;
