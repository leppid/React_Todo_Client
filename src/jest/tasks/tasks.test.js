import React from "react";
import { shallow } from "enzyme";
import Tasks from "../../components/tasks/tasks";

describe("Component", () => {
  const wrapper = shallow(<Tasks />);
  it("should render taskslist ", () => {
    expect(wrapper.find(".container")).toHaveLength(1);
  });
});
