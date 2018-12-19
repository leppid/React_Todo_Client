import React from "react";
import { mount } from "enzyme";
import TaskProfile from "./taskprofile";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import hist from "../../services/hist";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

describe("Component", () => {
  const wrapper = mount(
    <Router history={hist}>
      <Provider store={store}>
        <TaskProfile match={{ params: { id: 78 } }} />
      </Provider>
    </Router>
  );

  it("should render h2 h3 h4 ", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find("h4")).toHaveLength(1);
  });
  it("should render form", () => {
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("span")).toHaveLength(6);
  });
});
