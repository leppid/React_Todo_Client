import React from "react";
import { mount } from "enzyme";
import SignIn from "./signin";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

describe("Component", () => {
  const onSignIn = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <SignIn onSignIn={onSignIn} />
    </Provider>
  );
  const component = wrapper.find("SignIn");

  it("should render h3 ", () => {
    expect(component.find("h3")).toHaveLength(1);
  });

  it("should render form", () => {
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("input")).toHaveLength(3);
  });

  it("should run handleChange", () => {
    const emailInput = component.find("#email");
    const passInput = component.find("#password");
    emailInput.simulate("change", { target: { value: "test@mail.net" } });
    passInput.simulate("change", { target: { value: "password123" } });
    expect(component.state().session.email).toEqual("test@mail.net");
    expect(component.state().session.password).toEqual("password123");
  });

  it("should submit form", () => {
    const btn = component.find("#submit");
    btn.simulate("submit");
    expect(component.props().onSignIn).toHaveBeenCalled();
  });
});
