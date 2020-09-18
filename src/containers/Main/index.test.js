import React from 'react'
import {shallow} from 'enzyme'
import Main from '.'

describe('Main Container Component', () => {
    it('It should render without error', () => {
        const wrapper = shallow(<Main />)
        const classes = wrapper.find('.main-container');

        expect(classes.length).toBe(1)
    })
})