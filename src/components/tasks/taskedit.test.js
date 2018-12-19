import React from "react";
import { mount } from "enzyme";
import TaskEdit from "./taskedit";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

describe("Component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TaskEdit match={{ params: { id: 78 } }} />
    </Provider>
  );

  it("should render h3 ", () => {
    expect(wrapper.find("h3")).toHaveLength(1);
  });
  it("should render form", () => {
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(4);
    expect(wrapper.find("textarea")).toHaveLength(1);
    expect(wrapper.find("span")).toHaveLength(3);
  });
});
