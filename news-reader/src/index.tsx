import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Store} from "redux";
import { Provider } from "react-redux";
import configureStore, { IAppState } from "./store/store";


interface IProps {
    store: Store<IAppState>;
}

const Root: React.FC<IProps> = props => {
  return (
      <Provider store={props.store}>
          <App />
      </Provider>
  )
};


// Generate the store
export const store = configureStore();

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
    'root'
) as HTMLElement);
