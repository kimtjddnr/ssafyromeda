import styled from "styled-components";
import UserVideoComponent from "components/Openvidu/UserVideoComponent";
import { useState, useCallback, useEffect } from "react";

const Box = styled.div`
  /* border: 1px solid black; */
  height: 25vh;
  aspect-ratio: 4 / 3;
  margin: auto;
`;

const Page = styled.div`
  width:90%;
`;

const Video = styled.div`
  width: 100%;
  margin: 3px;
`;

const MiddleBox = styled.div`
  margin-top: 6vh;
  margin-bottom: 6vh;
`;

const TheirTeamVid = ({ streamManager, subscribers, publisher, team2Members }) => {

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  
  useEffect(() => {forceUpdate()}, [publisher, subscribers.length]);

  console.log("team2 : ");
  console.log(team2Members);

  return (
    <Page>
      <Video>
        <Box>
          {streamManager !== undefined ? (
            <UserVideoComponent streamManager={streamManager} />
          ) : null}
          <div>
            <UserVideoComponent streamManager={team2Members[0]} />
          </div>
        </Box>
        <MiddleBox>
          <Box>
            {streamManager !== undefined ? (
              <UserVideoComponent streamManager={streamManager} />
            ) : null}
            <div>
              <UserVideoComponent streamManager={team2Members[1]} />
            </div>
          </Box>
        </MiddleBox>
        <Box>
          {streamManager !== undefined ? (
            <UserVideoComponent streamManager={streamManager} />
          ) : null}
          <div>
            <UserVideoComponent streamManager={team2Members[2]} />
          </div>
        </Box>
      </Video>
    </Page>
  );
};

export default TheirTeamVid;
