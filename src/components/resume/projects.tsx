import { Text, View, Link } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import Separator from '../../components/resume/seperator';

import type * as types from "../../constants/types";

const bullet = "•";

const Projects = ({ projectList }: { projectList: types.projectsListType }) => {

  if (projectList.length === 0) return null;

  return <>
    <View style={{ marginBottom: 10 }}>

      <View>
        <Text style={{ fontSize: 12, marginBottom: 3 }}>Projects</Text>
        <Line />
      </View>

      {projectList.map((project, index) => (
        <View key={index}>

          <View style={index === 0 ? { flexDirection: 'row', marginTop: 3 }
          : { flexDirection: 'row', marginTop: 5 }}
          >

            {project.link ?
              <Link src={project.link}>
                <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: "bold" }}>
                  {project.name}
                </Text>
              </Link>
              :
              <Text style={{ fontSize: 10, marginLeft: 10, fontWeight:"bold" }}>
                {project.name}
              </Text>
            }

            <Separator />

            <Text style={{ fontSize: 10, }}>
              {project.description}
            </Text>

          </View>

          {project.contributions.map((contribution, index) => (
            <Text style={{ fontSize: 10, marginLeft: 20, marginTop: 3 }} key={index}>
              {bullet} {contribution}
            </Text>
          ))}

        </View>
      ))}

    </View>

  </>
};

export default Projects;