import React from "react";
import { shallow } from "enzyme";
import P404 from "../components/p404";

describe("Component", () => {
  const wrapper = shallow(<P404 />);
  it("it should render 'h1'", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
  it("in should render 'p'", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
