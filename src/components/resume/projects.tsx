import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import Separator from '../../components/resume/seperator';

import * as types from "../types";

const bullet = "•";

const Projects = ({ projectList }: { projectList: types.projectsListType }) => {

  return <>
    <View>
      <Text style={{ fontSize: 12, marginBottom: 3, marginTop: 10 }}>Projects</Text>
      <Line />
    </View>

    {projectList.map((project, index) => (
      <View key={index}>

        <View style={{ flexDirection: 'row', marginTop: 3 }}>

          {project.link ?
            <Link src={project.link}>
              <Text style={index === 0 ? { fontSize: 10, marginLeft: 10, fontFamily: 'Courier-Bold' }
                : { marginTop: 3, fontSize: 10, marginLeft: 10, fontFamily: 'Courier-Bold' }}>
                {project.name}
              </Text>
            </Link> : <Text style={{ fontSize: 10, marginLeft: 10, fontFamily: 'Courier-Bold' }}>
              {project.name}
            </Text>}

          <Separator />

          <Text style={{ fontSize: 10, }}>
            {project.description}
          </Text>

        </View>

        {project.contributions.map((contribution, index) => (
          <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3, }} key={index}>
            {bullet} {contribution}
          </Text>
        ))}

      </View>
    ))}



  </>
};

export default Projects;