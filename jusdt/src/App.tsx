import React from 'react';
import { AppContainer } from './styles';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './AppStateContext';

function App() {
  const { state, dispatch } = useAppState()

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} id={list.id}>
        </Column>
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch({ type: "ADD_LIST", payload: text })} />
    </AppContainer>
  );
}

export default App;
