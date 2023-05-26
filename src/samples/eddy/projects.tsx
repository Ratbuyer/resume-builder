import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import Line from "../../components/line"
import Separator from '../../components/seperator';

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

const Projects = () => {

  return <>
    <View>
      <Text style={{ fontSize: 12, marginBottom: 3, marginTop: 10 }}>Projects</Text>
      <Line />

      <View style={{ flexDirection: 'row', marginTop: 3 }}>
        <Link src="https://github.com/Ratbuyer/Toronto-Fitness-Club">
          <Text style={{ fontSize: 10, marginLeft: 10, fontFamily: 'Courier-Bold' }}>
            Gym Website
          </Text>
        </Link>
        <Separator />
        <Text style={{ fontSize: 10, }}>
          Javascript React, Django, Sqlite, Postman
        </Text>
      </View>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Developed a Full-Stack
        Website for fitness companies with two teammates
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Implemented account and
        subscription features in both backend
        and frontend server using Django framework, and
        React and MUI libraries
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Tested the backend server using Postman
      </Text>

      <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }}>
        {bullet} Written shell scripts to install requirements and start the website
      </Text>

    </View>
  </>
};

export default Projects;