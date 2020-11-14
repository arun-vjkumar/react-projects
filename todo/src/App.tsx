import React from 'react';
import { TodoStateAppProvider } from './todo/TodoStateContainer';
import { AppContainer} from "./styles"
import './App.css';
import { Board } from './todo/Board';
import { Profile } from './profile/profile';

function App() {
  return (
    <AppContainer>
      {/* <TodoStateAppProvider>
        <Board />
      </TodoStateAppProvider> */}
      <Profile />
    </AppContainer>
  );
}

export default App;
