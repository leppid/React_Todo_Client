import React from "react";
import { shallow, mount } from "enzyme";
import TasksList from "./taskslist";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import reducers from "../../reducers";
import thunk from "redux-thunk";
import hist from "../../services/hist";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const onDeleteTask = jest.fn();

const tasks = [
  { id: "234", title: "sdsdsds213d", priority: 1, done: false },
  { id: "237", title: "sdsd123sdsd", priority: 2, done: false },
  { id: "247", title: "sdsd123sdsd", priority: 3, done: true }
];

const wrapper = mount(
  <Router history={hist}>
    <Provider store={store}>
      <TasksList tasks={tasks} onDeleteTask={onDeleteTask} />
    </Provider>
  </Router>
);

const component = wrapper.find("TasksList");

it("should render form", () => {
  expect(component.find("a")).toHaveLength(5);
  expect(component.find("Link")).toHaveLength(3);
  expect(component.find("#title")).toHaveLength(3);
  expect(component.find("#priority")).toHaveLength(2);
  expect(component.find("#delbtn")).toHaveLength(3);
});

it("should run handleDelete", () => {
  const btn = component.find("#delbtn");
  btn.at(1).simulate("click");
  component.update();
  expect(component.props().onDeleteTask).toHaveBeenCalled();
});
