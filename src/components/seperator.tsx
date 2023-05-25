import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
  },
});


const Separator = () => (<View style={styles.separator} />);


export default Separator;