import 'jest-enzyme'; // Enzyme custom assertions: https://github.com/FormidableLabs/enzyme-matchers
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.setTimeout(10000);
