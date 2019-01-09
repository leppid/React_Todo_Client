import React from "react";
import { mount } from "enzyme";
import TaskEdit from "../../components/tasks/taskedit";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

describe("Component render", () => {
  const onEditTask = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <TaskEdit
        task={{ title: "sdsd", priority: "1", description: "dffdfdf" }}
        onEditTask={onEditTask}
      />
    </Provider>
  );
  const component = wrapper.find("TaskEdit");
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
  const onEditTask = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <TaskEdit
        task={{ title: "sdsd", priority: "1" }}
        onEditTask={onEditTask}
      />
    </Provider>
  );
  it("should run handleChange", () => {
    const component = wrapper.find("TaskEdit");
    const form = wrapper.find("#inputs");
    const inputs = form.find("input");
    const title = inputs.at(0);
    title.simulate("change", { target: { value: "asdasdasd" } });
    expect(component.state().task.title).toEqual("asdasdasd");
  });
  it("should run handlePriority", () => {
    const component = wrapper.find("TaskEdit");
    const inputs = component.find("#inputs");
    const prior = inputs.find({ className: "btn btn-warning" });
    prior.simulate("click");
    expect(component.state().task.priority).toEqual("2");
  });
  it("should submit", () => {
    const component = wrapper.find("TaskEdit");
    const form = component.find("form");
    form.simulate("submit");
  });
});
