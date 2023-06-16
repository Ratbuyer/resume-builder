
import { Text, View, } from '@react-pdf/renderer';
import Line from "./line"

import type * as types from '@constants/types';


const Awards = ({ awardsList }: { awardsList: types.awardsListType }) => {

  if (awardsList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Awards</Text>
      <Line />

      {awardsList.map((award, index) => (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={index}>
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontWeight: "bold" }}>
            {award}
          </Text>
        </View>
      ))}

    </View>
  </>
};

export default Awards;
