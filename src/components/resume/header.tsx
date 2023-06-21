import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import Separator from '@components/resume/seperator';
import type * as types from '@constants/types';

const Header = ({ header, settings }: { header: types.headerType, settings: types.settingsType}) => {
  const styles = StyleSheet.create({
    section: {
      marginBottom: 5,
    },
  
    heading: {
      fontSize: settings.fontsize + 10,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    },
  
    text: {
      fontSize: settings.fontsize,
      marginLeft: 3,
      marginRight: 3,
    },
  
  });
  
  return <>
    <View style={styles.section}>
      <Text style={styles.heading}>{header.name}</Text>
    </View>

    <View style={styles.row}>

      <Text style={styles.text}>{header.phone}</Text>

      <Separator />

      <Text style={styles.text}>{header.email}</Text>

      {header.github ? <>
        <Separator />
        <Link src={header.github}>
          <Text style={styles.text}>Github</Text>
        </Link>
      </> : null}

      {header.linkedin ? <>
        <Separator />
        <Link src={header.linkedin}>
          <Text style={styles.text}>Linkedin</Text>
        </Link>
      </> : null}

    </View>
  </>
};

export default Header;