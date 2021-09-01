import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

`;
export const Content = styled.div`
display: grid;
place-items: center;
padding: 5em;
box-shadow: rgba(130, 120, 191, 0.25) 0px 14px 28px, rgba(130, 120, 191, 0.22) 0px 10px 10px;
background-color: #DCE0F2;
border-radius: 5px;
  h1{
      font-size: 1.2em;
      font-weight: 500;
  }
  strong{
      color: #8278BF;
  }
  form{
    display: flex;
    align-items: flex-end;
    width: 100%;
      button{
          background-color: #6A73A6;
          width: 30%;
          color: #fff;
          border: solid 1px #6A73A6;
          height: 35px;
          border-radius: 0px 5px 5px 0px;
          cursor: pointer;
      }
      input{
          margin-top: 2em;
          width: 100%;
          height: 35px;
          padding: .5em 1em;
          border-radius: 5px 0px 0px 5px;
          border: solid 1px transparent;
          border: solid 1px #6A73A6;
          background-color: #DCE0F2;
          text-align: center;
        }
    }
  @media (min-width: 760px) {
    h1{
      font-size: 2em;

    } 
}
`;
