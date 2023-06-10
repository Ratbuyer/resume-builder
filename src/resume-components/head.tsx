import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';

import Separator from '~/resume-components/seperator';


type HeaderType = {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
};


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

});

const Head = ({header} : {header : HeaderType}) => {

  return <>
    <View style={styles.section}>
      <Text style={styles.heading}>{header.name}</Text>
    </View>

    <View style={styles.row}>

      <Text style={styles.text}>{header.phone}</Text>

      <Separator />

      <Text style={styles.text}>{header.email}</Text>

      <Separator />

      <Link src={header.github}>
        <Text style={styles.text}>Github</Text>
      </Link>

      <Separator />

      <Link src={header.linkedin}>
        <Text style={styles.text}>Linkedin</Text>
      </Link>

    </View>
  </>
};

export default Head;