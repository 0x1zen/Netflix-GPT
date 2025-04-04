import { Provider } from "react-redux";
import Body from "./components/Body.jsx";
import store from "./utils/store.jsx";
function App() {
  return (
    <Provider store={store}>
      <Body></Body>
    </Provider>
  );
}

export default App;
