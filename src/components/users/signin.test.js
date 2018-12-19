import React from "react";
import { mount } from "enzyme";
import SignIn from "./signin";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => {});

describe("Component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );

  it("should render h3 ", () => {
    expect(wrapper.find("h3")).toHaveLength(1);
  });
  it("should render form", () => {
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(3);
  });
});
