import React from "react";
import { shallow, mount } from "enzyme";
import About from "./about";
import { handleToken } from "./header";
import { token, testtoken, test, testdel } from "./constants/user";

describe("Component", () => {
  it("should render user header, if token is not empty", () => {
    const wrapper = mount(<About />);
    expect(wrapper.find(".container")).toHaveLength(1);
  });
});
