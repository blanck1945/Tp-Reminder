import * as React from "react";
import * as reactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import HomeNavbar from "./components/home_navbar/HomeNavbar";
import Todo_List from "./components/todo_list/Todo_List";
import { store as ReduxStore } from "./Redux_Store/store";
import { Provider } from "react-redux";
import store from "./Redux_Toolkit/Toolkit";

import "./main.scss";
import { Various } from "./components/Various/Various";

const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeNavbar} />
        <Route path="/todo" component={Todo_List} />
        <Route path="/various" component={Various} />
      </Switch>
      <Footer />
    </div>
  );
};

reactDOM.render(
  <Provider store={store}>
    <Provider store={ReduxStore}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </Provider>,
  document.getElementById("root")
);
