import React from "react";
import Header from "./header";
import { mount } from "enzyme";
import { setToken } from "./constants/user";

describe("Component render", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should render user header, if token is not empty", () => {
    setToken("$2a$10$OoiwIL0lLJigkUY9VH6xg.7.IQu2prMP0B.H4/Mow3HpbtJgWtT76");
    const wrapper = mount(<Header />);
    expect(wrapper.find("#dashboard")).toHaveLength(1);
    expect(wrapper.find("#deltasks")).toHaveLength(1);
    expect(wrapper.find("#addtask")).toHaveLength(1);
  });

  it("should render guest header, if token is empty", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("#logo")).toHaveLength(1);
    expect(wrapper.find("#signin")).toHaveLength(1);
    expect(wrapper.find("#signup")).toHaveLength(1);
  });
});
