import React from 'react'
import {shallow} from 'enzyme'
import Main from '.'

describe('Main Container Component', () => {
    it('It should render without error', () => {
        const component = shallow(<Main />)
        const wrapper = component.find('.mainComponent');

        expect(wrapper.length).toBe(1)
    })
})