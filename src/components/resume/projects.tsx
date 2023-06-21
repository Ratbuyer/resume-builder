import { Text, View, Link } from '@react-pdf/renderer';
import Line from "../../components/resume/line"
import Separator from '../../components/resume/seperator';
import type * as types from "../../constants/types";
import { bullet } from "~/constants/values";
import { splitStringIntoChunks } from '~/utils';

const Projects = ({
  projectList,
  settings
}: {
  projectList: types.projectsListType,
  settings: types.settingsType
}) => {

  if (projectList.length === 0) return null;

  const boldContribution = (c: string) => (
    splitStringIntoChunks(c).map((chunk, index) => {

      if (isNaN(Number(chunk))) {
        return <Text key={index}>{chunk}</Text>
      } else {
        return <Text key={index} style={{ fontWeight: "bold" }}>{chunk}</Text>
      }
    })
  );

  return <>
    <View style={{ marginBottom: 10 }}>

      <View>
        <Text style={{ fontSize: settings.fontSize + 2, marginBottom: 3 }}>Projects</Text>
        <Line />
      </View>

      {projectList.map((project, index) => (
        <View key={index}>

          <View style={index === 0 ? { flexDirection: 'row', marginTop: 3 }
            : { flexDirection: 'row', marginTop: 5 }}
          >

            {project.link ?
              <Link src={project.link}>
                <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                  {project.name}
                </Text>
              </Link>
              :
              <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                {project.name}
              </Text>
            }

            {project.description ?
              <>
                <Separator />
                <Text style={{}}>
                  {project.description}
                </Text>
              </>
              : null}

          </View>

          {project.contributions.map((c, index) => (
            <Text style={{ marginLeft: 20, marginTop: 3 }} key={index}>

              {bullet} &nbsp;

              {settings.boldNumbers ? boldContribution(c) : c}

            </Text>
          ))}

        </View>
      ))}

    </View>

  </>
};

export default Projects;