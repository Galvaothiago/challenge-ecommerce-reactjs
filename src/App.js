import { Header } from './components/Header'
import styled from 'styled-components'
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ContainerMain>
        
      </ContainerMain>
    </>
  );
}

const ContainerMain = styled.main`
  display: block;
  width: 100%;
  height: calc(100vh - 21rem);

  padding: 0 6rem;
  overflow-y: auto;

  background: #fbfff1;
  color: black;
`

export default App;
