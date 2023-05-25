import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottom: '1px solid black',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
});

const Line = () => {

  return <View style={styles.horizontalLine} />
};

export default Line;