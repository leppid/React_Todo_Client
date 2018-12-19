import React from "react";
import { shallow } from "enzyme";
import TasksList from "./taskslist";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const wrapper = shallow(<TasksList store={store} />);

const component = wrapper.dive({ context: { store } });

const tasks = [
  { id: "234", title: "sdsdsds213d", priority: "1", done: false },
  { id: "237", title: "sdsd123sdsd", priority: "2", done: false },
  { id: "247", title: "sdsd123sdsd", priority: "3", done: true }
];

it("should render form", () => {
  component.setState({
    tasks: tasks
  });
  component.update();
  console.log(component.debug());
  expect(component.find("a")).toHaveLength(2);
  expect(component.find("Link")).toHaveLength(3);
  expect(component.find("#title")).toHaveLength(3);
  expect(component.find("#priority")).toHaveLength(2);
  expect(component.find("#delbtn")).toHaveLength(3);
});
