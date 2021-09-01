import { useState } from 'react';
import { Container, Content } from './styles';
import { useHistory } from "react-router-dom";


function Home( ) {
  const [summName, setSummName] = useState("")
  let history = useHistory();

  return (
    <Container>
      <Content>
      <h1>Search by <strong>summoner</strong> name</h1>
      <form>
      <input placeholder="Enter the summoner name here" value={summName} onChange={(e) => setSummName(e.target.value)}/>
      <button onClick={() => history.push(`/summoner/${summName}`)}>Go!</button>
      </form>
      </Content>
    </Container>
  );
}

export default Home;
