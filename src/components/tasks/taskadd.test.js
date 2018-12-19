import React from "react";
import { mount } from "enzyme";
import TaskAdd from "./taskadd";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => {});

describe("Component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TaskAdd />
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
