import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { GiBrutalHelm } from 'react-icons/gi';
// import { GiArmorPunch } from 'react-icons/gi';
// import { GiBattleMech } from 'react-icons/gi';
// import { GiBiceps } from 'react-icons/gi';
// import { GiChestArmor } from 'react-icons/gi';
// import { GiBlackKnightHelm } from 'react-icons/gi';
// import { GiGauntlet } from 'react-icons/gi';
import { GiLegArmor } from 'react-icons/gi';
import { GiMuscularTorso } from 'react-icons/gi';
// import { GiShoulderArmor } from 'react-icons/gi';
// import { GiShorts } from 'react-icons/gi';
// import { GiBarbute } from 'react-icons/gi';
// import { GiHeavyHelm } from 'react-icons/gi';
// import { GiLeatherBoot } from 'react-icons/gi';
import { GiTrousers } from 'react-icons/gi';
// import { GiRobotLeg } from 'react-icons/gi';

interface props {

};
const Anatomy : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper>
      Anatomy
      <Head>
        <IconDiv style={{fontSize: '4rem'}}>
          <GiBrutalHelm/>
        </IconDiv>
      </Head>
      <TorsoArms>
        <IconDiv style={{fontSize: '4rem'}}>
          <GiMuscularTorso/>
        </IconDiv>
      </TorsoArms>
      <Thighs>
        <IconDiv style={{fontSize: '4rem'}}>
          <GiTrousers/>
        </IconDiv>
      </Thighs>
      <CalvesFeet>
        <IconDiv style={{fontSize: '4rem'}}>
          <GiLegArmor/>
        </IconDiv>
      </CalvesFeet>
    </Wrapper>
  )
}

export default Anatomy;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'head'
    'shoulders'
    'knees'
    'toes';
  /* grid-template-rows: 1fr 6fr 0.3fr;
  grid-template-columns: 1.2fr 6fr 2fr; */
`;
const IconDiv = styled.div`

`;
const Head = styled.div`
  width: 100%;
  grid-area: head;
`;
const TorsoArms = styled.div`
  width: 100%;
  grid-area: shoulders;
`;
const Thighs = styled.div`
  width: 100%;
  grid-area: knees;
`;
const CalvesFeet = styled.div`
  width: 100%;
  grid-area: toes;
`;