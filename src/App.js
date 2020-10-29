import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import reducers from "./reducers/reducers";
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(logger));



function App() {
  return (
    <Provider store={store}> 
    <Counter/>
    </Provider>
  );
}

export default App;

