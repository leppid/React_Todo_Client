import React from "react";
import { mount } from "enzyme";
import SignUp from "../../components/users/signup";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

describe("Component", () => {
  const onSignUp = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <SignUp onSignUp={onSignUp} />
    </Provider>
  );

  const component = wrapper.find("SignUp");

  it("should render h3 ", () => {
    expect(component.find("h3")).toHaveLength(1);
  });
  it("should render form", () => {
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("input")).toHaveLength(6);
  });

  it("should run handleChange", () => {
    const emailInput = component.find("#email");
    const fnameInput = component.find("#firstname");
    const lnameInput = component.find("#lastname");
    const passInput = component.find("#password");
    emailInput.simulate("change", { target: { value: "test@mail.net" } });
    fnameInput.simulate("change", { target: { value: "Masha" } });
    lnameInput.simulate("change", { target: { value: "Vovna" } });
    passInput.simulate("change", { target: { value: "password123" } });
    expect(component.state().user.email).toEqual("test@mail.net");
    expect(component.state().user.firstname).toEqual("Masha");
    expect(component.state().user.lastname).toEqual("Vovna");
    expect(component.state().user.password).toEqual("password123");
  });

  it("should submit form", () => {
    const btn = component.find("#submit");
    btn.simulate("submit");
    expect(component.props().onSignUp).toHaveBeenCalled();
  });
});
