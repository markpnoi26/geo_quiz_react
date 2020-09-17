import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import Main from './containers/Main'
import ScoreBoard from './containers/ScoreBoard'

describe("Makes sure the App renders the correct Components", () => {
  it('renders Main Container Component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Main />)).toBe(true)
  });

  it('renders Score Board Container Component',() => {
    const component = shallow(<App />)

    expect(component.contains(<ScoreBoard />)).toBe(true)
  })

})