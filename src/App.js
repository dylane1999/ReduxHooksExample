import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import { createStore } from "redux";
import reducers from "./reducers/reducers";
import { Provider } from 'react-redux';

const store = createStore(reducers);



function App() {
  return (
    <Provider store={store}> 
    <Counter/>
    </Provider>
  );
}

export default App;
