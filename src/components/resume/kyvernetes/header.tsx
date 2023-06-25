import { Text, View, Link } from '@react-pdf/renderer';
import type * as types from '@constants/types';

const Header = ({
  header,
  settings
}: {
  header: types.headerType,
  settings: types.settingsType
}) => {

  return <>

    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    }}>

      <View style={{ marginBottom: 5, marginTop: 9, width: "50%" }}>
        <Text style={{
          fontSize: settings.fontSize + 10,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
          {header.name}
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 15, justifyContent: "center", width: "50%" }}>

        <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
          <Text > Phone Number </Text>
          <Text > Email </Text>
          <Text > Github url </Text>
          <Text > LinkedIn url</Text>
        </View>

        <View style={{ flexDirection: "column", flexWrap: "wrap" }}>

          <Text> {header.phone} </Text>
          <Text> {header.email} </Text>
          <Link src={header.github}> {header.github} </Link>
          <Link src={header.linkedin}>{header.linkedin}</Link>

        </View>

      </View>

    </View>
  </>
};

export default Header;