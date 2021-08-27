import { Header } from './components/Header'
import styled from 'styled-components'
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ContainerMain>
        <div>Hello</div>
      </ContainerMain>
    </>
  );
}

const ContainerMain = styled.main`
  display: block;
  width: 100%;
  height: calc(100vh - 21rem);

  padding: 1.5rem 6rem;
  overflow-y: auto;

  background: #fbfff1;
  color: black;
`

export default App;
