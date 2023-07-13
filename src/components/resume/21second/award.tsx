import type { awardsListType, settingsType } from "@constants/types";
import Title21sec from "@components/resume/components/title21sec";
import { Text } from "@react-pdf/renderer";

const Award = ({
  awards,
  settings,
}: {
  awards: awardsListType;
  settings: settingsType;
}) => {
  return (
    <>
      <Title21sec title={"Award"} settings={settings} />
      {awards.map((value, index) => {
        return (
          <Text
            key={index}
            style={{
              flexDirection: "column",
              marginHorizontal: 10,
              marginVertical: 5,
              rowGap: 7,
            }}
          >
            {value}
          </Text>
        );
      })}
    </>
  );
};

export default Award;
