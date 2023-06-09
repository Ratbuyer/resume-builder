import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';


const styles = StyleSheet.create({

  section: {
    marginBottom: 5,
  },

  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Courier-Bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  text: {
    fontSize: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
  },

});

const Head = () => {

  return <>
    <View style={styles.section}>
      <Text style={styles.heading}>Yicong (Eddy) Luo</Text>
    </View>

    <View style={styles.row}>

      <Text style={styles.text}>+1 647-564-3772</Text>

      <View style={styles.separator} />

      <Text style={styles.text}>m1662576219@gmail.com</Text>

      <View style={styles.separator} />

      <Link src="https://github.com/Ratbuyer">
        <Text style={styles.text}>Github</Text>
      </Link>

      <View style={styles.separator} />

      <Link src="https://www.linkedin.com/in/yicong-luo-8a068a25b/">
        <Text style={styles.text}>Linkedin</Text>
      </Link>

    </View>
  </>
};

export default Head;