import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import Line from "../../components/resume/line"

//Fonts
// 'Courier',
// 'Courier-Bold',
// 'Courier-Oblique',
// 'Courier-BoldOblique',

const bullet = "•";

const styles = StyleSheet.create({

  Text: {
    fontSize: 10,
  },

});


const Experience = () => {

  return <>
    <View>
      <Text style={{ fontSize: 12, marginBottom: 3, }}>Experience</Text>
      <Line />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          Paramathics Lab, University of Toronto
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          May 2023 - Present
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, }}>
          Undergraduate Researcher
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Toronto, ON
        </Text>
      </View>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Experiemnt how locality of zeros can affect the performance of cuSparselt Lbirary
        for sparse matrix multiplication
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Written codes and made slides to demonstrate sparse tensor core programming
        on Nvidia GPUs using mma.sp PTX instruction
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Read papers about sparse matrix multiplication and made slides to explain their
        key contributions and kernel designs
      </Text>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3}}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, fontFamily: 'Courier-Bold' }}>
          Groops
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Jan 2023 - May 2023
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 3, }}>
          Web Developer
        </Text>
        <Text style={{ fontSize: 10, marginRight: 10, marginTop: 3, fontWeight: 200 }}>
          Toronto, ON
        </Text>
      </View>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Translate UI designs on Adobe XD and Figma into Typescript React codes
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Written 9 tRPC backend api routers for different bussiness logic
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Designed 6 SQL models in Prisma ORM with MySQL
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Extracted repeated components and Tailwind CSS styles to improve overall code quality and adhere to SOLID
        principles
      </Text>

    </View>
  </>
};

export default Experience;