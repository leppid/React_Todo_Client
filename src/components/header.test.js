import React from "react";
import { shallow } from "enzyme";
import Header from "./header";

describe("Component", () => {
  const wrapper = shallow(<Header />);
  it("should render important elements", () => {
    expect(wrapper.find("#logo")).toHaveLength(1);
    expect(wrapper.find("#signup")).toHaveLength(1);
    expect(wrapper.find("#signin")).toHaveLength(1);
  });
});
