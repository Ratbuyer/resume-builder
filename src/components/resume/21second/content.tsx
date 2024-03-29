import type {
  awardsListType,
  educationListType,
  experienceListType,
  projectsListType,
  settingsType,
} from "@constants/types";
import Education from "@components/resume/21second/education";
import Experience from "@components/resume/21second/experience";
import Projects from "@components/resume/21second/projects";
import Award from "@components/resume/21second/award";

const Content = ({
  educationList,
  experienceList,
  projectList,
  awardsList,
  settings,
}: {
  educationList: educationListType;
  experienceList: experienceListType;
  projectList: projectsListType;
  awardsList: awardsListType;
  settings: settingsType;
}) => {
  return (
    <>
      <Education education={educationList} settings={settings} />
      <Experience experience={experienceList} settings={settings} />
      <Projects projects={projectList} settings={settings} />
      <Award awards={awardsList} settings={settings} />
    </>
  );
};

export default Content;
