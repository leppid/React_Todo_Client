import React from "react";
import { shallow } from "enzyme";
import Home from "../components/home";

describe("Component", () => {
  const wrapper = shallow(<Home />);
  it("should render h4 ", () => {
    expect(wrapper.find("h4")).toHaveLength(1);
  });
  it("should render links", () => {
    expect(wrapper.find("#signin")).toHaveLength(1);
    expect(wrapper.find("#signup")).toHaveLength(1);
  });
});
