
import { Text, View, } from '@react-pdf/renderer';
import Line from "./line"

import * as type from '~/components/types';


const Awards = ({ awardsList }: { awardsList: type.awardsListType }) => {

  if (awardsList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Awards</Text>
      <Line />

      {awardsList.map((award, index) => (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={index}>
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
            {award}
          </Text>
        </View>
      ))}

    </View>
  </>
};

export default Awards;
