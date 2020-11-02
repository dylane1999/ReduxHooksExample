import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk, logger))
);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
