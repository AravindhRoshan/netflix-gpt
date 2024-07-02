import { Provider } from "react-redux";
import MainBody from "./components/MainBody";
import appStore from "./redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <MainBody />;
    </Provider>
  );
};

export default App;
