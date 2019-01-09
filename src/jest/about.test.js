import React from "react";
import { mount } from "enzyme";
import About from "../components/about";

describe("Component", () => {
  it("should render user header, if token is not empty", () => {
    const wrapper = mount(<About />);
    expect(wrapper.find(".container")).toHaveLength(1);
  });
});
