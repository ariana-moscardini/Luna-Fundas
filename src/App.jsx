import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {ChakraProvider} from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido/a a mi tienda online"} />
      </ChakraProvider>
    </div>
  )
}

export default App