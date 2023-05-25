import { StyleSheet } from '@react-pdf/renderer';


export const styles = StyleSheet.create({
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