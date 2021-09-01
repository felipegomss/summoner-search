import styled from 'styled-components';

export const Container = styled.div`

`;
export const IconSummoner = styled.img`
    max-width: 150px;
    margin: 2em 0;
    border: 5px solid #000;
`;
export const Level = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(0, -30px);

  div{
      background-color: #000;
      color: #fff;
      padding: 0.5em;
  }
  `;
export const Player = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;