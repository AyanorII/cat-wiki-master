import React from 'react'
import styled from 'styled-components';
import OutroContent from './OutroContent';
import OutroImages from './OutroImages';

type Props = {}

const Outro = (props: Props) => {
  return (
    <StyledOutro>
      <OutroContent />
      <OutroImages />
    </StyledOutro>
  )
}

export default Outro

const StyledOutro = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.9375rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 5rem;
  }
`;
