import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Anatomy from './Anatomy';

// import { GiBrutalHelm } from 'react-icons/gi';
// import { GiArmorPunch } from 'react-icons/gi';
// import { GiBattleMech } from 'react-icons/gi';
// import { GiBiceps } from 'react-icons/gi';
// import { GiChestArmor } from 'react-icons/gi';
// import { GiBlackKnightHelm } from 'react-icons/gi';
// import { GiGauntlet } from 'react-icons/gi';
// import { GiLegArmor } from 'react-icons/gi';
// import { GiMuscularTorso } from 'react-icons/gi';
// import { GiShoulderArmor } from 'react-icons/gi';
// import { GiShorts } from 'react-icons/gi';
// import { GiBarbute } from 'react-icons/gi';
// import { GiHeavyHelm } from 'react-icons/gi';
// import { GiLeatherBoot } from 'react-icons/gi';
// import { GiTrousers } from 'react-icons/gi';
// import { GiRobotLeg } from 'react-icons/gi';

interface props {

};
const Profile : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      <TopBar>
        <p>Profile</p>
      </TopBar>

      <Content>
        <Anatomy/>
        <ProgressBar>
          <Progress style={{width:'70%'}}/>
        </ProgressBar>
      </Content>
      
      <ButtonBar>
        <StyledButton>
          Continue Journey
        </StyledButton>
        <StyledButton>
          Quick Workout
        </StyledButton>
        <StyledButton>
          Enter Steps
        </StyledButton>
        <StyledButton>
          Enter Workout
        </StyledButton>
      </ButtonBar>
    </Wrapper>
  )
}

export default Profile;

const Wrapper = styled.div` 
  color: whitesmoke;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'head'
    'content'
    'menu';
  /* grid-template-rows: 1fr 6fr 0.3fr; */
  /* grid-template-columns: 1.2fr 6fr 2fr; */
`;
const TopBar = styled.div`
  width: 100%;
  height: 2rem;
  grid-area: head;
  background: goldenrod;
  p {
    color: whitesmoke;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1rem;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  grid-area: content;
`;
const ProgressBar = styled.div`
  width: 50%;
  height: 1.5rem;
  margin: .5rem auto;
  border: 1px solid whitesmoke;
`;
const Progress = styled.div`
  height: 100%;
  background: forestgreen;
`;
const ButtonBar = styled.div`
  width: 100%;
  height: 3rem;
  grid-area: menu;
  border-top: 1px solid black;
`;
const StyledButton = styled.button`
  height: 100%;
  width: 100%;
  text-align: center;
  flex: 1;
  border: 1px solid goldenrod;
`;
const Left = styled.div`
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1); 
  filter: FlipH;
  -ms-filter: "FlipH";
`;