import { Header } from './components/Header'
import styled from 'styled-components'
import { Banner } from './components/Banner';

import { useContext } from 'react'
import { SortingContext } from '../src/context/SortingContext'
import { Card } from './components/CardGame';

import { Switch, Route } from "react-router-dom";

import { Checkout } from './components/Checkout';

function App() {
  const { products } = useContext(SortingContext)

  return (
    <>
      <Header />
      <ContainerMain>
        <Banner />
        <Switch>
          <Route exact path="/">
            <Grid>
              { products.map( product => <Card key={product.id} infoGame={product}/> ) }
            </Grid>
          </Route>
          <Route path="/checkout">
            <Checkout>

            </Checkout>
          </Route>
        </Switch>
      </ContainerMain>
    </>
  );
}

const ContainerMain = styled.main`
  display: block;
  width: 100%;
  height: 100%;

  padding: 1rem 0rem;
  overflow-y: auto;

  background: #272727;
  color: black;

  display: flex;
  flex-direction: column;

`

const Grid = styled.div`
  width: 100%;
  padding: 0 6rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 19rem);
  grid-gap: 4rem;
  justify-content: center;

  margin-top: -2rem;
  z-index: 3;
`

export default App;
