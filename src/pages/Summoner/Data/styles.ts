import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    padding: 1em 0 0 0;
`;

export const EloSummoner = styled.img`
  padding: 0 1em 0 0;
  width: 80px;
`;

 
export const Rank = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const WinRate = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
export const Percent = styled.div`
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
    background-color: #6A73A6;
    border-radius: 100%;
    border: 1px solid #DCE0F2;
    color: #DCE0F2;
`;
