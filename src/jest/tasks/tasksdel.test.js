import React from "react";
import { shallow, mount } from "enzyme";
import TasksDel from "../../components/tasks/tasksdel";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import reducers from "../../reducers";
import thunk from "redux-thunk";
import hist from "../../services/hist";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const tasks = [
  { id: "234", title: "sdsdsds213d", priority: 1, done: false },
  { id: "237", title: "sdsd123sdsd", priority: 2, done: false },
  { id: "247", title: "sdsd123sdsd", priority: 3, done: true }
];

const onDeleteChecked = jest.fn();

const wrapper = mount(
  <Router history={hist}>
    <Provider store={store}>
      <TasksDel tasks={tasks} onDeleteChecked={onDeleteChecked} />
    </Provider>
  </Router>
);

const component = wrapper.find("TasksDel");

it("should render form", () => {
  expect(component.find("#deltasks")).toHaveLength(1);
  expect(component.find("#mark")).toHaveLength(1);
  expect(component.find("#unmark")).toHaveLength(1);
  expect(component.find("Link")).toHaveLength(3);
  expect(component.find("#title")).toHaveLength(3);
  expect(component.find("#priority")).toHaveLength(2);
  expect(component.find("#checkbox")).toHaveLength(3);
});

it("should run handleDeleteChecked", () => {
  const btn = component.find("#deltasks");
  btn.simulate("click");
  component.update();
  expect(component.props().onDeleteChecked).toHaveBeenCalled();
});
it("should mark all tasks", () => {
  const btn = component.find("#mark");
  btn.simulate("click");
  component.update();
  expect(component.state().checked).toHaveLength(3);
});
it("should unmark all tasks", () => {
  const btn = component.find("#unmark");
  btn.simulate("click");
  component.update();
  expect(component.state().checked).toHaveLength(0);
});
it("should check tasks", () => {
  const checkbox = component.find("#checkbox");
  checkbox.at(1).simulate("change");
  component.update();
  expect(component.state().checked).toHaveLength(1);
  checkbox.at(1).simulate("change");
  expect(component.state().checked).toHaveLength(0);
});
