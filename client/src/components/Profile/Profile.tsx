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
      Profile
      <Atonomy/>
      <ProgressBar>
        <Progress style={{width:'70%'}}/>
      </ProgressBar>
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

`;

const Atonomy = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

`;
const ProgressBar = styled.div`
  margin: 1rem auto;
`;
const Progress = styled.div`
  height: 100%;
  background: forestgreen;
`;

const ButtonBar = styled.div`
  width: 100%;
  height: 3rem;
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