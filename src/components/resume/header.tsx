import { Text, View, Link } from '@react-pdf/renderer';
import Separator from '@components/resume/seperator';
import type * as types from '@constants/types';

const Header = ({ header, settings }:
  { header: types.headerType, settings: types.settingsType }) => {

  return <>
    <View style={{ marginBottom: 5 }}>
      <Text style={{
        fontSize: settings.fontSize + 10,
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
        {header.name}
      </Text>
    </View>

    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    }}>

      <Text style={{ marginLeft: 3, marginRight: 3 }}>{header.phone}</Text>

      <Separator />

      <Text style={{ marginLeft: 3, marginRight: 3 }}>{header.email}</Text>

      {header.github ? <>
        <Separator />
        <Link src={header.github}>
          <Text style={{ marginLeft: 3, marginRight: 3 }}>Github</Text>
        </Link>
      </> : null}

      {header.linkedin ? <>
        <Separator />
        <Link src={header.linkedin}>
          <Text style={{ marginLeft: 3, marginRight: 3 }}>Linkedin</Text>
        </Link>
      </> : null}

    </View>
  </>
};

export default Header;