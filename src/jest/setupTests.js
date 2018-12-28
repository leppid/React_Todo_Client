import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";
import LocalStorageMock from "./localStorage";

configure({ adapter: new Adapter() });

global.window = new JSDOM().window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.localStorage = new LocalStorageMock();
