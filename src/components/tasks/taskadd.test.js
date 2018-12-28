import React from "react";
import { mount } from "enzyme";
import TaskAdd from "./taskadd";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

describe("Component render", () => {
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

describe("Component func tests", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TaskAdd />
    </Provider>
  );
  const component = wrapper.find("TaskAdd");
  it("should run handleChange", () => {
    const form = wrapper.find("#inputs");
    const inputs = form.find("input");
    const title = inputs.at(0);
    title.simulate("change", { target: { value: "asdasdasd" } });
    expect(component.state().task.title).toEqual("asdasdasd");
  });
  it("should run handlePriority", () => {
    const component = wrapper.find("TaskAdd");
    const inputs = component.find("#inputs");
    const prior = inputs.find("span");
    prior.at(1).simulate("click");
    expect(component.state().task.priority).toEqual("2");
  });
  it("should submit", () => {
    const onAddTask = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <TaskAdd onAddTask={onAddTask} />
      </Provider>
    );
    const component = wrapper.find("TaskAdd");
    const form = component.find("form");
    form.simulate("submit");
    expect(component.props().onAddTask).toHaveBeenCalled();
  });
});
