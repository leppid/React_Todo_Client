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
  const onDeleteTask = jest.fn();
  const onDoneTask = jest.fn();
  const wrapper = mount(
    <Router history={hist}>
      <Provider store={store}>
        <TaskProfile
          task={{
            title: "sdsd",
            priority: "1",
            description: "dffdfdf",
            duedate: "12/12/12",
            done: "false"
          }}
          onDeleteTask={onDeleteTask}
          onDoneTask={onDoneTask}
        />
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

  it("should run handleDone", () => {
    const component = wrapper.find("TaskProfile");
    const btn = component.find("#btndone");
    btn.simulate("click");
    expect(component.props().onDoneTask).toHaveBeenCalled();
  });

  it("should run handledelete", () => {
    const component = wrapper.find("TaskProfile");
    const btn = component.find("#btndelete");
    btn.simulate("click");
    expect(component.props().onDeleteTask).toHaveBeenCalled();
  });
});
