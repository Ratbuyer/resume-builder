import { Text, View, } from '@react-pdf/renderer';
import Line from "./line"

import type * as types from '@constants/types';


const Awards = ({
  awardsList,
  settings
}: {
  awardsList: types.awardsListType,
  settings: types.settingsType
}) => {

  if (awardsList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: settings.fontSize + 2, marginBottom: 3, }}>Awards</Text>
      <Line />

      {awardsList.map((award, index) => (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={index}>
          <Text style={{ marginLeft: 10, marginTop: 3, fontWeight: "bold" }}>
            {award}
          </Text>
        </View>
      ))}

    </View>
  </>
};

export default Awards;
