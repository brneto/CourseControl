import '@babel/polyfill';
//https://babeljs.io/docs/en/next/v7-migration#remove-proposal-polyfills-in-babel-polyfill-https-githubcom-babel-babel-issues-8416
//https://github.com/babel/babel/commit/c8bb4500326700e7dc68ce8c4b90b6482c48d82f
import 'core-js/fn/array/flat-map';
import 'core-js/fn/string/match-all';
import 'jest-enzyme'; // Enzyme custom assertions: https://github.com/FormidableLabs/enzyme-matchers
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.setTimeout(10000);
